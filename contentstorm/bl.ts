/// <reference path="definitions/node.d.ts"/>

import * as serviceConnectionPool from "./app";

import * as dalxpooled from "./dalxpooled";

var async = require('async');
var requestenhanced = require('request-enhanced');
var config = require('./config');
var moment = require('moment');

var winston = require('winston');
require('winston-email');

var configuration = new config.Config;

winston.loggers.add('logger', {
    email: {
        from   : configuration.loggeremailfrom,
        to     : configuration.loggeremailto,
        service: configuration.loggeremailservice,
        auth   : configuration.loggeremailauth,
        tags   : configuration.loggeremailtags
    }
    // other transports
});

var logger = winston.loggers.get('logger');

export class BusinessLogic {

    postAjaj(url, objectToSend, cb) {

        var default_headers = {
            'User-Agent': 'Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-us,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.7',
            // 'Connection': 'keep-alive',
            'Cache-Control': 'max-age=0',
            'Content-Type': "application/json; charset=utf-8"
        };

        requestenhanced.get({
            url: url,
            headers: default_headers,
            method: 'POST',
            body: JSON.stringify(objectToSend),
            rejectUnauthorized: false,
            timeout: 500000
        }, function (err, res, body) {

            if (err) {
                console.log(err);
                console.trace();
            }

            cb(err, res, res);
        });
    };

    authenticateApiUser(apiUsername, apiPassword, cb) {
        var self = this;

        if (config.webserviceusername === apiUsername &&
            config.webservicepassword === apiPassword) {
            cb(true);
        }
        else {
            cb(false);
        }
    };
    
