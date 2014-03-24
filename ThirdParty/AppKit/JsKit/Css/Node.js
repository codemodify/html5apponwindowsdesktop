
/*****************************************************************************
*
*   Defines the "Node" class that implements an interface to the
*   CSS styling of a HTML tag, that must be loaded into the <style></style>
*
*   Usage:
*       var styleNode = new JsKit.Css.Node( "body" );
*           styleNode.setCssProperty( JsKit.Css.eText."text-align", JsKit.Css.eTextAlign."left" );
*           styleNode.setCssProperty( JsKit.Css.eText."color",      "rgb(255,255,255)"          );
*           ...
*       var styleValue = styleNode.asString();
*
*       var node = new JsKit.Dom.Node( "/html/head/style" );
*           node.appendTextAsIs( styleValue );
*
*
*       // after the code above the <style> node will look like this
*       <style>
*           body{ text-align: left; color: rgb(255,255,255); }
*       </style>
*
******************************************************************************/

JsKit.Css.Node = function( cssNode )
{
    this._cssNode = cssNode;
}

JsKit.Css.Node.prototype = new JsKit.Css.Node();

JsKit.Css.Node.prototype.getAsString = function()
{
    return " " + this._cssNode + "{ " + this._inlineStyle._value + " } ";
}
