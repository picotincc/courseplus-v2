import React, { Component } from 'react';
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
        FormatUtil.openNewTab("/search");
    }

    render(){
        // const school = "南京大学";
        // const discipline = "083001环境化学";

        //const { course } = this.props;

        return(
            <div>test</div>
            // <div className="cp-course-title-bar">
            //     <span className="title">{course.subject.code}{course.subject.major.name}</span>
            //     <Tag school={course.major.school.name} discipline={course.major.code+course.major.name} tagClick={this.handleTagClick} />
            // </div>
        )
    }
}
