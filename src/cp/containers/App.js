import React, { Component } from 'react';

export default class App extends Component {

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
            <div className="cp-app">
                <header>首页header</header>

                {this.props.children}
            </div>
        );
    }
}
