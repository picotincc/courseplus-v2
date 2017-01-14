import fetch from './FetchWrapper';

const version = '/v1';

export default {
    getList: () => fetch(`${version}/course/qualityComment`)
}