    public LoginSystemUser(inData, cb) { // forward to security serice
        var self = this;

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        jsonObjectToReturn.users = null;

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function (cb) {
                    var sqlSelectStatement = "SELECT * FROM SecurityUsers WHERE Username = '" + inData.username +
                        "' AND Password = '" + inData.password + "'";

                    dataAccessLayerX.executeQuery(sqlSelectStatement, function(err, rows, fields) {
                        if (!err) {
                            jsonObjectToReturn.users = rows;
                        }
                        cb(err, null);
                    });
                }
            ],
            function (err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(null, false, jsonObjectToReturn);
                }
                else {
                    if (jsonObjectToReturn.users != null) {
                        cb(null, false, jsonObjectToReturn);
                    }
                    else {
                        cb(null, true, jsonObjectToReturn);
                    }
                }
            }
        );
    };

    public AddSecurityUser(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    dataAccessLayerX.addSecurityUser(inData.securityuser, function(err, result) {
                        jsonObjectToReturn.securityuserid = result.insertId;
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );
        
    };

    public ModifySecurityUser(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    dataAccessLayerX.modifySecurityUser(inData.securityuser, function(err, rows, fields) {
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, null);
                }
            }
        );
    };

    public DeleteSecurityUser(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    dataAccessLayerX.deleteHardSecurityUser(inData.securityuser, function(err, result) {
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, null);
                }
            }
        );
    };

    public RetrieveAllSecurityUsers(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    var sqlSelectStatement = "SELECT * FROM securityusers WHERE webapplicationid = " + inData.webapplicationid;

                    dataAccessLayerX.executeQuery(sqlSelectStatement, function(err, rows, fields) {
                        if (!err) {
                            jsonObjectToReturn.securityusers = rows;
                        }
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );
        
    };

    public RetrieveSecurityUserBySecurityUserID(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    var sqlSelectStatement = "SELECT * FROM securityusers WHERE SecurityUserID = " + inData.securityuserid;

                    dataAccessLayerX.executeQuery(sqlSelectStatement, function(err, rows, fields) {
                        if (!err) {
                            jsonObjectToReturn.securityuser = rows[0];
                        }
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );

    };

    public AddBlog(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    dataAccessLayerX.addBlog(inData.blog, function(err, result) {
                        jsonObjectToReturn.blogid = result.insertId;
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );

    };

    public ModifyBlog(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    dataAccessLayerX.modifyBlog(inData.blog, function(err, rows, fields) {
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, null);
                }
            }
        );
        
    };

    public DeleteBlog(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    dataAccessLayerX.deleteHardBlog(inData.blog, function(err, result) {
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, null);
                }
            }
        );

    };

    public RetrieveAllBlogs(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    var sqlSelectStatement = "SELECT * FROM blogs WHERE webapplicationid = " + inData.webapplicationid;

                    dataAccessLayerX.executeQuery(sqlSelectStatement, function(err, rows, fields) {
                        if (!err) {
                            jsonObjectToReturn.blogs = rows;
                        }
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );

    };

    public RetrieveBlogByBlogID(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    var sqlSelectStatement = "SELECT * FROM blogs WHERE BlogID = " + inData.blogid;

                    dataAccessLayerX.executeQuery(sqlSelectStatement, function(err, rows, fields) {
                        if (!err) {
                            jsonObjectToReturn.blog = rows[0];
                        }
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );

    };

    public AddBlogEntry(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    dataAccessLayerX.addBlogEntry(inData.blogentry, function(err, result) {
                        jsonObjectToReturn.blogentryid = result.insertId;
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );

    };

    public ModifyBlogEntry(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    dataAccessLayerX.modifyBlogEntry(inData.blogentry, function(err, rows, fields) {
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, null);
                }
            }
        );
        
    };

    public DeleteBlogEntry(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    dataAccessLayerX.deleteHardBlogEntry(inData.blogentry, function(err, result) {
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, null);
                }
            }
        );

    };

    public RetrieveAllBlogEntries(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    var sqlSelectStatement = "SELECT * FROM blogentries be INNER JOIN Content c ON c.ContentID = be.ContentID  WHERE blogid = " + inData.blogid;

                    dataAccessLayerX.executeQuery(sqlSelectStatement, function(err, rows, fields) {
                        if (!err) {
                            jsonObjectToReturn.blogentries = rows;
                        }
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );

    };

    public RetrieveBlogEntryByBlogEntryID(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    var sqlSelectStatement = "SELECT * FROM blogentries WHERE blogentryid = " + inData.blogentryid;

                    dataAccessLayerX.executeQuery(sqlSelectStatement, function(err, rows, fields) {
                        if (!err) {
                            jsonObjectToReturn.blogentry = rows[0];
                        }
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );

    };

    public AddContent(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    dataAccessLayerX.addContent(inData.content, function(err, result) {
                        jsonObjectToReturn.contentid = result.insertId;
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );

    };

    public ModifyContent(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    dataAccessLayerX.modifyContent(inData.content, function(err, rows, fields) {
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, null);
                }
            }
        );

    };

    public DeleteContent(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    dataAccessLayerX.deleteHardContent(inData.content, function(err, result) {
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, null);
                }
            }
        );

    };

    public RetrieveAllContent(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    var sqlSelectStatement = "SELECT ContentID, ContentTypeID, Title, Path, Name, Description, WebApplicationID, RequireSession, Created FROM content WHERE webapplicationid = " + inData.webapplicationid;
                    sqlSelectStatement += " AND contenttypeid = " + inData.contenttypeid;

                    dataAccessLayerX.executeQuery(sqlSelectStatement, function(err, rows, fields) {
                        if (!err) {
                            jsonObjectToReturn.content = rows;
                        }
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );

    };

    public RetrieveContentWithCriteria(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {

                    var sqlWhereStatement = '';
                    var isFirst = true;

                    for (var contenttypeid of inData.ContentTypeIDs) {

                        if (isFirst == false) {
                            sqlWhereStatement += " OR ";
                        }

                        sqlWhereStatement += " c.contenttypeid = " + parseInt(contenttypeid);

                        isFirst = false;
                    }

                    var sqlSelectStatement = "SELECT c.ContentID, c.ContentTypeID, c.Title, c.Path, c.Name, c.Description, c.WebApplicationID, c.RequireSession, c.Created, ct.Name as ContentTypeName FROM content c INNER JOIN ContentTypes ct ON ct.contenttypeid = c.contenttypeid WHERE webapplicationid = " + inData.webapplicationid;
                    sqlSelectStatement += ' AND ' + sqlWhereStatement;

                    dataAccessLayerX.executeQuery(sqlSelectStatement, function(err, rows, fields) {
                        if (!err) {
                            jsonObjectToReturn.content = rows;
                        }
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );

    };


    public RetrieveContentByContentID(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    var sqlSelectStatement = "SELECT * FROM content WHERE contentid = " + inData.contentid;

                    dataAccessLayerX.executeQuery(sqlSelectStatement, function(err, rows, fields) {
                        if (!err) {
                            jsonObjectToReturn.content = rows[0];
                        }
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );

    };

    public RetrievePageContentByPath(path, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    var sqlSelectStatement = "SELECT c.ContentID, c.ContentText, c.ContentTypeID, c.RequireSession, ctwo.ContentText AS ContentDepText FROM content c LEFT OUTER JOIN contentdependencies cd  ";
                    sqlSelectStatement += " ON cd.ContentID = c.ContentID LEFT OUTER JOIN content ctwo ";
                    sqlSelectStatement += " ON cd.DependsOnContentID = ctwo.ContentID WHERE c.Path = '" + path + "'";

                    dataAccessLayerX.executeQuery(sqlSelectStatement, function(err, rows, fields) {
                        if (!err) {
                            jsonObjectToReturn.content = rows[0];
                        }
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(null);
                }
                else {
                    cb(jsonObjectToReturn.content);
                }
            }
        );

    };

    public AddContentDependency(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    dataAccessLayerX.addContentDependency(inData.contentdependency, function(err, result) {
                        jsonObjectToReturn.contentdependencyid = result.insertId;
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );

    };

    public DeleteContentDependency(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    dataAccessLayerX.deleteHardContentDependency(inData.contentdependency, function(err, result) {
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, null);
                }
            }
        );

    };

    public RetrieveContentDependencies(inData, cb) {

        var dataAccessLayerX = new dalxpooled.DataAccessLayerX();

        var jsonObjectToReturn:any = {};

        async.series([
                function(cb) {
                    dataAccessLayerX.openConnection(function(err) {
                        cb(err, null);
                    });
                },
                function(cb) {
                    var sqlSelectStatement = "SELECT * FROM contentdependencies cd INNER JOIN content c ON c.ContentID = cd.ContentID INNER JOIN content ca ON ca.ContentID = DependsOnContentID WHERE c.contentid = " + inData.contentid;

                    dataAccessLayerX.executeQuery(sqlSelectStatement, function(err, rows, fields) {
                        if (!err) {
                            jsonObjectToReturn.contentdependencies = rows;
                        }
                        cb(err, null);
                    });
                }
            ],
            function(err, results) {
                dataAccessLayerX.closeConnection();
                if (err) {
                    logger.log('error', arguments.callee.toString(), err);
                    console.log(err);
                    console.trace();
                    cb(err, false, null);
                }
                else {
                    cb(null, true, jsonObjectToReturn);
                }
            }
        );

    };

}

