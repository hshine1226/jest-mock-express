"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockReq = (values = {}) => {
    return {
        params: (values && values.params) || {},
        query: (values && values.query) || {},
        body: (values && values.body) || {},
        cookies: (values && values.cookies) || {},
        method: (values && values.method) || '',
        protocol: (values && values.protocol) || '',
        secure: (values && values.secure) || false,
        ip: (values && values.ip) || '',
        ips: (values && values.ips) || [],
        subdomains: (values && values.subdomains) || [],
        path: (values && values.path) || '',
        hostname: (values && values.hostname) || '',
        host: (values && values.host) || '',
        fresh: (values && values.fresh) || false,
        stale: (values && values.stale) || false,
        xhr: (values && values.xhr) || false,
        route: (values && values.route) || {},
        signedCookies: (values && values.signedCookies) || {},
        originalUrl: (values && values.originalUrl) || '',
        url: (values && values.url) || '',
        baseUrl: (values && values.baseUrl) || '',
        accepted: (values && values.accepted) || [],
        get: (values && values.get) || jest.fn().mockName('get mock default'),
        header: (values && values.header) || jest.fn().mockName('header mock default'),
        accepts: (values && values.accepts) || jest.fn().mockName('accepts mock default'),
        acceptsCharsets: (values && values.acceptsCharsets) || jest.fn().mockName('acceptsCharsets mock default'),
        acceptsEncodings: (values && values.acceptsEncodings) || jest.fn().mockName('acceptsEncodings mock default'),
        acceptsLanguages: (values && values.acceptsLanguages) || jest.fn().mockName('acceptsLanguages mock default'),
        range: (values && values.range) || jest.fn().mockName('range mock default'),
        param: (values && values.param) || jest.fn().mockName('param mock default'),
        is: (values && values.is) || jest.fn().mockName('is mock default'),
        app: (values && values.app) || {},
        res: (values && values.res) || jest.fn().mockName('res mock default'),
        next: (values && values.next) || jest.fn().mockName('next mock default')
    };
};
exports.default = exports.getMockReq;
//# sourceMappingURL=request.js.map