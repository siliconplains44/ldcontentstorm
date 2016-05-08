/// <reference path="definitions/node.d.ts"/>
"use strict";
var Config = (function () {
    function Config() {
        this.databasehost = '';
        this.databaseport = 3306;
        this.databaseusername = '';
        this.databasepassword = '';
        this.database = 'contentstorm';
        this.databasecertpath = __dirname + '/certs/ca-cert.pem';
        this.connectionpoolconnectioncount = 100;
        this.loggeremailfrom = 'inquiries@leoparddata.com';
        this.loggeremailto = 'allan@leoparddata.com';
        this.loggeremailservice = 'Gmail';
        this.loggeremailauth = { user: 'inquiries@leoparddata.com', pass: '' };
        this.loggeremailtags = ['leopard data data storm web app'];
    }
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map