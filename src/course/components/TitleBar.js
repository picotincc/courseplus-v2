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

    handleTagClick(schoolId, majorId){
        FormatUtil.openNewTab("/search/"+schoolId+"/"+majorId);
    }

    render(){
        const { course } = this.props;
        if(course.length == 0){
            return(
                <Icon type="loading" />
            );
        }else{
            const tagData = {
                schoolId: course.major.school.id,
                schoolName: course.major.school.name,
                majorId: course.major.id,
                majorName: course.major.code + course.major.name
            }
            return(
                <div className="cp-course-title-bar">
                    <span className="title">{course.subject.code}{course.subject.major.name}</span>
                    <Tag tagData={tagData} tagClick={this.handleTagClick} />
                </div>
            );
        }
    }
}
