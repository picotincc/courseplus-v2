import React, { Component } from 'react';
import { connect } from 'react-redux';

import "live/resource/index.less";


class LiveContainer extends Component {

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
            <div className="cp-live-container">
                
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(LiveContainer);