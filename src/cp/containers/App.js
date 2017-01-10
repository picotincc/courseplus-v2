import React, { Component } from 'react';
import { connect } from 'react-redux';


import Header from '../components/Header';
import { login } from '../actions/HomeAction';

class App extends Component {

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
        const { dispatch } = this.props;
        dispatch(login("appdidmount"));
    }

    render()
    {
        return (
            <div className="cp-app">
                <header><Header userId={this.props.userId} /></header>

                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      userId: state.userId
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(App);
