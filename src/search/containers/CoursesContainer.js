import React, { Component } from 'react';
import { Pagination } from 'antd';

import GoodCourse from 'base/components/GoodCourse';
import FormatUtil from 'base/util/FormatUtil';

export default class CoursesContainer extends Component {

    constructor (props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    static defaultProps = {
        courses: []
    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount()
    {

    }

    handlePageChange(page)
    {
        const offset = this.props.limit * ( page - 1 );
        this.props.onPaginationClick(offset);
    }

    handleListItemClick(id){
        FormatUtil.openNewTab("/course/"+id);
    }

    render()
    {
        const { courses, limit, offset, count } = this.props;
        const current = parseInt(offset / limit) + 1;
        return (
            <div className="cp-search-course-container">
                <ul className="courses-list">
                    {courses.map((item, index) => {
                        return (
                            <GoodCourse key={index} data={item} listItemClick={this.handleListItemClick} />
                        );
                    })}
                </ul>
                <div className="pagination">
                    <Pagination
                        defaultCurrent={1}
                        current={current}
                        total={count}
                        pageSize={limit}
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}
