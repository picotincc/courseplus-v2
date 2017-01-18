import React, {Component} from 'react'
import { Icon } from 'antd';
import DPlayer from 'imports?Flv=dplayer/plugin/flv.min.js!dplayer';

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
        let { player } = this.refs;
        var dp = new DPlayer({
            element: player,                                                   // Optional, player element
            autoplay: false,                                                    // Optional, autoplay video, not supported by mobile browsers
            theme: '#60cdc9',                                                  // Optional, theme color, default: #b7daff
            loop: false,                                                       // Optional, loop play music, default: true
            lang: 'zh',                                                        // Optional, language, `zh` for Chinese, `en` for English, default: Navigator language
            screenshot: true,                                                  // Optional, enable screenshot function, default: false, NOTICE: if set it to true, video and video poster must enable Cross-Origin
            hotkey: true,                                                      // Optional, binding hot key, including left right and Space, default: true
            preload: 'auto',                                                   // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
            video: {                                                           // Required, video info
                url: 'http://ofcmexmic.bkt.clouddn.com/ClariS%20%E3%80%8E%E3%81%B2%E3%82%89%E3%81%B2%E3%82%89%20%E3%81%B2%E3%82%89%E3%82%89%E3%80%8FMusic%20Video.mp4', // Required, video url
                pic: 'http://ofcmexmic.bkt.clouddn.com/o_1b00tpqs3gvj11f7svutkm1anph.jpg' // Optional, music picture
            },
            // danmaku: {                                                         // Optional, showing danmaku, ignore this option to hide danmaku
            //     id: '9E2E3368B56CDBB4',                                        // Required, danmaku id, NOTICE: it must be unique, can not use these in your new player: `https://api.prprpr.me/dplayer/list`
            //     api: 'https://api.prprpr.me/dplayer/',                             // Required, danmaku api
            //     token: 'tokendemo',                                            // Optional, danmaku token for api
            //     maximum: 1000,                                                 // Optional, maximum quantity of danmaku
            //     addition: ['https://api.prprpr.me/dplayer/bilibili?aid=4157142']   // Optional, additional danmaku, see: `Bilibili 弹幕支持`
            // }
        });
    }

    componentWillUnmount () {

    }

    render () {
        return (
            <div className="dplayer" ref="player">
                
            </div>
        )
    }
}

export default Player