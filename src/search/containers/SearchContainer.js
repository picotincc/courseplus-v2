import React, { Component } from 'react';

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

    }

    componentDidMount()
    {
        console.log(this.props.params);
    }

    render()
    {
        return (
            <div className="cp-search-container">
                course+ 搜索页面
            </div>
        );
    }
}
