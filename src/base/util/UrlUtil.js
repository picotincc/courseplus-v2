
var UrlUtil = {
    parse: function(url) {
        var parser = document.createElement('a');
        parser.href = url;
        let config = {
            protocol: parser.protocol, // => "http:"
            hostname: parser.hostname, // => "example.com"
            port: parser.port,         // => "3000"
            pathname: parser.pathname, // => "/pathname/"
            search: parser.search,     // => "?search=test"
            hash: parser.hash,         // => "#hash"
            host: parser.host,         // => "example.com:3000"
        }  
        return config;
    },
    stringify: function(config) {
        let { protocol, hostname, port, pathname, search, hash, host } = config;
        if(host) {
            return `${protocol || 'http'}//${hostname}${port ? ':'+port : ''}${pathname||''}${search ? search : ''}${hash ? hash : ''}`;
        } else {
            return `${pathname||''}${search ? search : ''}${hash ? hash : ''}`;
        }
        
    }
}

export default UrlUtil