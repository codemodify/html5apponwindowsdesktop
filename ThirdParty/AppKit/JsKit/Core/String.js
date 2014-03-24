
JsKit.Core.String = function()
{
    this._value = "";
}

JsKit.Core.String.prototype.append                  = function( stringToAppend )                    {           this._value = this._value + stringToAppend;                     }
JsKit.Core.String.prototype.insert                  = function( stringToInsert, startIndex )
{
    var firstPart   = this._value.substring( 0, startIndex );
    var secondPart  = this._value.substring( startIndex, this._value.legth );
    this._value     = firstPart + stringToInsert + secondPart;
}

JsKit.Core.String.prototype.setValue                = function( value )                             {           this._value = value;                                            }

JsKit.Core.String.prototype.getValue                = function()                                    { return    this._value;                                                    }
JsKit.Core.String.prototype.getLength               = function()                                    { return    this._value.length;                                             }
JsKit.Core.String.prototype.getSubstringByIndex     = function( startIndex, endIndex )              { return    this._value.substring( startIndex, endIndex );                  }
JsKit.Core.String.prototype.getSubstringByLength    = function( startIndex, length )                { return    this._value.substr( startIndex, length );                       }
JsKit.Core.String.prototype.valueAt                 = function( charIndex )                         { return    this._value.charAt( charIndex );                                }

JsKit.Core.String.prototype.firstIndexOf            = function( stringToSearch )                    { return    this._value.indexOf( stringToSearch );                          }
JsKit.Core.String.prototype.indexOf                 = function( stringToSearch, searchFromindex )   { return    this._value.indexOf( stringToSearch, searchFromindex );         }
JsKit.Core.String.prototype.lastIndexOf             = function( stringToSearch )                    { return    this._value.lastIndexOf( stringToSearch );                      }
JsKit.Core.String.prototype.contains                = function( stringToSearch )                    { return    ( -1 == this._value.indexOf(stringToSearch) );                  }

JsKit.Core.String.prototype.toNumber                = function()                                    { return    this._value;                                                    }
JsKit.Core.String.prototype.toLowerCase             = function()                                    { var copyOfTheString = this._value; return copyOfTheString.toLowerCase();  }
JsKit.Core.String.prototype.toUpperCase             = function()                                    { var copyOfTheString = this._value; return copyOfTheString.toUpperCase();  }

JsKit.Core.String.prototype.split                   = function( separator )                         { return    this._value.split( separator );                                 }
JsKit.Core.String.prototype.remove                  = function( startIndex, endIndex )
{
    var separator           = this._value.substring( startIndex, endIndex );
    var smallArrayOfStrings = this._value.split( separator );
    this._value             = "";
    this._value.concat( smallArrayOfStrings );
}
