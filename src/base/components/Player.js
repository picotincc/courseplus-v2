import React, {Component} from 'react'
import { Icon } from 'antd';
import DPlayer from 'base/util/DPlayer/DPlayer';

class Player extends Component {
    constructor (props) {
        super(props)

    }

    state = {
        images: []
    }

    componentWillMount () {
        
    }

    componentDidMount () {
        let options = this.props.options;
        options.element = this.refs.player;
        if(options.live) {
            options.autoplay = true;
        }
        this.player = new DPlayer(options);
    }

    componentWillUnmount () {

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