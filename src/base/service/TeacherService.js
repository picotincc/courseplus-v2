
import fetch from './FetchWrapper';

const version = '/v1/common';

export default {
    getQualityTeacher: () => fetch(`${version}/teacher/qualityTeacher`)
}
