/// <reference path="../definitions/node.d.ts"/>

import * as businessLogic from "../bl";

class Ajaj {

    /* Business Logic Methods */

    public static LoginSystemUser (req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.LoginSystemUser(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in LoginSystemUser' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});

    }

    public static AddSecurityUser(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.AddSecurityUser(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in AddSecurityUser' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static ModifySecurityUser(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.ModifySecurityUser(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in ModifySecurityUser' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static DeleteSecurityUser(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.DeleteSecurityUser(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in DeleteSecurityUser' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static RetrieveAllSecurityUsers(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.RetrieveAllSecurityUsers(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in RetrieveAllSecurityUsers' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static RetrieveSecurityUserBySecurityUserID(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.RetrieveSecurityUserBySecurityUserID(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in RetrieveSecurityUserBySecurityUserID' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }
    

    public static AddBlog(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.AddBlog(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in AddBlog' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static ModifyBlog(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.ModifyBlog(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in ModifyBlog' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static DeleteBlog(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.DeleteBlog(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in DeleteBlog' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static RetrieveAllBlogs(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.RetrieveAllBlogs(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in RetrieveAllBlogs' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static RetrieveBlogByBlogID(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.RetrieveBlogByBlogID(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in RetrieveBlogByBlogID' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static AddBlogEntry(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.AddBlogEntry(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in AddBlogEntry' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static ModifyBlogEntry(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.ModifyBlogEntry(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in ModifyBlogEntry' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static DeleteBlogEntry(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.DeleteBlogEntry(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in DeleteBlogEntry' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static RetrieveAllBlogEntries(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.RetrieveAllBlogEntries(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in RetrieveAllBlogEntries' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static RetrieveBlogEntryByBlogEntryID(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.RetrieveBlogEntryByBlogEntryID(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in RetrieveBlogEntryByBlogEntryID' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static AddContent(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.AddContent(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in AddContent' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static ModifyContent(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.ModifyContent(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in EditContent' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static DeleteContent(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.DeleteContent(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in DeleteContent' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    };

    public static RetrieveAllContent(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.RetrieveAllContent(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in RetrieveAllContent' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    };

    public static RetrieveContentWithCriteria(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.RetrieveContentWithCriteria(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in RetrieveContentWithCriteria' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});

    };

    public static RetrieveContentByContentID(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.RetrieveContentByContentID(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in RetrieveContentByContentID' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});
        
    }

    public static AddContentDependency(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.AddContentDependency(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in AddContentDependency' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});

    }

    public static DeleteContentDependency(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.DeleteContentDependency(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in DeleteContentDependency' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});

    }

    public static RetrieveContentDependencies(req, res) {

        var bl = new businessLogic.BusinessLogic();

        var jsonObjectReceived = req.body;
        var jsonObjectResult:any = {};

        var result = true;
        //bl.authenticateApiUser(jsonObjectReceived.apiusername, jsonObjectReceived.apipassword, function(result) {

        if (result == false) {
            jsonObjectResult.result = false;
            jsonObjectReceived.err = 'api authentication failed';
            res.status(200).json(jsonObjectResult);
        }
        else {
            bl.RetrieveContentDependencies(jsonObjectReceived, function (err, result, outData) {

                if (err) {
                    console.log('error in RetrieveContentDependencies' + err);
                    jsonObjectResult.err = err;
                    jsonObjectResult.result = false;
                }
                else {
                    jsonObjectResult.result = true;
                    jsonObjectResult.outData = outData;
                }

                res.status(200).json(jsonObjectResult);
            });
        }
        //});

    }

}

module.exports.loadRoutes = function(app, ajaj) {
    app.post('/ajaj/LoginSystemUser', Ajaj.LoginSystemUser);
    app.post('/ajaj/AddSecurityUser', Ajaj.AddSecurityUser);
    app.post('/ajaj/ModifySecurityUser', Ajaj.ModifySecurityUser);
    app.post('/ajaj/DeleteSecurityUser', Ajaj.DeleteSecurityUser);
    app.post('/ajaj/RetrieveAllSecurityUsers', Ajaj.RetrieveAllSecurityUsers);
    app.post('/ajaj/RetrieveSecurityUserBySecurityUserID', Ajaj.RetrieveSecurityUserBySecurityUserID);
    app.post('/ajaj/AddBlog', Ajaj.AddBlog);
    app.post('/ajaj/ModifyBlog', Ajaj.ModifyBlog);
    app.post('/ajaj/DeleteBlog', Ajaj.DeleteBlog);
    app.post('/ajaj/RetrieveAllBlogs', Ajaj.RetrieveAllBlogs);
    app.post('/ajaj/RetrieveBlogByBlogID', Ajaj.RetrieveBlogByBlogID);
    app.post('/ajaj/AddBlogEntry', Ajaj.AddBlogEntry);
    app.post('/ajaj/ModifyBlogEntry', Ajaj.ModifyBlogEntry);
    app.post('/ajaj/DeleteBlogEntry', Ajaj.DeleteBlogEntry);
    app.post('/ajaj/RetrieveAllBlogEntries', Ajaj.RetrieveAllBlogEntries);
    app.post('/ajaj/RetrieveBlogEntryByBlogEntryID', Ajaj.RetrieveBlogEntryByBlogEntryID);
    app.post('/ajaj/AddContent', Ajaj.AddContent);
    app.post('/ajaj/ModifyContent', Ajaj.ModifyContent);
    app.post('/ajaj/DeleteContent', Ajaj.DeleteContent);
    app.post('/ajaj/RetrieveAllContent', Ajaj.RetrieveAllContent);
    app.post('/ajaj/RetrieveContentWithCriteria', Ajaj.RetrieveContentWithCriteria);
    app.post('/ajaj/RetrieveContentByContentID', Ajaj.RetrieveContentByContentID);
    app.post('/ajaj/AddContentDependency', Ajaj.AddContentDependency);
    app.post('/ajaj/DeleteContentDependency', Ajaj.DeleteContentDependency);
    app.post('/ajaj/RetrieveContentDependencies', Ajaj.RetrieveContentDependencies);
};
