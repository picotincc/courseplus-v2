
import fetch from './FetchWrapper';

const version = '/v1';

export default {
    getPeriods: (course_id) => fetch(`${version}/course/period`, { query: { course_id } }),
    getPeriodDetail: (id) => fetch(`${version}/course/periodDetail`, { query: { id } }),
    search: (paras) => fetch(`${version}/course/search`, { query: paras }),
    getGoodCourses: () => fetch(`${version}/course/search`),
    getCourse: (course_id) => fetch(`${version}/course/courseDetail`, { query: { course_id } }),
    getQualityComments: () => fetch(`${version}/course/qualityComment`),
    getShoppingList: (course_id) => fetch(`${version}/course/shopping_list`, { query: { course_id } }),
}
