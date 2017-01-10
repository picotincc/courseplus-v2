import React, { Component } from 'react';
import { connect } from 'react-redux';

import "home/resource/index.less";

import { getHomeGoodCourses } from 'base/actions/HomeAction';


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
        const dispatch = this.props.dispatch;
        // dispatch(getHomeGoodCourses());
    }

    render()
    {
        return (
            <div className="cp-home-container">
                course+首页
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
