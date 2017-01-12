import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import SearchBar from 'base/components/SearchBar';

export default class Slogan extends Component {

    constructor (props) {
        super(props);

    }

    static defaultProps = {

    }

    static propTypes = {

    }

    componentDidMount()
    {

    }

    render()
    {
        return (
            <div className="cp-home-slogan">
                <div className="slogan-container">
                    <div className="slogan">让专业课更专业</div>
                    <div className="search-bar">
                        <SearchBar />                    
                    </div>
                </div>
            </div>
        );
    }
}
