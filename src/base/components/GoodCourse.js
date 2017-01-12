import React, { Component } from 'react';
import { Rate } from 'antd';
import FormatUtil from '../util/FormatUtil';

export default class GoodCourse extends Component {

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
        const data = this.props.data;
        this.props.tagClick(data.school, data.discipline);
    }

    render(){
        const { data, listItemClick } = this.props;

        return(
            <li key={data.id} className="course-item" onClick = {() => listItemClick(data.id)}>
                <div className="course-info" style={{background:"url("+ data.coursebg +") no-repeat"}}>
                    <div className="title">{data.course}</div>
                    <div className="name"
                         onClick = {this.handleTagClick}>
                         <span>{data.school} {data.discipline}</span>
                     </div>
                    <Rate disabled allowHalf defaultValue={data.star} />
                </div>
                <div className="author-info">
                    <div className="author">
                        <i className="icon" style = {{"background": "url(" + data.author.icon + ") no-repeat" }}></i>
                        <span className="name">{data.author.name}</span>
                        <span className="purchase">{data.purchase}人最近购买</span>
                    </div>
                    <div className="honour">{data.author.honour}</div>
                    <div className="lable-group">
                        <span>{data.author.label}</span>
                    </div>
                </div>
            </li>
        )
    }
}
