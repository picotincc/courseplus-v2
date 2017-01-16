import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPeriods, selectPeriod } from 'base/actions/CourseAction';
import CourseService from 'base/service/CourseService';
import CourseVideo from "../components/CourseVideo";

class CourseVideoContainer extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        detail: null
    }

    componentWillReceiveProps(nextProp){
        let id = nextProp.selectedPeriod.id;
        console.log(id);
        if(id){
          CourseService.getPeriodDetail(id).then((data) => {
              console.log(data);
              (data) && (this.setState({ detail: data }));
          }).catch((err) => {
              console.log(err);
          });
        }
    }

    componentDidMount() {

    }

    render()
    {
        return (
            <div className="course-video-wrapper">
                <CourseVideo period={this.props.selectedPeriod} detail={this.state.detail}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      selectedPeriod: state.selectedPeriod,
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(CourseVideoContainer);
