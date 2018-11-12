XMLHttpRequest.prototype.protoOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (method, url) {
    this.requestURL = url;
    return this.protoOpen(method, url);
} 

XMLHttpRequest.prototype.protoSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function (data) { 
    if (/.*evolok.net\/.*\/paywall/g.test(this.requestURL)) {
        return;
    }

    return this.protoSend(data);
};