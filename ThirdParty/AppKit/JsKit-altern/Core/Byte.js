
JsKit.Core.Byte = function() {};
JsKit.Core.Byte.prototype = 
{
    _value: null,
    
    getValue: function()
    {
        return _value;
    },
    
    setValue: function( value )
    {
        _value = value;
    }
};
