import React, { Component } from 'react';
import { connect } from 'react-redux';

import "home/resource/index.less";

import Slogan from '../components/Slogan';
import GoodCoursesContainer from './GoodCoursesContainer';
import CarouselContainer from './CarouselContainer';

import DaShen from 'home/components/DaShen'


class HomeContainer extends Component {

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
            <div className="cp-home-container">
                <div className="slogan">
                    <Slogan />
                </div>
                <div className="carousel-wrapper">
                    <CarouselContainer />
                </div>
                <div className="good-courses">
                    <GoodCoursesContainer />
                </div>
                <div className="comments">
                </div>
                <div className="contributors">
                    <DaShen />
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
export default connect(mapStateToProps)(HomeContainer);
