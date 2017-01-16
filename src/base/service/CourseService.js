
import fetch from './FetchWrapper';

const version = '/v1';

export default {
    getPeriods: (course_id) => fetch(`${version}/course/period`, { query: { course_id } }),
    getGoodCourses: () => fetch(`${version}/course/search`),
    getCourse: (course_id) => fetch(`${version}/course/courseDetail`, { query: { course_id } }),
    getQualityComments: () => fetch(`${version}/course/qualityComment`)
}
