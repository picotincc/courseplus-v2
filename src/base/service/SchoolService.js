import fetch from './FetchWrapper';

const version = '/v1';

export default {
    getSchools: () => fetch(`${version}/school`),

    getMajors: (schoolId) => fetch(`${version}/school/major`, {
        query: {
            school_id: schoolId
        }
    })
}
