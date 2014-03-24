
JsKit.Gui.Label = function( text )
{
    this._name = "JsKit.Gui.Label";

    this._layoutManager = new JsKit.Gui.HorizontalLayoutManager();

    this._text = text;
}

JsKit.Gui.Label.prototype = new JsKit.Gui.Widget();

JsKit.Gui.Label.prototype.setLabel = function( newLabel )
{
    this._domNode.setContent( newLabel );
}


// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Overrides ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Gui.Label.prototype.buildContent = function()
{
    // var node        = JsKit.Dom.createTextNode( this._text );

    // this._domNode   = new JsKit.Dom.Node();
    // this._domNode.fromExistingNode( node );
    
    var node        = JsKit.Dom.createNodeInMemory( "div" );

    this._domNode   = new JsKit.Dom.Node();
    this._domNode.fromExistingNode( node );
    
    this.setLabel( this._text );
}
