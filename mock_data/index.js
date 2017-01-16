
const mockData = Object.assign({},
    requireModule('./carousel'),
    requireModule('./contributors'),
    requireModule('./homeComment'),
    requireModule('./Course'),
    requireModule('./school'),
    requireModule('./period'),
    requireModule('./courseDetail')

);

module.exports = mockData;
