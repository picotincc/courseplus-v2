import React, { Component } from 'react';
import { Rate } from 'antd';
import FormatUtil from '../util/FormatUtil';

import Tag from "./Tag";

export default class GoodCourse extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }


    state = {

    }

    componentDidMount(){

    }

    render(){
        const { data, listItemClick, tagClick } = this.props;

        return(
            <li key={data.id} className="course-item" onClick = {() => listItemClick(data.id)}>
                <div className="course-info" style={{background:"url("+ data.bg_url +") no-repeat"}}>
                    <div className="title">{data.name}</div>
                    <div className="tag-wrapper">
                        <Tag school={data.major.school.name} discipline={data.major.code + data.major.name} tagClick={tagClick}/>
                    </div>
                    <Rate disabled allowHalf defaultValue={data.star} />
                </div>
                <div className="author-info">
                    <div className="author">
                        <i className="icon" style = {{"background": "url(" + data.teacher.img_url + ") no-repeat" }}></i>
                        <span className="name">{data.teacher.name}</span>
                        <span className="purchase">{data.purchase}人最近购买</span>
                    </div>
                    <div className="honour">{data.teacher.introduction}</div>
                    <div className="lable-group">
                        <span>{data.teacher.description}</span>
                    </div>
                </div>
            </li>
        )
    }
}
