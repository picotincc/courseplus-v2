import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPeriods } from 'base/actions/CourseAction';

class PeriodLineContainer extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount() {
        let { dispatch } = this.props;
        dispatch(getPeriods(1));
    }

    render() {
        return (
            <div className="">
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      course: state.course,
      coursePeriods: state.coursePeriods
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(PeriodLineContainer);
