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
        let { period, detail } = this.props;
        let video = detail ? detail.content : "";
        let status = period.is_buy === 1 ? "进入直播间" : "立刻购买";
        return(
            <div className="course-video">
                <iframe className="main-window" src={video}></iframe>
                <div className="status-bar">
                    <span className="period-price">{period.price}</span>
                    <div className="status-button">{status}</div>
                </div>
            </div>
        );
    }
}

export default CourseVideo
