
const mockData = Object.assign({},
    requireModule('./carousel'),
    requireModule('./contributors'),
    requireModule('./homeComment'),
    requireModule('./Course'),
    requireModule('./school'),
    requireModule('./period'),
    requireModule('./exclusiveResource'),
    requireModule('./courseDetail'),
    requireModule('./exclusiveDocuments'),
    requireModule('./courseDetail'),
    requireModule('./User'),
    requireModule('./shoppingList')
);

module.exports = mockData;
