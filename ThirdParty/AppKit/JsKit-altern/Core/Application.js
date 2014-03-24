
JsKit.Core.Application = function()
{
    this._applicationMainWindow = null;
}

JsKit.Core.Application.prototype.setMainWindow = function( applicationMainWindow )
{
    this._applicationMainWindow = applicationMainWindow;
}

JsKit.Core.Application.prototype.run = function()
{
    this._applicationMainWindow.show();
}

JsKit.Core.Application.prototype.exit = function()
{}
