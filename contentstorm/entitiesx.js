"use strict";
function BlogEntry(BlogEntryID, BlogID, ContentID, PublishDate, AuthorSecurityUserID, IsVisible) {
    this.BlogEntryID = null;
    this.BlogID = null;
    this.ContentID = null;
    this.PublishDate = null;
    this.AuthorSecurityUserID = null;
    this.IsVisible = null;
}
exports.BlogEntry = BlogEntry;
function Blog(BlogID, WebApplicationID, Name, Description, Created, IsActive, OwnerSecurityUserID) {
    this.BlogID = null;
    this.WebApplicationID = null;
    this.Name = null;
    this.Description = null;
    this.Created = null;
    this.IsActive = null;
    this.OwnerSecurityUserID = null;
}
exports.Blog = Blog;
function Content(ContentID, ContentTypeID, Title, Path, Name, Description, WebApplicationID, ContentBlob, ContentText, RequireSession, Created) {
    this.ContentID = null;
    this.ContentTypeID = null;
    this.Title = null;
    this.Path = null;
    this.Name = null;
    this.Description = null;
    this.WebApplicationID = null;
    this.ContentBlob = null;
    this.ContentText = null;
    this.RequireSession = null;
    this.Created = null;
}
exports.Content = Content;
function ContentDependency(ContentDependencyID, ContentID, DependsOnContentID) {
    this.ContentDependencyID = null;
    this.ContentID = null;
    this.DependsOnContentID = null;
}
exports.ContentDependency = ContentDependency;
function ContentType(ContentTypeID, Name) {
    this.ContentTypeID = null;
    this.Name = null;
}
exports.ContentType = ContentType;
function SecurityUser(SecurityUserID, ExternalSecurityUserID, Username, Password) {
    this.SecurityUserID = null;
    this.ExternalSecurityUserID = null;
    this.Username = null;
    this.Password = null;
}
exports.SecurityUser = SecurityUser;
function WebApplication(WebApplicationID, Name, Description, IsAvailable, Created) {
    this.WebApplicationID = null;
    this.Name = null;
    this.Description = null;
    this.IsAvailable = null;
    this.Created = null;
}
exports.WebApplication = WebApplication;
//# sourceMappingURL=entitiesx.js.map