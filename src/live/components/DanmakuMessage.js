import React, {Component, PropTypes} from 'react';
import DateUtil from 'base/util/DateUtil';

class DanmakuMessage extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        let message = this.props.data;

        if(message.type === 'MESSAGE') {
            return (
                <div className="danmaku-message">
                    <div className="message-title">
                        <h4>{message.from.nickname}:</h4>
                        <span>{DateUtil.formatDate(message.time, 'HH:mm:ss')}</span>
                    </div>
                    <div className="message-body">{message.content.text}</div>
                </div>
            );
        }

        if(message.type === 'NOTIFY') {
            return (
                <div className="danmaku-notify">
                    <span>{message.content}</span>
                </div>
            );
        }
    }
}

DanmakuMessage.propTypes = {

};

export default DanmakuMessage;