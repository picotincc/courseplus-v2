import React, { Component } from 'react';
import FormatUtil from '../util/FormatUtil';

export default class Tag extends Component {

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

    handleTagClick(event){
        event.stopPropagation();
        const schoolId = this.props.tagData.schoolId;
        const majorId = this.props.tagData.majorId;
        this.props.tagClick(schoolId, majorId);
    }

    render(){
        const { tagData } = this.props;

        return(
            <div className="cp-tag" onClick = {this.handleTagClick}>
                {tagData.schoolName}&nbsp;{tagData.majorName}
            </div>
        )
    }
}
