import React, { Component } from 'react';

class CourseVideo extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount()
    {

    }

    render()
    {
        let { period, detail, buyClickHandler } = this.props;
        let state = detail ? detail.live.state : null;
        let isBuy = period.is_buy;

        let videoShow = (state=="CODED"||state=="CODING") ? "block" : "none";
        let introContent = detail ? detail.content : "";
        let barShow = isBuy==0 || (isBuy && (state=="ING"||state=="BEFORE")) ? "block" : "none";
        let statusBtn = isBuy ? (state=="BEFORE" ? "status-button disabled" : "status-button live") : "status-button";

        return(
            <div className="course-video">
                <div className="video-window" style={{display:videoShow}}>
                    此处应有视频
                </div>
                <iframe className="intro-window" src={introContent}>
                </iframe>
                <div className="status-bar" style={{display:barShow}}>
                    <div className="period-price" style={{display:isBuy ? "none" : "block"}}>
                        <div>¥{parseFloat(period.price).toFixed(2)}</div>
                        <div className="buy-hint">买断购买更划算！</div>
                    </div>
                    {
                        isBuy ? (
                            <div className={statusBtn} >进入直播间</div>
                        ) : (
                            <div className={statusBtn} onClick={buyClickHandler}>单课购买</div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default CourseVideo
