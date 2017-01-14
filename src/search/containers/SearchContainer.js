import React, { Component } from 'react';

import SearchBar from "base/components/SearchBar";

import "search/resource/index.less";

export default class SearchContainer extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        courses: []
    }

    componentDidMount()
    {
        console.log(this.props.params);
    }

    render()
    {
        return (
            <div className="cp-search-container">
                <div className="slogan">
                    <SearchBar />
                </div>
                <div className="courses-container">
                </div>
            </div>
        );
    }
}
