import React, { Component } from 'react';

import "search/resource/index.less";

import CourseService from 'base/service/CourseService';
import SearchBar from "base/components/SearchBar";

import CoursesContainer from './CoursesContainer';

export default class SearchContainer extends Component {

    constructor (props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
        this.searchCourses = this.searchCourses.bind(this);
        this.handlePaginationClick = this.handlePaginationClick.bind(this);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {
        school_id: null,
        major_id: null,
        offset: 0,
        limit: 12,
        count: 0,
        courses: []
    }

    componentDidMount()
    {
        const sid = this.props.params.school;
        const mid = this.props.params.major;
        const paras = {
            school_id: sid ? sid : null,
            major_id: mid ? mid : null,
            limit: this.state.limit,
            offset: 0
        };
        this.searchCourses(paras);
    }

    handleSearch(school, major, path)
    {
        this.props.router.push(path);

        const paras = {
            school_id: school ? school.id : null,
            major_id: major ? major.id : null,
            limit: this.state.limit,
            offset: 0
        };
        this.searchCourses(paras);
    }

    handlePaginationClick(offset)
    {
        const school_id = this.state.school_id;
        const major_id = this.state.major_id;
        const paras = {
            school_id,
            major_id,
            limit: this.state.limit,
            offset
        };
        this.searchCourses(paras);
    }

    searchCourses(paras)
    {
        let query = {};
        if (paras["school_id"])
        {
            query["school_id"] = paras["school_id"];
        }
        if (paras["major_id"])
        {
            query["major_id"] = paras["major_id"];
        }
        if (paras["limit"])
        {
            query["limit"] = paras["limit"];
        }
        if (paras["offset"])
        {
            query["offset"] = paras["offset"];
        }
        CourseService.search(paras).then(res => {
            this.setState({
                school_id: paras["school_id"],
                major_id: paras["major_id"],
                offset: paras["offset"],
                // limit: res.limit,
                count: res.count,
                courses: res.list
            })
        }).catch(err => {
            console.log(err);
        });
    }

    render()
    {
        const { school_id, major_id, courses, limit, offset, count } = this.state;
        return (
            <div className="cp-search-container">
                <div className="slogan">
                    <SearchBar schoolId={school_id} majorId={major_id} onSearch={this.handleSearch}/>
                </div>
                <div className="courses-container">
                    <CoursesContainer
                        courses={courses}
                        limit={limit}
                        offset={offset}
                        count={count}
                        onPaginationClick={this.handlePaginationClick}
                    />
                </div>
            </div>
        );
    }
}
