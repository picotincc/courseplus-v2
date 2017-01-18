/**
 * 弹幕客户端
 */

class DanmakuClient {
    ws = null;
    liveId = null;
    userId = null;
    token = null;
    uiProxy = null;

    constructor(liveId, userId, token, uiProxy) {
        if(!liveId) throw new Error('[DanmakuClient] liveId is required');
        if(!userId) throw new Error('[DanmakuClient] userId is required');
        if(!token)  throw new Error('[DanmakuClient] token is required');
        if(!uiProxy) throw new Error('[DanmakuClient] uiProxy is required');
        if(!uiProxy.showNotify)  throw new Error('[DanmakuClient] uiProxy.showNotify is not defined');
        if(!uiProxy.showMessage) throw new Error('[DanmakuClient] uiProxy.showMessage is not defined');

        this.ws = new WebSocket(`ws://localhost:8010/liveChat/${liveId}?token=${token}&userId=${userId}`);
        this.ws.onopen = () => {
            uiProxy.showNotify('弹幕服务器连接成功', 'success');
        };
        this.ws.onmessage = (event) => {
            var data = this._processData(event.data);
            if(data.error) {
                uiProxy.showNotify(data.error.message, 'danger');
                console.log('[WebSocket] Error: ' + (data.error.code ? data.error.code + ', ': '') + data.error.message);
                return;
            }
            console.log('[WebSocket] Received: ', data);
            if(data.type === 'MESSAGE') {
                uiProxy.showMessage(data.from, data.content, data.time);
            }
            if(data.type === 'NOTIFY') {
                uiProxy.showNotify(data.content);
            }
        };
        this.ws.onclose = () => {
            uiProxy.showNotify('连接已断开', 'danger');
        };
        this.ws.onerror = (err) => {
            uiProxy.showNotify('出现异常，请刷新重试', 'danger');
        };
    }

    sendDanmaku(danmaku) {
        let time = new Date();
        this._sendJSON({
            type: 'MESSAGE',
            data: danmaku
        });
    }

    sendMessage(content) {
        let time = new Date();
        this._sendJSON({
            type: 'MESSAGE',
            data: {
                color: '#ffffff',
                text: content,
                type: 'right'
            }
        });
    }

    _sendJSON(json) {
        this.ws && this.ws.send(JSON.stringify(json));
    }

    _processData(data) {
        var json;
        try {
            json = JSON.parse(data);
        } catch (e) {
            console.log('[WebSocket] Data is not json format.');
        }
        return json;
    }

    close() {
        if(this.ws) {
            this.ws.onclose = function () {};
            this.ws.close()
        }
    }
}

export default DanmakuClient