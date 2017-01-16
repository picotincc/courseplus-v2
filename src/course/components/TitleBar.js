import React, { Component } from 'react';
import { Icon } from 'antd';
import Tag from 'base/components/Tag';
import FormatUtil from 'base/util/FormatUtil';

export default class TitleBar extends Component {

    constructor (props) {
        super(props);
        this.handleTagClick = this.handleTagClick.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount(){

    }

    handleTagClick(school, discipline){
        FormatUtil.openNewTab("/search/"+school+"/"+discipline);
    }

    render(){
        const { course } = this.props;
        return(
            (course.length == 0) ? (
                <Icon type="loading" />
            ) : (
                <div className="cp-course-title-bar">
                    <span className="title">{course.subject.code}{course.subject.major.name}</span>
                    <Tag school={course.major.school.name} discipline={course.major.code+course.major.name} tagClick={this.handleTagClick} />
                </div>

            )
        )
    }
}
