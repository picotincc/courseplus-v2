
import fetch from './FetchWrapper';

const version = '/v1';

export default {
    getQualityTeacher: () => fetch(`${version}/teacher/qualityTeacher`)
}
