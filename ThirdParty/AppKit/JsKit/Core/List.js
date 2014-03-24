
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

JsKit.Core.List.prototype.getLength     = function(){ return this.length;                           }
JsKit.Core.List.prototype.append        = function( newValue ){ this.push( newValue );              }
JsKit.Core.List.prototype.appendList    = function( newList ){ for( var index=0; index < newList.length; index++ ) this.push( newList[index] ); }
JsKit.Core.List.prototype.setAt         = function( index, newValue ){ this[index] = newValue;      }
JsKit.Core.List.prototype.getAt         = function( index ){ return this[index]; }

var      _helperFilterValue             = 0;
function _helperFilterFunction( element, index, array ){ return ( element != _helperFilterValue );  }
JsKit.Core.List.prototype.removeAll     = function( value )
{
    _helperFilterValue = value;

    var filteredData = this.filter( _helperFilterFunction );

    this.clear();
    this.appendList( filteredData );
}

JsKit.Core.List.prototype.removeAt      = function( index ){ this.removeFromTo(index,index+1);      }
JsKit.Core.List.prototype.removeFromTo  = function( fromIndex, toIndex ){ this.splice( fromIndex, toIndex-fromIndex );                          }
JsKit.Core.List.prototype.clear         = function(){ for( ; this.length; ) this.pop();             }
