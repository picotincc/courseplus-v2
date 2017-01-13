import React, { Component } from 'react';
import FormatUtil from 'base/util/FormatUtil';

import HomeService from 'base/service/HomeService';

import GoodCourse from 'base/components/GoodCourse';


export default class GoodCoursesContainer extends Component {

    constructor (props) {
        super(props);
        this._loadGoodCourses();
        this.handleMoreClick = this.handleMoreClick.bind(this);
        this.handleListItemClick = this.handleListItemClick.bind(this);
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

    handleMoreClick(){
        FormatUtil.openNewTab('/search');
    }

    handleListItemClick(id){
        FormatUtil.openNewTab("/course");
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
                    <span className="more" onClick={() => this.handleMoreClick()}>更多 ></span>
                </div>
                <ul className="courses-list">
                    {goodCourses.map((item,index) => {
                        return (
                            <GoodCourse key={item.id} data={item} listItemClick={this.handleListItemClick} />
                        );
                    })}
                </ul>
            </div>
        )
    }
}
