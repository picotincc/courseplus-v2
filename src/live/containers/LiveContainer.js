import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Tag from 'base/components/Tag';
import Player from "base/components/Player";
import DanmakuClient from 'base/util/DanmakuClient';
import DanmakuMessage from '../components/DanmakuMessage';

import "live/resource/index.less";


class LiveContainer extends Component {
    danmakuClient = null;

    constructor (props) {
        super(props);
        
    }

    state = {
        message: '',
        messages: []
    }

    componentWillMount() {
        let liveId = this.props.params.liveId;
        let userId = '1';
        let danmakuToken = '26eb313220f53856584c1d92f743c56cfe6a73af2f06e514940ebd64a4b3b69a';
        this.danmakuClient = new DanmakuClient(liveId, userId, danmakuToken, {
            showNotify: this.showNotify.bind(this),
            showMessage: this.showMessage.bind(this)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        let messagePanelBody = this.refs.messagePanelBody;
        if(messagePanelBody) {
            messagePanelBody.scrollTop = messagePanelBody.scrollHeight;
        }
    }
    

    componentDidMount() {

    }

    showMessage(from, content, time) {
        this.state.messages.push({
            type: 'MESSAGE',
            from, content, time
        });
        console.log(content);
        this.refs.player.launchDanmaku(content);
        this.setState({
            messages: this.state.messages
        });
    }

    showNotify(content, level) {
        this.state.messages.push({
            type: 'NOTIFY',
            content, level
        });
        this.setState({
            messages: this.state.messages
        });
    }

    handleSendMessage(e) {
        if(e.key != 'Enter') {
            return;
        }
        let { message } = this.state;
        console.log('[send message]', message);
        this.danmakuClient.sendMessage(message);
        this.setState({
            message: ''
        })
    }

    render() {
        let tagData = {
            schoolId: 1,
            majorId: 1,
            schoolName: '南京大学',
            majorName: '0803001环境化学'
        }
        let options = {
            screenshot: true,
            comment: false,
            live: true,
            video: {
                url: 'http://6416.liveplay.myqcloud.com/live/6416_364a6098dd.flv'
            },
            danmaku: {
                id: this.props.params.liveId,
                token: 'tokendemo',
                maximum: 1000,
            }
        }
        let { messages } = this.state;
        return (
            <div className="cp-live-container">
                <Row>
                    <Col span={18}>
                        <div className="live-main-wrapper">
                            <div className="live-title-wrapper">
                                <h1 className="live-title">808环境化学</h1>
                                <Tag tagData={tagData} />
                                <h2 className="live-sub-title">课时一：环境化学专业课复习建议策略</h2>
                            </div>
                            <div className="live-player-wrapper">
                                <Player options={options}/>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="danmaku-launcher-wrapper">
                            <div className="message-panel">
                                <div className="panel-heading">直播弹幕讨论区
                                </div>
                                <div className="panel-body" ref="messagePanelBody">
                                    {
                                        messages.map((a, i) => (
                                            <DanmakuMessage key={i} data={a}/>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="launcher-wrapper">
                                <textarea placeholder="有疑问？赶快和老师讨论吧" 
                                          value={this.state.message} 
                                          onChange={(e) => {this.setState({message: e.target.value})}} 
                                          onKeyUp={this.handleSendMessage.bind(this)}></textarea>
                                <button onClick={this.handleSendMessage.bind(this)}>发送</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                
                
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    //   userInfo: state.userInfo
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(LiveContainer);
