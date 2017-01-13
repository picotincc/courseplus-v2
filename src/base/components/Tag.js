import React, { Component } from 'react';

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
        const school = this.props.school;
        const discipline = this.props.discipline;
        this.props.tagClick(school, discipline);
    }

    render(){
        const {school, discipline} = this.props;

        return(
            <div className="cp-tag" onClick = {this.handleTagClick}>
                {school}&nbsp;{discipline}
            </div>
        )
    }
}
