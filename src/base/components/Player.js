import React, {Component} from 'react'
import { Icon } from 'antd';
import DPlayer from 'base/util/DPlayer/DPlayer';

class Player extends Component {
    inited = false;

    constructor (props) {
        super(props)

    }

    state = {
    }

    componentWillMount () {
        
    }

    componentDidUpdate() {
        let options = this.props.options;
        if(!options) return;
        options.element = this.refs.player;;
        this.player = new DPlayer(options);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(!this.inited && nextProps.options) {
            this.inited = true;
            return true;
        } 
        return false;
    }

    launchDanmaku(danmaku) {
        this.player.dan.push(danmaku);
    }

    render () {
        return (
            <div className="dplayer" ref="player">
                
            </div>
        )
    }
}

export default Player