import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPeriods, selectPeriod } from 'base/actions/CourseAction';
import CourseService from 'base/service/CourseService';
import CourseVideo from "../components/CourseVideo";
import Modal from 'base/components/Modal';
import BuyCourseDialog from '../components/BuyCourseDialog';

class CourseVideoContainer extends Component {

    constructor (props) {
        super(props);
        this.onBuyCourseClick = this.onBuyCourseClick.bind(this);
        this.cancelBuyCourseModal = this.cancelBuyCourseModal.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        detail: null
    }

    componentWillReceiveProps(nextProp){
        var id = nextProp.selectedPeriod.id;
        if(id == null && nextProp.coursePeriods.length > 0){
            id = nextProp.coursePeriods[0].id;
        }
        console.log(id);
        CourseService.getPeriodDetail(id).then((data) => {
          console.log(data);
          (data) && (this.setState({ detail: data }));
        }).catch((err) => {
          console.log(err);
        });
    }

    componentDidMount() {

    }

    onBuyCourseClick(){
        this.refs.buyCourseModal.showModal();
    }

    cancelBuyCourseModal(){
        this.refs.buyCourseModal.hideModal();
    }

    buyCourse(){
        console.log("点击单课购买");
    }

    render()
    {
        return (
            <div className="course-video-wrapper">
                <CourseVideo buyClickHandler={this.onBuyCourseClick} period={this.props.selectedPeriod} detail={this.state.detail}/>

                <Modal width="550px" ref="buyCourseModal" >
                    <BuyCourseDialog course={this.props.selectedPeriod} cancelClickHandler={this.cancelBuyCourseModal} onClickHandler={this.buyCourse}/>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      coursePeriods: state.coursePeriods,
      selectedPeriod: state.selectedPeriod
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(CourseVideoContainer);
