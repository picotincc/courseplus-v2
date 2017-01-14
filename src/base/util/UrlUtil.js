/**
 * Url工具类
 * @author xwang1024 <xwang1024@126.com>
 */
var UrlUtil = {
    /**
     * 转换url字符串到对象
     * 
     * @param {String} url url字符串，例如: "?a=1", "a=1"
     * 
     * @return {Object} 解析得到的对象
     */
    parse: function(url) {
        var parser = document.createElement('a');
        parser.href = url;
        let obj = {
            protocol: parser.protocol, // => "http:"
            hostname: parser.hostname, // => "example.com"
            port: parser.port,         // => "3000"
            pathname: parser.pathname, // => "/pathname/"
            search: parser.search,     // => "?search=test"
            hash: parser.hash,         // => "#hash"
            host: parser.host,         // => "example.com:3000"
        }  
        return obj;
    },
    /**
     * 转换对象到url字符串
     * 
     * @param {Object} obj url对象
     * 
     * @return {String} url字符串
     */
    stringify: function(obj) {
        let { protocol, hostname, port, pathname, search, hash, host } = obj;
        if(host) {
            return `${protocol || 'http'}//${hostname}${port ? ':'+port : ''}${pathname||''}${search ? search : ''}${hash ? hash : ''}`;
        } else {
            return `${pathname||''}${search ? search : ''}${hash ? hash : ''}`;
        }
        
    }
}

export default UrlUtil