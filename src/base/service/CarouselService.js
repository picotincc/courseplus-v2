
import fetch from './FetchWrapper';

const version = '/v1/common';

export default {
    getList: () => fetch(`${version}/carousel`)
}
