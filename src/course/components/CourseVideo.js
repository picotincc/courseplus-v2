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
        const { period, detail, buyClickHandler } = this.props;
        const state = detail ? detail.live.state : null;
        const isBuy = detail ? detail.is_buy : null;
        const price = period.price ? period.price : (detail ? detail.price : 0);

        const videoShow = (state=="CODED"||state=="CODING") ? "block" : "none";
        const introContent = detail ? detail.content : "";
        const barShow = isBuy==0 || (isBuy && (state=="ING"||state=="BEFORE")) ? "block" : "none";
        const statusBtn = isBuy ? (state=="BEFORE" ? "status-button disabled" : "status-button live") : "status-button";

        return(
            <div className="course-video">
                <div className="video-window" style={{display:videoShow}}>
                    此处应有视频
                </div>
                <div className="intro-window" dangerouslySetInnerHTML={{__html: introContent}}>
                </div>
                <div className="status-bar" style={{display:barShow}}>
                    <div className="period-price" style={{display:isBuy ? "none" : "block"}}>
                        <div>¥{parseFloat(price).toFixed(2)}</div>
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
