import React, { Component } from 'react';

export default class SearchBar extends Component {

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
            <div className="cp-search-bar">
                <div className="title">
                    <span>考研目标</span>
                </div>
                <div className="school">

                </div>
                <div className="speciality">

                </div>
                <div className="search-btn">
                    <div className="btn">
                        <span>搜索</span>
                    </div>
                </div>
            </div>
        );
    }
}
