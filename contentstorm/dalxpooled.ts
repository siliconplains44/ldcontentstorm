

/// <reference path="definitions/node.d.ts"/>
/// <reference path="definitions/express.d.ts"/>

declare function require(name:string);

var fs = require('fs');

import * as globalServiceConnectionPool from "./app";

export class DataAccessLayerX {

    private serviceConnectionPool: any;
    private connection : any;

    constructor() {
        this.serviceConnectionPool = globalServiceConnectionPool;
    }

    public openConnection(cb) {
        this.serviceConnectionPool.serviceConnectionPool.getConnection((err, newconnection) => {
            if (!err) {
                this.connection = newconnection;
            }
            cb(err);
        });
    }

    public closeConnection() {
        this.connection.release();
    }

    public escape(value) {
        return this.connection.escape(value);
    }

    public startTransaction(cb) {
        this.executeStatement('START TRANSACTION', cb);
    }

    public rollbackTransaction(cb) {
        this.executeStatement('ROLLBACK', cb);
    }

    public commitTransaction(cb) {
        this.executeStatement('COMMIT', cb);
    }

    public executeStatement(sqlStatement, cb) {
        this.connection.query(sqlStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    }

    public executeQuery(sqlQueryStatement, cb) {
        this.connection.query(sqlQueryStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    }

    public addBlogEntry(BlogEntry, cb) {
        var self = this;
        var sqlInsertStatement = 'INSERT INTO blogentries (';
        sqlInsertStatement += 'BlogID, ';
        sqlInsertStatement += 'ContentID, ';
        sqlInsertStatement += 'PublishDate, ';
        sqlInsertStatement += 'AuthorSecurityUserID, ';
        sqlInsertStatement += 'IsVisible';
        sqlInsertStatement += ') VALUES (';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?';
        sqlInsertStatement += ')';
        var dataValues = [
            BlogEntry.BlogID,
            BlogEntry.ContentID,
            BlogEntry.PublishDate,
            BlogEntry.AuthorSecurityUserID,
            BlogEntry.IsVisible];
        self.connection.query(sqlInsertStatement, dataValues, function (err, result) {
            cb(err, result);
        });
    };

    public modifyBlogEntry(BlogEntry, cb) {
        var self = this;
        var sqlUpdateStatement = 'UPDATE blogentries ';
        sqlUpdateStatement += ' SET BlogID = ?, ';
        sqlUpdateStatement += ' ContentID = ?, ';
        sqlUpdateStatement += ' PublishDate = ?, ';
        sqlUpdateStatement += ' AuthorSecurityUserID = ?, ';
        sqlUpdateStatement += ' IsVisible = ?';
        sqlUpdateStatement += ' WHERE BlogEntryID = ?';
        var dataValues = [
            BlogEntry.BlogID,
            BlogEntry.ContentID,
            BlogEntry.PublishDate,
            BlogEntry.AuthorSecurityUserID,
            BlogEntry.IsVisible,
            BlogEntry.BlogEntryID
        ];
        self.connection.query(sqlUpdateStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public deleteHardBlogEntry(BlogEntry, cb) {
        var self = this;
        var sqlDeleteStatement = ' DELETE FROM blogentries WHERE BlogEntryID = ?';
        var dataValues = [
            BlogEntry.BlogEntryID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public deleteSoftBlogEntry(BlogEntry, cb) {
        var self = this;
        var sqlDeleteStatement = ' UPDATE blogentries SET IsDeleted = 1 WHERE BlogEntryID = ?';
        var dataValues = [
            BlogEntry.BlogEntryID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public retrieveAllBlogEntry(cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM blogentries';
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public retrieveWithWhereClauseBlogEntry(whereClause, cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM blogentries WHERE ' + whereClause;
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public addBlog(Blog, cb) {
        var self = this;
        var sqlInsertStatement = 'INSERT INTO blogs (';
        sqlInsertStatement += 'WebApplicationID, ';
        sqlInsertStatement += 'Name, ';
        sqlInsertStatement += 'Description, ';
        sqlInsertStatement += 'Created, ';
        sqlInsertStatement += 'IsActive, ';
        sqlInsertStatement += 'OwnerSecurityUserID';
        sqlInsertStatement += ') VALUES (';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?';
        sqlInsertStatement += ')';
        var dataValues = [
            Blog.WebApplicationID,
            Blog.Name,
            Blog.Description,
            Blog.Created,
            Blog.IsActive,
            Blog.OwnerSecurityUserID];
        self.connection.query(sqlInsertStatement, dataValues, function (err, result) {
            cb(err, result);
        });
    };

    public modifyBlog(Blog, cb) {
        var self = this;
        var sqlUpdateStatement = 'UPDATE blogs ';
        sqlUpdateStatement += ' SET WebApplicationID = ?, ';
        sqlUpdateStatement += ' Name = ?, ';
        sqlUpdateStatement += ' Description = ?, ';
        sqlUpdateStatement += ' Created = ?, ';
        sqlUpdateStatement += ' IsActive = ?, ';
        sqlUpdateStatement += ' OwnerSecurityUserID = ?';
        sqlUpdateStatement += ' WHERE BlogID = ?';
        var dataValues = [
            Blog.WebApplicationID,
            Blog.Name,
            Blog.Description,
            Blog.Created,
            Blog.IsActive,
            Blog.OwnerSecurityUserID,
            Blog.BlogID
        ];
        self.connection.query(sqlUpdateStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public deleteHardBlog(Blog, cb) {
        var self = this;
        var sqlDeleteStatement = ' DELETE FROM blogs WHERE BlogID = ?';
        var dataValues = [
            Blog.BlogID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public deleteSoftBlog(Blog, cb) {
        var self = this;
        var sqlDeleteStatement = ' UPDATE blogs SET IsDeleted = 1 WHERE BlogID = ?';
        var dataValues = [
            Blog.BlogID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public retrieveAllBlog(cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM blogs';
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public retrieveWithWhereClauseBlog(whereClause, cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM blogs WHERE ' + whereClause;
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public addContent(Content, cb) {
        var self = this;
        var sqlInsertStatement = 'INSERT INTO content (';
        sqlInsertStatement += 'ContentTypeID, ';
        sqlInsertStatement += 'Title, ';
        sqlInsertStatement += 'Path, ';
        sqlInsertStatement += 'Name, ';
        sqlInsertStatement += 'Description, ';
        sqlInsertStatement += 'WebApplicationID, ';
        sqlInsertStatement += 'ContentBlob, ';
        sqlInsertStatement += 'ContentText, ';
        sqlInsertStatement += 'RequireSession, ';
        sqlInsertStatement += 'Created';
        sqlInsertStatement += ') VALUES (';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?';
        sqlInsertStatement += ')';
        var dataValues = [
            Content.ContentTypeID,
            Content.Title,
            Content.Path,
            Content.Name,
            Content.Description,
            Content.WebApplicationID,
            Content.ContentBlob,
            Content.ContentText,
            Content.RequireSession,
            Content.Created];
        self.connection.query(sqlInsertStatement, dataValues, function (err, result) {
            cb(err, result);
        });
    };

    public modifyContent(Content, cb) {
        var self = this;
        var sqlUpdateStatement = 'UPDATE content ';
        sqlUpdateStatement += ' SET ContentTypeID = ?, ';
        sqlUpdateStatement += ' Title = ?, ';
        sqlUpdateStatement += ' Path = ?, ';
        sqlUpdateStatement += ' Name = ?, ';
        sqlUpdateStatement += ' Description = ?, ';
        sqlUpdateStatement += ' WebApplicationID = ?, ';
        sqlUpdateStatement += ' ContentBlob = ?, ';
        sqlUpdateStatement += ' ContentText = ?, ';
        sqlUpdateStatement += ' RequireSession = ?, ';
        sqlUpdateStatement += ' Created = ?';
        sqlUpdateStatement += ' WHERE ContentID = ?';
        var dataValues = [
            Content.ContentTypeID,
            Content.Title,
            Content.Path,
            Content.Name,
            Content.Description,
            Content.WebApplicationID,
            Content.ContentBlob,
            Content.ContentText,
            Content.RequireSession,
            Content.Created,
            Content.ContentID
        ];
        self.connection.query(sqlUpdateStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public deleteHardContent(Content, cb) {
        var self = this;
        var sqlDeleteStatement = ' DELETE FROM content WHERE ContentID = ?';
        var dataValues = [
            Content.ContentID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public deleteSoftContent(Content, cb) {
        var self = this;
        var sqlDeleteStatement = ' UPDATE content SET IsDeleted = 1 WHERE ContentID = ?';
        var dataValues = [
            Content.ContentID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public retrieveAllContent(cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM content';
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public retrieveWithWhereClauseContent(whereClause, cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM content WHERE ' + whereClause;
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public addContentDependency(ContentDependency, cb) {
        var self = this;
        var sqlInsertStatement = 'INSERT INTO contentdependencies (';
        sqlInsertStatement += 'ContentID, ';
        sqlInsertStatement += 'DependsOnContentID';
        sqlInsertStatement += ') VALUES (';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?';
        sqlInsertStatement += ')';
        var dataValues = [
            ContentDependency.ContentID,
            ContentDependency.DependsOnContentID];
        self.connection.query(sqlInsertStatement, dataValues, function (err, result) {
            cb(err, result);
        });
    };

    public modifyContentDependency(ContentDependency, cb) {
        var self = this;
        var sqlUpdateStatement = 'UPDATE contentdependencies ';
        sqlUpdateStatement += ' SET ContentID = ?, ';
        sqlUpdateStatement += ' DependsOnContentID = ?';
        sqlUpdateStatement += ' WHERE ContentDependencyID = ?';
        var dataValues = [
            ContentDependency.ContentID,
            ContentDependency.DependsOnContentID,
            ContentDependency.ContentDependencyID
        ];
        self.connection.query(sqlUpdateStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public deleteHardContentDependency(ContentDependency, cb) {
        var self = this;
        var sqlDeleteStatement = ' DELETE FROM contentdependencies WHERE ContentDependencyID = ?';
        var dataValues = [
            ContentDependency.ContentDependencyID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public deleteSoftContentDependency(ContentDependency, cb) {
        var self = this;
        var sqlDeleteStatement = ' UPDATE contentdependencies SET IsDeleted = 1 WHERE ContentDependencyID = ?';
        var dataValues = [
            ContentDependency.ContentDependencyID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public retrieveAllContentDependency(cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM contentdependencies';
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public retrieveWithWhereClauseContentDependency(whereClause, cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM contentdependencies WHERE ' + whereClause;
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public addContentType(ContentType, cb) {
        var self = this;
        var sqlInsertStatement = 'INSERT INTO contenttypes (';
        sqlInsertStatement += 'Name';
        sqlInsertStatement += ') VALUES (';
        sqlInsertStatement += '?';
        sqlInsertStatement += ')';
        var dataValues = [
            ContentType.Name];
        self.connection.query(sqlInsertStatement, dataValues, function (err, result) {
            cb(err, result);
        });
    };

    public modifyContentType(ContentType, cb) {
        var self = this;
        var sqlUpdateStatement = 'UPDATE contenttypes ';
        sqlUpdateStatement += ' SET Name = ?';
        sqlUpdateStatement += ' WHERE ContentTypeID = ?';
        var dataValues = [
            ContentType.Name,
            ContentType.ContentTypeID
        ];
        self.connection.query(sqlUpdateStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public deleteHardContentType(ContentType, cb) {
        var self = this;
        var sqlDeleteStatement = ' DELETE FROM contenttypes WHERE ContentTypeID = ?';
        var dataValues = [
            ContentType.ContentTypeID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public deleteSoftContentType(ContentType, cb) {
        var self = this;
        var sqlDeleteStatement = ' UPDATE contenttypes SET IsDeleted = 1 WHERE ContentTypeID = ?';
        var dataValues = [
            ContentType.ContentTypeID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public retrieveAllContentType(cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM contenttypes';
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public retrieveWithWhereClauseContentType(whereClause, cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM contenttypes WHERE ' + whereClause;
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public addSecurityUser(SecurityUser, cb) {
        var self = this;
        var sqlInsertStatement = 'INSERT INTO securityusers (';
        sqlInsertStatement += 'ExternalSecurityUserID, ';
        sqlInsertStatement += 'Username, ';
        sqlInsertStatement += 'Password,';
        sqlInsertStatement += 'WebApplicationID'
        sqlInsertStatement += ') VALUES (';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?';
        sqlInsertStatement += ')';
        var dataValues = [
            SecurityUser.ExternalSecurityUserID,
            SecurityUser.Username,
            SecurityUser.Password,
            SecurityUser.WebApplicationID];
        self.connection.query(sqlInsertStatement, dataValues, function (err, result) {
            cb(err, result);
        });
    };

    public modifySecurityUser(SecurityUser, cb) {
        var self = this;
        var sqlUpdateStatement = 'UPDATE securityusers ';
        sqlUpdateStatement += ' SET ExternalSecurityUserID = ?, ';
        sqlUpdateStatement += ' Username = ?, ';
        sqlUpdateStatement += ' Password = ?,';
        sqlUpdateStatement += ' WebApplicationID = ?';
        sqlUpdateStatement += ' WHERE SecurityUserID = ?';
        var dataValues = [
            SecurityUser.ExternalSecurityUserID,
            SecurityUser.Username,
            SecurityUser.Password,
            SecurityUser.WebApplicationID,
            SecurityUser.SecurityUserID
        ];
        self.connection.query(sqlUpdateStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public deleteHardSecurityUser(SecurityUser, cb) {
        var self = this;
        var sqlDeleteStatement = ' DELETE FROM securityusers WHERE SecurityUserID = ?';
        var dataValues = [
            SecurityUser.SecurityUserID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public deleteSoftSecurityUser(SecurityUser, cb) {
        var self = this;
        var sqlDeleteStatement = ' UPDATE securityusers SET IsDeleted = 1 WHERE SecurityUserID = ?';
        var dataValues = [
            SecurityUser.SecurityUserID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public retrieveAllSecurityUser(cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM securityusers';
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public retrieveWithWhereClauseSecurityUser(whereClause, cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM securityusers WHERE ' + whereClause;
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public addWebApplication(WebApplication, cb) {
        var self = this;
        var sqlInsertStatement = 'INSERT INTO webapplications (';
        sqlInsertStatement += 'Name, ';
        sqlInsertStatement += 'Description, ';
        sqlInsertStatement += 'IsAvailable, ';
        sqlInsertStatement += 'Created';
        sqlInsertStatement += ') VALUES (';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?, ';
        sqlInsertStatement += '?';
        sqlInsertStatement += ')';
        var dataValues = [
            WebApplication.Name,
            WebApplication.Description,
            WebApplication.IsAvailable,
            WebApplication.Created];
        self.connection.query(sqlInsertStatement, dataValues, function (err, result) {
            cb(err, result);
        });
    };

    public modifyWebApplication(WebApplication, cb) {
        var self = this;
        var sqlUpdateStatement = 'UPDATE webapplications ';
        sqlUpdateStatement += ' SET Name = ?, ';
        sqlUpdateStatement += ' Description = ?, ';
        sqlUpdateStatement += ' IsAvailable = ?, ';
        sqlUpdateStatement += ' Created = ?';
        sqlUpdateStatement += ' WHERE WebApplicationID = ?';
        var dataValues = [
            WebApplication.Name,
            WebApplication.Description,
            WebApplication.IsAvailable,
            WebApplication.Created,
            WebApplication.WebApplicationID
        ];
        self.connection.query(sqlUpdateStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public deleteHardWebApplication(WebApplication, cb) {
        var self = this;
        var sqlDeleteStatement = ' DELETE FROM webapplications WHERE WebApplicationID = ?';
        var dataValues = [
            WebApplication.WebApplicationID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public deleteSoftWebApplication(WebApplication, cb) {
        var self = this;
        var sqlDeleteStatement = ' UPDATE webapplications SET IsDeleted = 1 WHERE WebApplicationID = ?';
        var dataValues = [
            WebApplication.WebApplicationID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public retrieveAllWebApplication(cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM webapplications';
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };

    public retrieveWithWhereClauseWebApplication(whereClause, cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM webapplications WHERE ' + whereClause;
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
}
