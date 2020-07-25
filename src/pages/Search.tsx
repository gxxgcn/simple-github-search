import * as React from 'react';
import { observer } from 'mobx-react';
import { Layout } from 'antd';
import { SearchList } from '../parts/SearchList';
import { TokenInput } from '../parts/TokenInput';
import { GithubConfig } from '../parts/config';

const { Header, Content } = Layout;

@observer
export class Search extends React.Component {
    config = new GithubConfig();

    render() {
        return <Layout style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '53px', backgroundColor: '#24292e', color: '#fff', padding: '0 20px' }}>
                <div style={{ flexShrink: 0, fontSize: '16px', fontWeight: 'bold', marginRight: '16px' }}>Github Explorer</div>
                <div style={{ cursor: 'pointer' }} onClick={() => this.config.deleteToken()}>清除token</div>
            </Header>
            <Content style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff', padding: '24px 0 50px' }}>
                {this.renderContent()}
            </Content>
        </Layout>
    }

    renderContent = () => {
        if (!this.config.token) {
            return <TokenInput config={this.config} />;
        }

        return <SearchList accessToken={this.config.token} />;
    }
}
