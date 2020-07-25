import * as React from 'react';
import { observer } from 'mobx-react';
import { Layout, Spin } from 'antd';
import { SearchList } from '../parts/SearchList';
import { SearchStore } from '../parts/search-store';

const { Header, Content } = Layout;

@observer
export class Search extends React.Component {

    store = new SearchStore(document.location.search);

    render() {
        return <Layout style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Header style={{ display: 'flex', alignItems: 'center', height: '53px', backgroundColor: '#24292e', color: '#fff', padding: '0 20px' }}>
                <div style={{ flexShrink: 0, fontSize: '16px', fontWeight: 'bold', marginRight: '16px' }}>Github Explorer</div>
            </Header>
            <Content style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff', padding: '24px 0 50px' }}>
                <Spin spinning={this.store.loading}>
                    <SearchList store={this.store} />
                </Spin>
            </Content>
        </Layout>
    }
}
