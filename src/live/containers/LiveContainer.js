import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Tag from 'base/components/Tag';
import Player from "base/components/Player";
import DanmakuClient from 'base/util/DanmakuClient';
import DanmakuMessage from '../components/DanmakuMessage';
import CourseService from 'base/service/CourseService';

import "live/resource/index.less";


class LiveContainer extends Component {
    danmakuClient = null;

    constructor (props) {
        super(props);
        
    }

    state = {
        liveDetail: '',
        tag: {},
        message: '',
        messages: [],
        options: null
    }

    componentWillMount() {
        
        
    }

    componentWillReceiveProps(nextProps) {
        let liveId = this.props.params.liveId;
        let userId = nextProps.userInfo.id;
        let danmakuToken = nextProps.userInfo.danmaku_token;
        this.danmakuClient = new DanmakuClient(liveId, userId, danmakuToken, {
            showNotify: this.showNotify.bind(this),
            showMessage: this.showMessage.bind(this)
        });
        CourseService.getLiveDetail(liveId).then((liveDetail) => {
            this.setState({
                liveDetail,
                tag: {
                    schoolId: liveDetail.course.major.school.id,
                    majorId: liveDetail.course.major.id,
                    schoolName: liveDetail.course.major.school.name,
                    majorName: liveDetail.course.major.code + liveDetail.course.major.name
                },
                options: {
                    screenshot: true,
                    comment: false,
                    live: true,
                    video: {
                        url: liveDetail.live.live_url
                    },
                    danmaku: {
                        id: nextProps.params.liveId,
                        token: nextProps.userInfo.danmaku_token,
                        maximum: 1000,
                    }
                }
            });
        });
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
        if(e.type == 'keyup' && e.key != 'Enter') {
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
        let { liveDetail, tag, options, messages } = this.state;
        let { userInfo } = this.props;
        
        return (
            <div className="cp-live-container">
                <Row>
                    <Col span={18}>
                        <div className="live-main-wrapper">
                            <div className="live-title-wrapper">
                                <h1 className="live-title">{liveDetail && (liveDetail.course.code + liveDetail.course.name)}</h1>
                                <Tag tagData={tag} />
                                <h2 className="live-sub-title">{liveDetail && liveDetail.live.period.name}</h2>
                            </div>
                            <div className="live-player-wrapper">
                                <Player options={options} ref='player'/>
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
      userInfo: state.userInfo
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(LiveContainer);
