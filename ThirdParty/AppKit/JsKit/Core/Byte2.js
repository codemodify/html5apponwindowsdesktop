
//function EntityDefiner( entity )
//{
//    var _enity = entity;

//    this.definition = function( entityDefinition )
//    {
//        _entity.prototype = entityDefinition;
//    };
//}

//function $namespace( namespaceName )
//{
//    namespaceName = function() {};

//    var entityDefiner = new EntityDefiner( namespaceName );

//    return entityDefiner;
//}

function $class( namespace )
{
    var namespaces = namespace.split('.') || [namespace];
    var parentNamespace = window;

    var namespaceDefintion = function( parameter )
    {
        this.Constructor( parameter );
    };

    var namespaceContent = function(){};

    var currentNamespaces = null;

    // creates the endpoint namespace, also creates the namespaces in-between if they don't exist
    for( var currentNamespaceIndex=0, namespacesLength=namespaces.length; currentNamespaceIndex < namespacesLength; currentNamespaceIndex++ )
    {
        var currentNamespace = namespaces[currentNamespaceIndex];
        currentNamespaces = ( currentNamespaces === null ) ? currentNamespace : currentNamespaces + "." + currentNamespace;

        if( typeof(parentNamespace.currentNamespaces) === "undefined" )
        {
            parentNamespace.currentNamespaces = namespaceDefintion;
            parentNamespace.currentNamespaces.prototype = namespaceContent;
        }
//        else
//        {
            parentNamespace = parentNamespace.currentNamespaces;
//        }
    }

    return window.namespace;
}

var a = $class( JsKit.Core.Byte );

$class( "JsKit.Core.Byte" ).prototype = 
{
    _value: "DefaultByteValue",

    Constructor: function ( parameter )
    {
        var typeResult1 = typeof( parameter );
        var typeResult2 = typeof( Byte );
        var typeResult3 = typeof( "Byte" );
        var typeResult4 = typeof( this );
    
        if( typeResult1 === typeResult2  )
        {
            this._value = parameter.GetValue();
        }
        else
        {
            this._value = parameter;
        }
    },

    SetValue: function( value )
    {
        this._value = value;
    },

    GetValue: function()
    {
        return this._value;
    }
};

$class( "JsKit.Core.String2" ).prototype = 
{
    _value: "DefaultStringValue",

    Constructor: function ( parameter )
    {
        var typeResult1 = typeof( parameter );
        var typeResult2 = typeof( Byte );
        var typeResult3 = typeof( "String2" );
        var typeResult4 = typeof( this );
    
        if( typeResult1 === typeResult2  )
        {
            this._value = parameter.GetValue();
        }
        else
        {
            this._value = parameter;
        }
    },

    SetValue: function( value )
    {
        this._value = value;
    },

    GetValue: function()
    {
        return this._value;
    }
};


var myObject1 = new Byte();
var myObject2 = new Byte( myObject1 );
var myObject3 = new JsKit.Core.Byte();
var myObject4 = new JsKit.Core.Byte( myObject3 );
var myObject5 = new String2();
var myObject6 = new String2( myObject5 );

var myValue1 = myObject1.GetValue();
var myValue2 = myObject2.GetValue();
var myValue3 = myObject3.GetValue();
var myValue4 = myObject4.GetValue();
var myValue5 = myObject5.GetValue();
var myValue6 = myObject6.GetValue();

//        $property( Value );
//        
//        $constructor( Byte byte )
//        {
//            _value = byte.Value;
//        }
