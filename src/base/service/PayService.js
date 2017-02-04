import fetch from './FetchWrapper';

const version = '/v1/common';

export default {

    buyPeriod: (paras) => fetch(`${version}/pay/period`, {
        query: {
            period_id: paras.periodId,
            channel: paras.channel
        }
    }),

    buyDocument: (paras) => fetch(`${version}/pay/document`, {
        query: {
            document_id: paras.documentId,
            channel: paras.channel
        }
    }),

    buyAnswer: (paras) => fetch(`${version}/pay/answer`, {
        query: {
            question_id: paras.questionId,
            channel: paras.channel
        }
    })

}
