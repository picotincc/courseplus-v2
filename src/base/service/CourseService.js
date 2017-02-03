
import fetch from './FetchWrapper';

const version = '/v1';

export default {

    getPeriods: (course_id) => fetch(`${version}/course/period`,
        { query: { course_id } }
    ),

    getPeriodDetail: (id) => fetch(`${version}/course/periodDetail`,
        { query: { id } }
    ),

    search: (paras) => fetch(`${version}/course/search`,
        { query: paras }
    ),

    getGoodCourses: () => fetch(`${version}/course/search`),

    getCourse: (course_id) => fetch(`${version}/course/courseDetail`,
        { query: { course_id } }
    ),

    getQualityComments: () => fetch(`${version}/course/qualityComment`),

    getShoppingList: (course_id) => fetch(`${version}/course/shopping_list`,
        { query: { course_id } }
    ),

    getDocuments: (paras) => fetch(`${version}/course/documents`,
        { query: paras }
    ),

    getComments: (paras) => fetch(`${version}/course/comments`,
        { query: paras }
    ),

    getCommentReply: (paras) => fetch(`${version}/course/commentReply`,
        { query: paras }
    ),

    getQuestions: (paras) => fetch(`${version}/course/questions`,
        { query: paras }
    ),

    makeGrade: (paras) => fetch(`${version}/course/makeGrade`, {
        method: "POST",
        body: paras
    }),

    postComment: (paras) => fetch(`${version}/course/postComment`, {
        method: "POST",
        body: paras
    }),

    previewDocument: (documentId) => fetch(`${version}/course/previewDocument`, {
        query: {
            document_id: documentId
        }
    }),

    getLiveDetail: (live_id) => fetch(`${version}/course/liveDetail`,
        { query: { live_id } }
    )
}
