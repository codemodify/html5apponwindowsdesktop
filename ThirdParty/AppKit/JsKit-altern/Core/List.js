
/*****************************************************************************
*
*   Defines the "List" class that represents a list data type
*   with easy to use interfaces.
*
*   Usage:
*       var list = new JsKit.Core.List();
*           list.append( 1 );
*           list.append( 2 );
*           list.append( 3 );
*
*       for( var index=0; index < list.getLength(); index++ )
*       {
*           list[ index ] = 0;
*
*           // or
*
*           list.setAt( index, 0 );
*       }
*
******************************************************************************/

JsKit.Core.List = function()
{}

JsKit.Core.List.prototype = new Array();

JsKit.Core.List.prototype.getLength     = function(){ return this.length; }
JsKit.Core.List.prototype.append        = function( newValue ){ this[this.length] = newValue; }
JsKit.Core.List.prototype.appendList    = function( newList )
{
    for( var index=0; index < newList.length; index++ )
    {
        this[ this.length ] = newList[ index ];
    }
}

JsKit.Core.List.prototype.setAt         = function( index, newValue ){ this[index] = newValue; }
JsKit.Core.List.prototype.valueAt       = function( index ){ return this[index]; }


JsKit.Core.List.prototype._helperFilterValue      = 0;
JsKit.Core.List.prototype._helperFilterFunction   = function( element, index, array ){ return ( element != this._helperFilterValue ); }
JsKit.Core.List.prototype.removeAll     = function( value ){ this._helperFilterValue = value; this = this.filter( this._helperFilterFunction ); }

JsKit.Core.List.prototype.removeAt      = function( index ){ this.removeFromTo(index); }
JsKit.Core.List.prototype.removeFromTo  = function( fromIndex, toIndex )
{
    var rest = this.slice( (toIndex||fromIndex) + 1 || this.length );

    this.length = fromIndex < 0 ? this.length + fromIndex : fromIndex;

    return this.push.apply( this, rest );
}
