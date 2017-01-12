/**
 * 对fetch的封装类
 * 
 * @author xwang1024@126.com, 逗皇
 */

import QueryUtil from '../util/QueryUtil';
import UrlUtil from '../util/UrlUtil';

// TODO 上线时可配置，不需要以"/"结尾
const HOST_URL = "";

export default function(...args) {
    let [ url, config ] = args;

    // 处理Url
    var urlComps = UrlUtil.parse(url);
    if(!urlComps.host) {
        args[0] = HOST_URL + '/' + urlComps.path || '';
    } else {
        args[0] = UrlUtil.stringify(urlComps).split('?')[0];
    }

    // 处理其他config
    if(config) {
        if (config.query) {
            const query = config.query;
            const queryString = QueryUtil.stringify(query);
            args[0] = `${args[0]}?${queryString}`;
            delete config.query;
        }
        if (config.body && typeof(body) === 'object') {
            config.body = JSON.stringify(config.body);
        }
    }
    
    args[1] = Object.assign({}, { 'credentials': 'include', 'content-type': 'application/json'}, args[1] || {});
    return new Promise((resolve, reject) => {
        self.fetch.apply(self, args).then((res) => {
            return res.json();
        }).then((json) => {
            if(json.error) {
                reject(json.error);
            } else {
                resolve(json.data);
            }
        }).catch((err) => {
            // TODO http错误处理
            console.log(err);
        });
    });
};