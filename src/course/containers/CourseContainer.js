import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Affix } from 'antd';

import "course/resource/index.less";

import TitleBar from "../components/TitleBar";
import Sidebar from "../components/Sidebar";
import TopTabs from "../components/TopTabs";


class CourseContainer extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount()
    {


    }

    render()
    {
        return (
            <div className="cp-course-container">
                <div className="titleBar">
                    <TitleBar />
                </div>
                <div className="center-container" >
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="detail">
                        <TopTabs />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      goodCourses: state.goodCourses
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(CourseContainer);
