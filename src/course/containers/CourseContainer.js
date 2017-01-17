import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Affix } from 'antd';

import 'course/resource/index.less';
import { getCourse } from 'base/actions/CourseAction';
import TitleBar from '../components/TitleBar';
import Sidebar from '../components/Sidebar';
import DetailContainer from './DetailContainer';

class CourseContainer extends Component {

    constructor (props) {
        super(props);
        this._scroll_event = this._scroll_event.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        curClass: "state1"
    }

    componentDidMount()
    {
        //设置sidebar高度
        this.sidebar = this.refs["sidebar"];
        window.onscroll = this._scroll_event;
        this.sidebar.style.height = this.refs['detail'].offsetHeight + 'px';
        //获取数据
        let courseId = this.props.params.courseId;
        let { dispatch } = this.props;
        dispatch(getCourse(courseId));

    }

    _scroll_event()
    {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //console.log(scrollTop);
        if(scrollTop < 172){
            this.setState({
                curClass: "state1"
            });
        }else if (scrollTop >= 172 && scrollTop < this.refs['detail'].offsetHeight-720+172) {
            //172:header+titleBar;720:sidebar
            this.setState({
                curClass: "state2"
            });
        }else{
            this.setState({
                curClass: "state3"
            });
        }
        this.sidebar.style.height = 0;
        this.sidebar.style.height = this.refs['detail'].offsetHeight + 'px';
    }

    render()
    {
        const courseId = this.props.params.courseId;
        return (
            <div className="cp-course-container">
                <div className="titleBar">
                    <TitleBar course={this.props.course}/>
                </div>
                <div className="center-container" >
                    <div ref="sidebar" className="sidebar" >
                        <Sidebar curClass={this.state.curClass} course={this.props.course}/>
                    </div>
                    <div ref="detail" className="detail">
                        <DetailContainer courseId={courseId}/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      course: state.course
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(CourseContainer);
