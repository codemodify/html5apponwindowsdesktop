
/*****************************************************************************
*
*   Defines the "Widget" class that is used to build new UI elements.
*
*   Usage:
*       var widget = new JsKit.Gui.Widget();
*
*           widget.setLayoutManager( new JsKit.Gui.HorizontalLayoutManager()    ); //    this
*           widget.setLayoutManager( new JsKit.Gui.VerticalLayoutManager()      ); // or this
*
*           widget.getLayoutManager().appendWidget( new JsKit.Gui.TextEdit()    );
*           widget.getLayoutManager().appendWidget( new JsKit.Gui.PushButton()  );
*
******************************************************************************/

JsKit.Gui.Widget = function()
{
    this._name = "JsKit.Gui.Widget";

    this._domNode = null;

    this._layoutManager = null;

    this.buildContent();
}

JsKit.Gui.Widget.prototype.buildContent = function()
{
    // NOTE:
    //      This method needs to be implemented by the derived widgets.
    //      Here they will modify the "this._node" DOM node to their needs
}

JsKit.Gui.Widget.prototype.setLayoutManager = function( layoutManager )
{
    this._layoutManager = layoutManager;
}

JsKit.Gui.Widget.prototype.getLayoutManager = function()
{
    return this._layoutManager;
}

JsKit.Gui.Widget.prototype.show = function()
{
    this._isVisible = true;
}

JsKit.Gui.Widget.prototype.hide = function()
{
    
    
    
    this.render();
}

JsKit.Gui.Widget.prototype.render = function()
{
    if( !this._isVisible )
        return;

    var children = this.getChildren();
    var childrenCount = children.getLength();
    for( var widgetIndex=0; widgetIndex < childrenCount; widgetIndex++ )
    {
        var child = children.valueAt( widgetIndex );
            child.render();

        if( child._domNode != null )
            this._domNode.appendChild( child._domNode );
    }
}
