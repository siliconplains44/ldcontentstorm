/// <reference path="definitions/node.d.ts"/>
/// <reference path="definitions/express.d.ts"/>
"use strict";
var fs = require('fs');
var globalServiceConnectionPool = require("./app");
var DataAccessLayerX = (function () {
    function DataAccessLayerX() {
        this.serviceConnectionPool = globalServiceConnectionPool;
    }
    DataAccessLayerX.prototype.openConnection = function (cb) {
        var _this = this;
        this.serviceConnectionPool.serviceConnectionPool.getConnection(function (err, newconnection) {
            if (!err) {
                _this.connection = newconnection;
            }
            cb(err);
        });
    };
    DataAccessLayerX.prototype.closeConnection = function () {
        this.connection.release();
    };
    DataAccessLayerX.prototype.escape = function (value) {
        return this.connection.escape(value);
    };
    DataAccessLayerX.prototype.startTransaction = function (cb) {
        this.executeStatement('START TRANSACTION', cb);
    };
    DataAccessLayerX.prototype.rollbackTransaction = function (cb) {
        this.executeStatement('ROLLBACK', cb);
    };
    DataAccessLayerX.prototype.commitTransaction = function (cb) {
        this.executeStatement('COMMIT', cb);
    };
    DataAccessLayerX.prototype.executeStatement = function (sqlStatement, cb) {
        this.connection.query(sqlStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    DataAccessLayerX.prototype.executeQuery = function (sqlQueryStatement, cb) {
        this.connection.query(sqlQueryStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    DataAccessLayerX.prototype.addBlogEntry = function (BlogEntry, cb) {
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
    ;
    DataAccessLayerX.prototype.modifyBlogEntry = function (BlogEntry, cb) {
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
    ;
    DataAccessLayerX.prototype.deleteHardBlogEntry = function (BlogEntry, cb) {
        var self = this;
        var sqlDeleteStatement = ' DELETE FROM blogentries WHERE BlogEntryID = ?';
        var dataValues = [
            BlogEntry.BlogEntryID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.deleteSoftBlogEntry = function (BlogEntry, cb) {
        var self = this;
        var sqlDeleteStatement = ' UPDATE blogentries SET IsDeleted = 1 WHERE BlogEntryID = ?';
        var dataValues = [
            BlogEntry.BlogEntryID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.retrieveAllBlogEntry = function (cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM blogentries';
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.retrieveWithWhereClauseBlogEntry = function (whereClause, cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM blogentries WHERE ' + whereClause;
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.addBlog = function (Blog, cb) {
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
    ;
    DataAccessLayerX.prototype.modifyBlog = function (Blog, cb) {
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
    ;
    DataAccessLayerX.prototype.deleteHardBlog = function (Blog, cb) {
        var self = this;
        var sqlDeleteStatement = ' DELETE FROM blogs WHERE BlogID = ?';
        var dataValues = [
            Blog.BlogID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.deleteSoftBlog = function (Blog, cb) {
        var self = this;
        var sqlDeleteStatement = ' UPDATE blogs SET IsDeleted = 1 WHERE BlogID = ?';
        var dataValues = [
            Blog.BlogID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.retrieveAllBlog = function (cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM blogs';
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.retrieveWithWhereClauseBlog = function (whereClause, cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM blogs WHERE ' + whereClause;
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.addContent = function (Content, cb) {
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
    ;
    DataAccessLayerX.prototype.modifyContent = function (Content, cb) {
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
    ;
    DataAccessLayerX.prototype.deleteHardContent = function (Content, cb) {
        var self = this;
        var sqlDeleteStatement = ' DELETE FROM content WHERE ContentID = ?';
        var dataValues = [
            Content.ContentID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.deleteSoftContent = function (Content, cb) {
        var self = this;
        var sqlDeleteStatement = ' UPDATE content SET IsDeleted = 1 WHERE ContentID = ?';
        var dataValues = [
            Content.ContentID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.retrieveAllContent = function (cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM content';
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.retrieveWithWhereClauseContent = function (whereClause, cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM content WHERE ' + whereClause;
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.addContentDependency = function (ContentDependency, cb) {
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
    ;
    DataAccessLayerX.prototype.modifyContentDependency = function (ContentDependency, cb) {
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
    ;
    DataAccessLayerX.prototype.deleteHardContentDependency = function (ContentDependency, cb) {
        var self = this;
        var sqlDeleteStatement = ' DELETE FROM contentdependencies WHERE ContentDependencyID = ?';
        var dataValues = [
            ContentDependency.ContentDependencyID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.deleteSoftContentDependency = function (ContentDependency, cb) {
        var self = this;
        var sqlDeleteStatement = ' UPDATE contentdependencies SET IsDeleted = 1 WHERE ContentDependencyID = ?';
        var dataValues = [
            ContentDependency.ContentDependencyID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.retrieveAllContentDependency = function (cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM contentdependencies';
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.retrieveWithWhereClauseContentDependency = function (whereClause, cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM contentdependencies WHERE ' + whereClause;
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.addContentType = function (ContentType, cb) {
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
    ;
    DataAccessLayerX.prototype.modifyContentType = function (ContentType, cb) {
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
    ;
    DataAccessLayerX.prototype.deleteHardContentType = function (ContentType, cb) {
        var self = this;
        var sqlDeleteStatement = ' DELETE FROM contenttypes WHERE ContentTypeID = ?';
        var dataValues = [
            ContentType.ContentTypeID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.deleteSoftContentType = function (ContentType, cb) {
        var self = this;
        var sqlDeleteStatement = ' UPDATE contenttypes SET IsDeleted = 1 WHERE ContentTypeID = ?';
        var dataValues = [
            ContentType.ContentTypeID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.retrieveAllContentType = function (cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM contenttypes';
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.retrieveWithWhereClauseContentType = function (whereClause, cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM contenttypes WHERE ' + whereClause;
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.addSecurityUser = function (SecurityUser, cb) {
        var self = this;
        var sqlInsertStatement = 'INSERT INTO securityusers (';
        sqlInsertStatement += 'ExternalSecurityUserID, ';
        sqlInsertStatement += 'Username, ';
        sqlInsertStatement += 'Password,';
        sqlInsertStatement += 'WebApplicationID';
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
    ;
    DataAccessLayerX.prototype.modifySecurityUser = function (SecurityUser, cb) {
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
    ;
    DataAccessLayerX.prototype.deleteHardSecurityUser = function (SecurityUser, cb) {
        var self = this;
        var sqlDeleteStatement = ' DELETE FROM securityusers WHERE SecurityUserID = ?';
        var dataValues = [
            SecurityUser.SecurityUserID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.deleteSoftSecurityUser = function (SecurityUser, cb) {
        var self = this;
        var sqlDeleteStatement = ' UPDATE securityusers SET IsDeleted = 1 WHERE SecurityUserID = ?';
        var dataValues = [
            SecurityUser.SecurityUserID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.retrieveAllSecurityUser = function (cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM securityusers';
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.retrieveWithWhereClauseSecurityUser = function (whereClause, cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM securityusers WHERE ' + whereClause;
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.addWebApplication = function (WebApplication, cb) {
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
    ;
    DataAccessLayerX.prototype.modifyWebApplication = function (WebApplication, cb) {
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
    ;
    DataAccessLayerX.prototype.deleteHardWebApplication = function (WebApplication, cb) {
        var self = this;
        var sqlDeleteStatement = ' DELETE FROM webapplications WHERE WebApplicationID = ?';
        var dataValues = [
            WebApplication.WebApplicationID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.deleteSoftWebApplication = function (WebApplication, cb) {
        var self = this;
        var sqlDeleteStatement = ' UPDATE webapplications SET IsDeleted = 1 WHERE WebApplicationID = ?';
        var dataValues = [
            WebApplication.WebApplicationID
        ];
        self.connection.query(sqlDeleteStatement, dataValues, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.retrieveAllWebApplication = function (cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM webapplications';
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    DataAccessLayerX.prototype.retrieveWithWhereClauseWebApplication = function (whereClause, cb) {
        var self = this;
        var sqlSelectStatement = ' SELECT * FROM webapplications WHERE ' + whereClause;
        self.connection.query(sqlSelectStatement, function (err, rows, fields) {
            cb(err, rows, fields);
        });
    };
    ;
    return DataAccessLayerX;
}());
exports.DataAccessLayerX = DataAccessLayerX;
//# sourceMappingURL=dalxpooled.js.map