import React, { Component } from 'react';
import { Rate } from 'antd';

export default class GoodCourses extends Component {

    constructor (props) {
        super(props);
        this.handleListItemClick = this.handleListItemClick.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    handleListItemClick(id){
        console.log("item" + id);

    }

    handleCourseClick(id, event){
        console.log("course" + id);
        event.stopPropagation();
    }

    componentDidMount(){

    }

    render(){
        const { courseList } = this.props;
        //console.log(courseList);

        return(
            <ul className="cp-good-courses">
                {courseList.map((item,index) => {
                    return (
                        <li key={item.id} className="course-item" onClick = {() => this.handleListItemClick(item.id)}>
                            <div className="course-info" style={{background:"url("+ item.coursebg +") no-repeat"}}>
                                <div className="title">{item.course}</div>
                                <div className="name" onClick = {this.handleCourseClick.bind(this,item.id)}><span>{item.school} {item.discipline}</span></div>
                                <Rate disabled allowHalf defaultValue={item.star} />
                            </div>
                            <div className="author-info">
                                <div className="author">
                                    <i className="icon" style = {{"background": "url(" + item.author.icon + ") no-repeat" }}></i>
                                    <span className="name">{item.author.name}</span>
                                    <span className="purchase">{item.purchase}人最近购买</span>
                                </div>
                                <div className="honour">{item.author.honour}</div>
                                <div className="lable-group">
                                    <span>{item.author.label}</span>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        )
    }
}
