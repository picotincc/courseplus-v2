import React, { Component } from 'react';
import { Pagination } from 'antd';

import GoodCourse from 'base/components/GoodCourse';

export default class CoursesContainer extends Component {

    constructor (props) {
        super(props);
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

    render()
    {
        const { courses, limit, offset, count } = this.props;
        const current = offset / limit;
        return (
            <div className="cp-search-course-container">
                <ul className="courses-list">
                    {courses.map((item, index) => {
                        return (
                            <GoodCourse key={item.id} data={item}  />
                        );
                    })}
                </ul>
                <div className="pagination">
                    <Pagination
                        defaultCurrent={1}
                        current={current}
                        total={count}
                        pageSize={limit}
                    />
                </div>
            </div>
        );
    }
}
