import * as React from 'react';
import { SearchResult } from './search-store';
import { Tag } from 'antd';
import { StarOutlined } from '@ant-design/icons';

interface Props {
    item: SearchResult;
}

export class RepositoryItem extends React.Component<Props> {
    render() {
        const { item } = this.props;

        return (
            <div key={item.id} style={{ padding: '24px 0', borderTop: '1px solid #e1e4e8' }}>
                <a style={{ fontSize: '16px' }} href={item.url} target='__blank'>{item.nameWithOwner}</a>
                <div style={{ marginBottom: '4px' }} dangerouslySetInnerHTML={{ __html: item.shortDescriptionHTML }} />
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {item.repositoryTopics?.nodes.map(node => {
                        return (
                            <Tag
                                key={node.url}
                                style={{ borderRadius: 6, marginBottom: 4, cursor: 'pointer' }}
                                color='blue'
                                onClick={() => {
                                    window.open(node.url)
                                }}
                            >
                                <div style={{ fontSize: 12, fontWeight: 500 }}>{node.topic.name}</div>
                            </Tag>
                        );
                    })}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', fontSize: 12, marginTop: 4 }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: 16 }}>
                        <StarOutlined />
                        <div style={{ marginLeft: 4 }}>
                            {item.stargazers?.totalCount}
                        </div>
                    </div>
                    {
                        item.primaryLanguage &&
                        <div style={{ display: 'flex', alignItems: 'center', marginRight: 16 }}>
                            <div style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: item.primaryLanguage.color, marginRight: 4 }} />
                            <div>
                                {item.primaryLanguage.name}
                            </div>
                        </div>
                    }
                    {
                        item.licenseInfo && !item.licenseInfo.hidden &&
                        <div style={{ display: 'flex', alignItems: 'center', marginRight: 16 }}>
                            <div style={{ marginLeft: 4 }}>
                                {`${item.licenseInfo.spdxId} license`}
                            </div>
                        </div>
                    }
                    {
                        item.updatedAt &&
                        <div>
                            {`Updated on ${new Date(item.updatedAt).toLocaleString()}`}
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export class IssueItem extends React.Component<Props> {
    render() {
        const { item } = this.props;
        const body = item.body || ''
        const content = body.length > 120 ? body.substring(0, 120) + ' ...' : body;

        return (
            <div key={item.id} style={{ padding: '24px 0', borderTop: '1px solid #e1e4e8' }}>
                <a style={{ fontSize: '16px' }} href={item.url} target='__blank'>{item.title}</a>
                <div style={{ marginBottom: '4px' }}>{content}</div>
            </div>
        );
    }
}