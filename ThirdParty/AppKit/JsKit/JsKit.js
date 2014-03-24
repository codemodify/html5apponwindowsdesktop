
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
//      Helpers to setup the JsKit properly within the browser
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
function domInsertAfter ( referenceNode, newNode ){ referenceNode.parentNode.insertBefore( newNode, referenceNode.nextSibling   ); }
function domInsertBefore( referenceNode, newNode ){ referenceNode.parentNode.insertBefore( newNode, referenceNode               ); }
function isValid        ( object )                { return (""!=object) && (null!=object) && ("undefined"!=typeof object);   }

function includeJsFileAsync( fileName ) // instructs the browser to fetch the content
{
    if( !isValid(fileName) )
        return;
 
    var tagScript       = document.createElement( "script" );
        tagScript.type  = "text/javascript";
        tagScript.src   = fileName;

    domInsertBefore( JsKit.specialTagScriptAfterJsKitTag, tagScript );
}

function includeJsFileSync( fileName ) // fetches the content and insters it into the HEAD area
{
    if( !isValid(fileName) )
        return;

    var httpRequestObject = new XMLHttpRequest();
        httpRequestObject.open( "GET", fileName, false );
        httpRequestObject.send( null );

    var tagScript               = document.createElement( "script" );
        tagScript.type          = "text/javascript";
        tagScript.textContent   = httpRequestObject.responseText;

    domInsertBefore( JsKit.specialTagScriptAfterJsKitTag, tagScript );
}

function addSpecialNodeScriptAfterJsKitNode()
{
    // get the HEAD tag
    var nodeList = document.getElementsByTagName( "head" );
    var headTag = nodeList[0];
    
    // look for the <script src="JsKit/JsKit.js">, it must be there already written by developer
    nodeList = headTag.childNodes;
    for( var nodeIndex=0; nodeIndex < nodeList.length; nodeIndex++ )
    {
        if(
            nodeList[nodeIndex].nodeName == "SCRIPT" &&
            ( -1 != nodeList[nodeIndex].src.toUpperCase().indexOf("JSKIT/JSKIT.JS") )
          )
        {
            // we create a script node that will be used to insert scripts before him
            JsKit.specialTagScriptAfterJsKitTag         = null;
            JsKit.specialTagScriptAfterJsKitTag         = document.createElement( "script" );
            JsKit.specialTagScriptAfterJsKitTag.type    = "text/javascript";
            JsKit.specialTagScriptAfterJsKitTag.src     = "JsKit/AboutJsKit.js";

            domInsertAfter( nodeList[nodeIndex], JsKit.specialTagScriptAfterJsKitTag );
 
            break;
        }
    }
}

function defineNamespace( namespace )
{
    var namespaces = namespace.split('.') || [namespace];
    var parentNamespace = window;
    var namespaceContent = function(){};
    
    // creates the endpoint namespace, also creates the namespaces in-between if they don't exist
    for( var namespaceIndex=0; namespaceIndex < namespaces.length; namespaceIndex++ )
    {
        var currentNamespace = namespaces[namespaceIndex];
        if( typeof(parentNamespace[currentNamespace]) === 'undefined' )
        {
            parentNamespace[currentNamespace] = namespaceContent;
            parentNamespace[currentNamespace].prototype = namespaceContent;
        }
        else
        {
            parentNamespace = parentNamespace[currentNamespace];
        }
    }
}

//var JsKit_Load_FromHdd = false;
function includeJsFile( fileName )
{
//    if( JsKit_Load_FromHdd == true )
//        includeJsFileSync( fileName );
//    else
        includeJsFileAsync( fileName );
}

function run( fromFile )
{
    // to remember that this function gets called when the JsKit is available,
    // so we can safely use here anything that was defined within JsKit.
    includeJsFile( fromFile );
}




// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
//      Loads the "JsKit" into the browser using helpers above
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
defineNamespace( "JsKit" );

addSpecialNodeScriptAfterJsKitNode();     // adds a DOM node used as reference when loading JsKit

includeJsFile( "JsKit/Core/Core.js"         );
includeJsFile( "JsKit/Css/Css.js"           );
includeJsFile( "JsKit/Dom/Dom.js"           );
includeJsFile( "JsKit/Gui/Gui.js"           );
includeJsFile( "JsKit/Network/Network.js"   );
includeJsFile( "JsKit/Utility/Utility.js"   );
