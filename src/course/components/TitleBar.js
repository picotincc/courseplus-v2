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
        const school = "南京大学";
        const discipline = "083001环境化学";

        return(
            <div className="cp-course-title-bar">
                <span className="title">808环境化学</span>
                <Tag school={school} discipline={discipline} tagClick={this.handleTagClick} />
            </div>
        )
    }
}
