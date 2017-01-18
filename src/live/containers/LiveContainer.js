import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Tag from 'base/components/Tag';
import Player from "base/components/Player";

import "live/resource/index.less";


class LiveContainer extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        message: ''
    }

    componentDidMount() {

    }

    handleSendMessage() {
        let { message } = this.state;
        console.log('[send message]', message);
        this.setState({ message: '' });
    }

    render()
    {
        let tmp = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        return (
            <div className="cp-live-container">
                <Row>
                    <Col span={18}>
                        <div className="live-main-wrapper">
                            <div className="live-title-wrapper">
                                <h1 className="live-title">808环境化学</h1>
                                <Tag school={"南京大学"} discipline={"0803001环境化学"}/>
                                <h2 className="live-sub-title">课时一：环境化学专业课复习建议策略</h2>
                            </div>
                            <div className="live-player-wrapper">
                                <Player />
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="danmaku-launcher-wrapper">
                            <div className="message-panel">
                                <div className="panel-heading">直播弹幕讨论区
                                </div>
                                <div className="panel-body">
                                    {
                                        tmp.map((a, i) => (
                                            <div className="danmaku-message" key={i}>
                                                <div className="message-title">
                                                    <h4>XWang1024:</h4>
                                                    <span>20:01:01</span>
                                                </div>
                                                <div className="message-body">
                                                请问第二题的x^2是怎么得到的？我为什么得不到，是题目的问题吗？请问第二题的x^2是怎么得到的？我为什么得不到，是题目的问题吗？请问第二题的x^2是怎么得到的？我为什么得不到，是题目的问题吗？
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="launcher-wrapper">
                                <textarea placeholder="有疑问？赶快和老师讨论吧" value={this.state.message} onChange={(e) => {this.setState({message: e.target.value})}}></textarea>
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
      
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(LiveContainer);
