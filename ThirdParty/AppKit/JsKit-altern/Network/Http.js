
JsKit.Network.Http = function()
{
    this._user = "";
    this._password = "";
}

JsKit.Network.Http.prototype.setUserAndPassword = function( user, password )
{
    this._user = user;
    this._password = password;
}

JsKit.Network.Http.prototype.get = function( resource )
{
    var httpRequestObject = new XMLHttpRequest();
        httpRequestObject.open( "GET", resource, false, this._user, this._password );
        httpRequestObject.send( null );

    return httpRequestObject.responseText;
}
