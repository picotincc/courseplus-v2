import React, { Component } from 'react';
import FormatUtil from 'base/util/FormatUtil';

import HomeService from 'base/service/HomeService';

import GoodCourse from 'base/components/GoodCourse';


export default class GoodCourses extends Component {

    constructor (props) {
        super(props);
        this._loadGoodCourses();
        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        goodCourses: []
    }

    componentDidMount()
    {


    }

    handleClick(){
        FormatUtil.openNewTab('/search');
    }

    _loadGoodCourses()
    {
        HomeService.getInstance().getGoodCourses()
        .then(res => {
            this.setState({
                goodCourses: res
            });
        });

    }

    render()
    {
        const { goodCourses } = this.state;
        return (
            <div className="cp-home-good-courses">
                <div className="title">
                    <span className="name">精品课程</span>
                    <span className="more" onClick={() => this.handleClick()}>更多 ></span>
                </div>
                <ul className="courses-list">
                    {goodCourses.map((item,index) => {
                        return (
                            <GoodCourse key={item.id} data={item} />
                        );
                    })}
                </ul>
            </div>
        )
    }
}
