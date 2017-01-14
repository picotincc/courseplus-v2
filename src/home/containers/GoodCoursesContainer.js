import React, { Component } from 'react';
import { Icon } from 'antd';
import FormatUtil from 'base/util/FormatUtil';
import HomeGoodCoursesService from 'base/service/HomeGoodCoursesService';
import GoodCourse from 'base/components/GoodCourse';


export default class GoodCoursesContainer extends Component {

    constructor (props) {
        super(props);
        this.handleMoreClick = this.handleMoreClick.bind(this);
        this.handleListItemClick = this.handleListItemClick.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        goodCourses: null
    }

    componentDidMount(){
        HomeGoodCoursesService.getList().then((data) => {
            console.log(data);
            (data) && (this.setState({ goodCourses: data }));
        }).catch((err) => {
            console.log(err);
        });
    }

    handleMoreClick(){
        FormatUtil.openNewTab('/search');
    }

    handleListItemClick(id){
        FormatUtil.openNewTab("/course");
    }

    handleTagClick(school, discipline){
        FormatUtil.openNewTab("/search");
    }

    render(){

        return (
            <div className="cp-home-good-courses">
                <div className="title">
                    <span className="name">精品课程</span>
                    <span className="more" onClick={() => this.handleMoreClick()}>更多 ></span>
                </div>
                {
                    (this.state.goodCourses === null ) ? (
                        <Icon type="loading" />
                    ) : (
                        <ul className="courses-list">
                            {this.state.goodCourses.list.map((item,index) => {
                                return (
                                    <GoodCourse key={item.id} data={item} listItemClick={this.handleListItemClick} tagClick={this.handleTagClick} />
                                );
                            })}
                        </ul>
                    )
                }
            </div>
        )
    }
}
