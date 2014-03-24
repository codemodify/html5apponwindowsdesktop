
// helpers to setup the JsKit properly within the browser
function domInsertAfter( referenceNode, newNode )
{
    referenceNode.parentNode.insertBefore( newNode, referenceNode.nextSibling );
}
 
function domInsertBefore( referenceNode, newNode )
{
    referenceNode.parentNode.insertBefore( newNode, referenceNode );
}

function includeJsFileAsync( fileName )
{
    if( "" == fileName )
        return;
 
    var tagScript		= document.createElement( "script" );
		tagScript.src	= fileName;
		tagScript.type	= "text/javascript";

    domInsertBefore( JsKit.specialTagScriptAfterJsKitTag, tagScript );
}

function includeJsFileSync( fileName )
{
    if( "" == fileName )
        return;

    var httpRequestObject = new XMLHttpRequest();
        httpRequestObject.open( "GET", fileName, false );
        httpRequestObject.send( null );

    var tagScript			= document.createElement( "script" );
        tagScript.type			= "text/javascript";
        tagScript.textContent	= httpRequestObject.responseText;

    domInsertBefore( JsKit.specialTagScriptAfterJsKitTag, tagScript );
}

function includeJsContent( jsContent )
{
    if( "" == jsContent )
        return;
 
    var tagScript				= document.createElement( "script" );
		tagScript.type			= "text/javascript";
		tagScript.textContent	= jsContent;

    domInsertBefore( JsKit.specialTagScriptAfterJsKitTag, tagScript );
}

function includeJsFile( fileName ){ includeJsFileSync(fileName); }
//function includeJsFile( fileName ){ includeJsFileAsync(fileName); }

function addSpecialTagScriptAfterJsKitTag()
{
    // get the HEAD tag
    var nodeList = document.getElementsByTagName( "head" );
    var headTag = nodeList[0];
    
    // look for the <script src="JsKit/JsKit.js"> 
    nodeList = headTag.childNodes;
    for( var nodeIndex=0; nodeIndex < nodeList.length; nodeIndex++ )
    {
        if(
            nodeList[nodeIndex].tagName == "SCRIPT" &&
            ( -1 != nodeList[nodeIndex].src.toUpperCase().indexOf("JSKIT/JSKIT.JS") )
          )
        {
            // we create a script node that will be used to insert scripts before him
            JsKit.specialTagScriptAfterJsKitTag			= document.createElement( "script" );
            JsKit.specialTagScriptAfterJsKitTag.src		= "JsKit/AboutJsKit.js";
            JsKit.specialTagScriptAfterJsKitTag.type	= "text/javascript";
            
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

// defining the "JsKit" namespace in the global namespace
defineNamespace( "JsKit" );

// load the JsKit into browser
JsKit.specialTagScriptAfterJsKitTag = "";
addSpecialTagScriptAfterJsKitTag();

includeJsFile( "JsKit/Core/Core.js" );
includeJsFile( "JsKit/Dom/Dom.js" );
includeJsFile( "JsKit/Gui/Gui.js" );
includeJsFile( "JsKit/Network/Network.js" );
includeJsFile( "JsKit/Utility/Utility.js" );
