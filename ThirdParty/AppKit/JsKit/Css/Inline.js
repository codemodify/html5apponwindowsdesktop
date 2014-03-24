
/*****************************************************************************
*
*   Defines the "Inline" class that implements an interface to the
*   inline CSS for the DOM
*
*   Usage:
*       var inlineStyle = new JsKit.Css.Inline( "background-attachment: fixed; font-weight: normal;" );
*           inlineStyle.setCssProperty( JsKit.Css.eText.textAlign, JsKit.Css.eTextAlign.right );
*           ...
*       var styleValue = inlineStyle.asString();
*
*       var node = new JsKit.Dom.Node( "/html/body/div" );
*           node.setAttribute( "style", styleValue );
*
******************************************************************************/

JsKit.Css.Inline                            = function( inlineStyle )
{
    this._inlineStyle = new JsKit.Core.String();

    if( (typeof inlineStyle != "undefined") && (inlineStyle != null) )
        this._inlineStyle.setValue( inlineStyle );
}

JsKit.Css.Inline.prototype.setCssProperty   = function( cssProperty, cssPropertyValue )
{
    var newCssPropertyWithValue = cssProperty + ": " + cssPropertyValue + ";";

    // remove old css property with its value
    var startIndex  = this._inlineStyle.firstIndexOf( cssProperty );
    var endIndex    = this._inlineStyle.firstIndexOf( ";", startIndex );
    this._inlineStyle.remove( startIndex, endIndex );
    
    // insert new data
    this._inlineStyle.insert( newCssPropertyWithValue, startIndex );
}

JsKit.Css.Inline.prototype.getAsString      = function()
{
    return this._inlineStyle._value;
}
