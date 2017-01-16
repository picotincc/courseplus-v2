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
        let { period } = this.props;
        let status = period.is_buy === 1 ? "进入直播间" : "立刻购买";
        return(
            <div className="course-video">
                <iframe className="main-window" src=''></iframe>
                <div className="status-bar">
                    <span className="period-price">{period.price}</span>
                    <div className="status-button">{status}</div>
                </div>
            </div>
        );
    }
}

export default CourseVideo
