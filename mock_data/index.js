
const mockData = Object.assign({},
    requireModule('./carousel'),
    requireModule('./contributors'),
    requireModule('./homeComment'),
    requireModule('./homeGoodCourses'),
    requireModule('./school'),
    requireModule('./period')

);

module.exports = mockData;
