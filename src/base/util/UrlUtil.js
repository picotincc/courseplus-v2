
const URL_REGEX = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
const COMP_NAMES = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];

var UrlUtil = {
    parse: function(url) {
        if(!URL_REGEX.test(url)) {
            return false;
        }
        let comps = URL_REGEX.exec(url);
        let config = {};
        COMP_NAMES.forEach((name, i) => {
            config[name] = comps[i];
        });
        delete config.slash;
        return config;
    },
    stringify: function(config) {
        let { scheme, host, port, path, query, hash } = config;
        if(host) {
            return `${scheme || 'http'}://${host}${port ? ':'+port : ''}/${path||''}${query ? '?'+query : ''}${hash ? '#'+hash : ''}`;
        } else {
            return `/${path||''}${query ? '?'+query : ''}${hash ? '#'+hash : ''}`;
        }
        
    }
}