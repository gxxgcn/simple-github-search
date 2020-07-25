import * as React from 'react';
import { Input, Button } from 'antd';
import { GithubConfig } from './config';

interface Props {
    config: GithubConfig;
}
export class TokenInput extends React.Component<Props> {

    value = '';

    render() {
        const { config } = this.props;
        return (
            <div style={{ maxWidth: '768px', margin: 'auto', padding: '0 20px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Input
                        placeholder='input access token for test'
                        onChange={e => this.value = e.target.value}
                    />
                    <Button onClick={() => config.setGithubAccessToken(this.value)}>Confirm</Button>
                </div>

            </div>
        );
    }
}