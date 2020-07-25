import { observable, computed, action, toJS } from "mobx";
import Axios from "axios";
import { stringify } from 'query-string';
import { parse } from "querystring";

const endpoint = 'https://api.github.com/graphql';

const searchQuery = `
query githubsearch($query: String!, $first: Int, $last: Int, $type: SearchType!, $after: String, $before: String) {
    search(query: $query, type: $type, first: $first, last: $last, after: $after, before: $before) {
        issueCount
        repositoryCount
        nodes {
            ... on Repository {
                id
                name
                nameWithOwner
                updatedAt
                shortDescriptionHTML(limit: 120)
                primaryLanguage {
                    color
                    name
                }
                licenseInfo {
                    hidden
                    spdxId
                }
                repositoryTopics(first: 10) {
                    nodes {
                        topic {
                            name
                        }
                        url
                    }
                }
                stargazers {
                    totalCount
                }
                url
            }
            ... on Issue {
                id
                title
                state
                body
                url
            }
        }
        pageInfo {
            hasNextPage
            startCursor
            hasPreviousPage
            endCursor
        }
    }
}
`;

export interface SearchResult {
    id: string;
    name: string;
    nameWithOwner: string;
    updatedAt: string;
    shortDescriptionHTML: string;
    primaryLanguage: {
        color: string;
        name: string;
    };
    licenseInfo: {
        hidden: boolean;
        spdxId: string;
    };
    repositoryTopics?: {
        nodes: [{
            topic: {
                name: string
            };
            url: string;
        }];
    };
    stargazers?: {
        totalCount: number;
    };
    url: string;

    title: string;
    state: string;
    body: string;
}

interface PageInfo {
    hasNextPage: boolean
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
}

export class SearchStore {
    @observable data?: {
        data: {
            search: {
                nodes: SearchResult[];
                repositoryCount: number;
                issueCount: number;
                pageInfo: PageInfo;
            }
        }
    };


    @observable total = 0;
    @observable loading = false;

    @observable q: string = '';
    @observable type: string = 'REPOSITORY';

    first?: number = 10;
    last?: number;
    after?: string;
    before?: string;

    accessToken?: string;

    @computed get pageInfo() {
        return this.data?.data.search.pageInfo;
    }
    @computed get pageTotal() {
        if (this.type === 'REPOSITORY') {
            return Math.min(1000, this.data?.data.search.repositoryCount || 0);
        }
        if (this.type === 'ISSUE') {
            return Math.min(1000, this.data?.data.search.issueCount || 0);
        }
        return 0;
    }

    constructor(vars: { accessToken: string, search: string }) {
        const { accessToken, search } = vars;
        this.accessToken = accessToken;
        this.loadFromSearch(search);
    }

    @action loadFromSearch = (search: string) => {
        const obj = parseQuery(search);
        if (obj['q']) {
            this.q = obj['q'] as string;
        }
        if (obj['type']) {
            this.type = obj['type'] as string;
        }
        this.search();
    }

    @action setQ = (q: string) => {
        this.q = q;
        this.after = undefined;
        this.before = undefined;
        setBrowserUrl({ q });
        this.search();
    }
    @action setType = (type: string) => {
        this.type = type;
        this.data = undefined;
        setBrowserUrl({ type });
        this.search();
    }
    setPageInfo = (type: string) => {
        if (type === 'next') {
            this.after = this.pageInfo?.endCursor;
            this.before = undefined;
            this.first = 10;
            this.last = undefined;
        }
        if (type === 'previous') {
            this.before = this.pageInfo?.startCursor;
            this.after = undefined;
            this.last = 10;
            this.first = undefined;
        }
        this.search();
    }

    @action search = () => {
        if (!this.accessToken) {
            console.error('token is missing');
            return;
        }
        this.loading = true;
        const variables = toJS({
            query: this.q,
            first: this.first,
            last: this.last,
            type: this.type,
            after: this.after,
            before: this.before,
        });

        Axios({
            url: endpoint,
            headers: {
                Authorization: `Bearer ${this.accessToken}`
            },
            method: 'POST',
            data: ({
                query: searchQuery,
                variables,
            })
        })
            .then(action(r => {
                if (r.status === 200) {
                    this.data = r.data;
                }
                this.loading = false;
            }))
            .catch(action(err => {
                console.error(err);
                this.loading = false;
            }))
    }

}

function setBrowserUrl(queryObj: { [key: string]: any }) {
    let search = window.location.search;
    const currentObj = parseQuery(search);
    var url = `${window.location.pathname}?${stringify({ ...currentObj, ...queryObj })}`
    window.history.pushState({ url }, '', url)
}

function parseQuery(search: string): { [key: string]: any } {
    if (search.startsWith('?')) {
        search = search.substring(1);
    }
    return parse(search);
}