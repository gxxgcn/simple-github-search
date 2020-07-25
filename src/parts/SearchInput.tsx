import * as React from 'react';
import { Input } from 'antd';
import * as _ from 'lodash';
import { SearchStore } from './search-store';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { SearchHistoryStore } from './seach-history';

interface Props {
    style?: React.CSSProperties;
    store: SearchStore;
}

@observer
export class SearchInput extends React.Component<Props> {

    historyStore = new SearchHistoryStore();
    input: Input | null = null;

    @observable showHistory = false;

    componentDidMount() {
        window.document.addEventListener('click', this.documentClickHandler)
    }

    componentWillUnmount() {
        window.document.removeEventListener('click', this.documentClickHandler)
    }

    render() {
        const { style, store } = this.props;
        return (
            <div style={{ position: 'relative' }}>
                <Input
                    ref={r => this.input = r}
                    placeholder='Search...'
                    style={{ borderRadius: 6, ...style }}
                    onChange={e => this.onChange(e.target.value)}
                    defaultValue={store.q}
                    onFocus={this.show}
                    onClick={e => e.nativeEvent.stopImmediatePropagation()}
                    onPressEnter={e => this.onChange(e.currentTarget.value)}
                />
                {
                    this.showHistory && this.historyStore.history.length > 0 &&
                    <div
                        style={{ zIndex: 99, position: 'absolute', top: 36, left: 0, right: 0, maxHeight: 200, backgroundColor: '#fff', boxShadow: 'rgb(51, 51, 51, 0.1) 0px 10px 12px' }}
                        onClick={e => e.nativeEvent.stopImmediatePropagation()}
                    >
                        {this.historyStore.history.map(v => {
                            return (
                                <div
                                    key={v}
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 12px', fontSize: '16px', color: '#666', cursor: 'pointer' }}
                                    onClick={() => {
                                        this.close();
                                        this.input?.setValue(v);
                                        store.setQ(v);
                                    }}
                                >
                                    {v}
                                </div>
                            )
                        })}
                        <div style={{ display: 'flex', flexDirection: 'row-reverse', padding: '4px 12px' }}>
                            <div style={{ color: '#666', cursor: 'pointer' }} onClick={e => {
                                this.historyStore.clean();
                                this.close();
                            }}>清除记录</div>
                        </div>
                    </div>
                }
            </div>
        );
    }

    onChange = _.debounce((val: string) => {
        const { store } = this.props;
        this.close();
        this.input?.blur();
        store.setQ(val);
        this.historyStore.add(val);
    }, 800);

    @action show = () => {
        this.showHistory = true;
    }

    @action close = () => {
        this.showHistory = false;
    }

    documentClickHandler = () => {
        this.close();
    }
}