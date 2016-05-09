/// <reference path="../definitions/node.d.ts"/>

import * as businessLogic from "../bl";

var appRoot = require('app-root-path');

exports.allroutes = function(req, res){

    if (req) {
        if (req.url) {
            if (req.url === '/admin') {
                res.sendfile(appRoot + "/views/admin/dashboard.html");
            }
            else if (req.url === '/sanity') {
                res.sendfile(appRoot + "/views/sanity.html");
            }
            else {
                var bl = new businessLogic.BusinessLogic();
                var content = bl.RetrievePageContentByPath(req.url, function(content) {
                    if (content == null) {
                        res.sendfile(appRoot + "/views/pagenotfound.html")
                    }
                    else {

                        if (content.ContentTypeID === 1) {

                        }
                        else if (content.ContentTypeID === 2) {

                            if (content.ContentDepText == null) {
                                res.write(content.ContentText);
                                res.end();
                            }
                            else {
                                var finalContent = content.ContentDepText.replace('<div id="subbody"></div>', '<div id="subbody">' + content.ContentText + '</div>');
                                res.write(finalContent);
                                res.end();
                            }
                        }
                        else if (content.ContentTypeID === 3) {

                        }
                        else if (content.ContentTypeID === 4) {

                        }
                        else if (content.ContentTypeID === 5) {

                        }
                        else if (content.ContentTypeID === 6) {

                            res.write(content.ContentText);
                            res.end();
                        }
                        else if (content.ContentTypeID === 7) {
                            res.write(new Buffer(content.ContentText, 'base64'));
                            res.end();
                        }
                        else if (content.ContentTypeID === 8) {
                            res.write(new Buffer(content.ContentText, 'base64'));
                            res.end();
                        }
                        else if (content.ContentTypeID === 9) {
                            res.write(new Buffer(content.ContentText, 'base64'));
                            res.end();
                        }
                        else if (content.ContentTypeID === 10) {
                            res.write(new Buffer(content.ContentText, 'base64'));
                            res.end();
                        }
                    }
                });
            }
        }
    }

};



