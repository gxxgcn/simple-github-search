import * as React from 'react';
import { List, Radio, Button } from 'antd';
import { SearchStore, SearchResult } from './search-store';
import { observer } from 'mobx-react';
import { RepositoryItem, IssueItem } from './SearchResultItem';
import { SearchInput } from './SearchInput';
import { SearchOutlined } from '@ant-design/icons';

interface Props {
    store: SearchStore;
}

@observer
export class SearchList extends React.Component<Props> {
    render() {
        return (
            <div style={{ maxWidth: '768px', margin: 'auto', padding: '0 20px' }}>
                <div style={{ marginBottom: 24 }}>
                    <h2 style={{ color: '#24292E' }}><SearchOutlined style={{ marginRight: 6 }} />Search Github</h2>
                    <SearchInput
                        style={{ width: '100%' }}
                        store={this.props.store}
                    />
                </div>
                {this.renderTypeRadio()}
                {this.renderCountTip()}
                {this.renderList()}
            </div>
        );
    }

    renderList = () => {
        const { store } = this.props;
        const dataSource = (store.data?.data.search.nodes || []).filter(item => item.id);
        if (!store.data) {
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
                        { text: 'Next', action: 'next', disabled: store.pageInfo?.hasNextPage },
                        { text: 'Previous', action: 'previous', disabled: store.pageInfo?.hasPreviousPage },
                    ].filter(item => item.disabled).map(item => (
                        <Button
                            key={item.action}
                            style={{ padding: '0 10px', fontSize: '16px' }}
                            type='link'
                            onClick={() => {
                                store.setPageInfo(item.action);
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
        const { store } = this.props;

        if (store.type === 'REPOSITORY') {
            return <RepositoryItem item={item} />;
        }

        if (store.type === 'ISSUE') {
            return <IssueItem item={item} />;
        }

        return null;
    }

    renderCountTip = () => {
        const { store } = this.props;
        const tip = (() => {
            switch (store.type) {
                case 'REPOSITORY':
                    return `Showing ${store.data?.data.search.repositoryCount.toLocaleString()} available repository results`;
                case 'ISSUE':
                    return `${store.data?.data.search.issueCount.toLocaleString()} issues`;
                default:
                    return '';
            }
        })()

        return (
            store.data && tip &&
            <div style={{ fontSize: 24, color: '#24292E', fontWeight: 'bold', marginBottom: 16 }}>{tip}</div>
        );
    }

    renderTypeRadio = () => {
        const { store } = this.props;
        return (
            <div style={{ marginBottom: 24 }}>
                <Radio.Group
                    size='small'
                    buttonStyle='solid'
                    defaultValue={store.type}
                    onChange={e => {
                        store.setType(e.target.value);
                    }}
                >
                    <Radio.Button value="REPOSITORY">Repositories</Radio.Button>
                    <Radio.Button value="ISSUE">Issues</Radio.Button>
                </Radio.Group>
            </div>
        );
    }
}