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
        const tagData = {
            schoolId: data.major.school.id,
            schoolName: data.major.school.name,
            majorId: data.major.id,
            majorName: data.major.code + data.major.name
        }

        return(
            <li key={data.id} className="course-item" onClick = {() => listItemClick(data.id)}>
                <div className="course-info" style={{
                    "background":"url("+ data.subject.img_url +") no-repeat",
                    "background-size": "255px"
                }}>
                    <div className="title">{data.subject.code+data.subject.name}</div>
                    <div className="tag-wrapper">
                        <Tag tagData={tagData} tagClick={tagClick}/>
                    </div>
                    <Rate disabled allowHalf defaultValue={data.star} />
                </div>
                <div className="author-info">
                    <div className="author">
                        <i className="icon" style = {{
                            "background": "url(" + data.teacher.img_url + ") no-repeat",
                            "background-size": "40px"
                        }}></i>
                        <span className="name">{data.teacher.name}</span>
                        <span className="purchase">{data.buyer_num}人最近购买</span>
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
