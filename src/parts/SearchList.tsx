import * as React from 'react';
import { List, Radio, Button, Spin } from 'antd';
import { SearchStore, SearchResult } from './search-store';
import { observer } from 'mobx-react';
import { RepositoryItem, IssueItem } from './SearchResultItem';
import { SearchInput } from './SearchInput';
import { SearchOutlined } from '@ant-design/icons';

interface Props {
    accessToken: string;
}

@observer
export class SearchList extends React.Component<Props> {

    store = new SearchStore({ accessToken: this.props.accessToken, search: document.location.search });

    render() {
        return (
            <Spin spinning={this.store.loading}>
                <div style={{ maxWidth: '768px', margin: 'auto', padding: '0 20px' }}>
                    <div style={{ marginBottom: 24 }}>
                        <h2 style={{ color: '#24292E' }}><SearchOutlined style={{ marginRight: 6 }} />Search Github</h2>
                        <SearchInput
                            style={{ width: '100%' }}
                            store={this.store}
                        />
                    </div>
                    {this.renderTypeRadio()}
                    {this.renderCountTip()}
                    {this.renderList()}
                </div>
            </Spin>
        );
    }

    renderList = () => {
        const dataSource = (this.store.data?.data.search.nodes || []).filter(item => item.id);
        if (!this.store.data) {
            return null;
        }
        return (
            <List<SearchResult>
                style={{ height: '100%' }}
                itemLayout="vertical"
                size="large"
                dataSource={dataSource}
                renderItem={this.renderItem}
                footer={<div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
                    {[
                        { text: 'Next', action: 'next', disabled: this.store.pageInfo?.hasNextPage },
                        { text: 'Previous', action: 'previous', disabled: this.store.pageInfo?.hasPreviousPage },
                    ].filter(item => item.disabled).map(item => (
                        <Button
                            key={item.action}
                            style={{ padding: '0 10px', fontSize: '16px' }}
                            type='link'
                            onClick={() => {
                                this.store.setPageInfo(item.action);
                                window.scrollTo(0, 0);
                            }}
                        >
                            {item.text}
                        </Button>
                    ))}
                </div>}
            />
        );
    }

    renderItem = (item: SearchResult) => {
        if (this.store.type === 'REPOSITORY') {
            return <RepositoryItem item={item} />;
        }

        if (this.store.type === 'ISSUE') {
            return <IssueItem item={item} />;
        }

        return null;
    }

    renderCountTip = () => {
        const tip = (() => {
            switch (this.store.type) {
                case 'REPOSITORY':
                    return `Showing ${this.store.data?.data.search.repositoryCount.toLocaleString()} available repository results`;
                case 'ISSUE':
                    return `${this.store.data?.data.search.issueCount.toLocaleString()} issues`;
                default:
                    return '';
            }
        })()

        return (
            this.store.data && tip &&
            <div style={{ fontSize: 24, color: '#24292E', fontWeight: 'bold', marginBottom: 16 }}>{tip}</div>
        );
    }

    renderTypeRadio = () => {
        return (
            <div style={{ marginBottom: 24 }}>
                <Radio.Group
                    size='small'
                    buttonStyle='solid'
                    defaultValue={this.store.type}
                    onChange={e => {
                        this.store.setType(e.target.value);
                    }}
                >
                    <Radio.Button value="REPOSITORY">Repositories</Radio.Button>
                    <Radio.Button value="ISSUE">Issues</Radio.Button>
                </Radio.Group>
            </div>
        );
    }
}