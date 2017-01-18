import React, { Component } from 'react';

export default class Message extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {
        message: ""
    }

    MessageStyle = {
        width: "200px",
        height: "40px"
    }

    render()
    {
        return (
            <div className="" style={MessageStyle}>
                <span className="">{this.props.message}</span>
            </div>
        );
    }
}
