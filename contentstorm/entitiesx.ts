export function BlogEntry (BlogEntryID, BlogID, ContentID, PublishDate, AuthorSecurityUserID, IsVisible) {
    this.BlogEntryID = null;
    this.BlogID = null;
    this.ContentID = null;
    this.PublishDate = null;
    this.AuthorSecurityUserID = null;
    this.IsVisible = null;
}

export function Blog (BlogID, WebApplicationID, Name, Description, Created, IsActive, OwnerSecurityUserID) {
    this.BlogID = null;
    this.WebApplicationID = null;
    this.Name = null;
    this.Description = null;
    this.Created = null;
    this.IsActive = null;
    this.OwnerSecurityUserID = null;
}

export function Content (ContentID, ContentTypeID, Title, Path, Name, Description, WebApplicationID, ContentBlob, ContentText, RequireSession, Created) {
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

export function ContentDependency (ContentDependencyID, ContentID, DependsOnContentID) {
    this.ContentDependencyID = null;
    this.ContentID = null;
    this.DependsOnContentID = null;
}

export function ContentType (ContentTypeID, Name) {
    this.ContentTypeID = null;
    this.Name = null;
}

export function SecurityUser (SecurityUserID, ExternalSecurityUserID, Username, Password) {
    this.SecurityUserID = null;
    this.ExternalSecurityUserID = null;
    this.Username = null;
    this.Password = null;
}

export function WebApplication (WebApplicationID, Name, Description, IsAvailable, Created) {
    this.WebApplicationID = null;
    this.Name = null;
    this.Description = null;
    this.IsAvailable = null;
    this.Created = null;
}

