
import fetch from './FetchWrapper';

const version = '/v1';

export default {
    getPeriods: (course_id) => fetch(`${version}/course/period`, { query: { course_id } })
}