
JsKit.Gui.LayoutManager = function()
{
//    this._children = new JsKit.Core.List();
}

JsKit.Gui.LayoutManager.prototype.appendWidget = function( widget )
{
    this._children.append( widget );
}

JsKit.Gui.LayoutManager.prototype.appendLayout = function( layout )
{
    this._children.append( layout );
}

JsKit.Gui.LayoutManager.prototype.getChildren = function()
{
    return this._children;
}
