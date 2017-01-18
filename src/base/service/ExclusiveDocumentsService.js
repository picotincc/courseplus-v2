import fetch from './FetchWrapper';

const version = '/v1';

export default {
    getDocuments: (document_id) => fetch(`${version}/course/previewDocument`,{query : { document_id }})
}
