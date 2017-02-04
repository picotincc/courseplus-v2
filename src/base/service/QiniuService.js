
import fetch from './FetchWrapper';

const version = '/v1/common';

export default {

    getUploadToken: (bucket) => fetch(`${version}/qiniu/getUploadToken`, {
        query: {
            bucket
        }
    })

}
