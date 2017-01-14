import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPeriods, selectPeriod } from 'base/actions/CourseAction';
import PeriodLine from "../components/PeriodLine";

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

    handleSelectPeriod(period) {
        let { dispatch } = this.props;
        dispatch(selectPeriod(period));
    }

    render() {
        return (
            <PeriodLine periods={this.props.coursePeriods} handleSelectPeriod={this.handleSelectPeriod.bind(this)}/>
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
