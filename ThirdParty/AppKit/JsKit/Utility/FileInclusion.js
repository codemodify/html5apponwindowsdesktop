
function includeJsContent( jsContent )
{
    if( "" == jsContent )
        return;
 
    var tagScript                = document.createElement( "script" );
        tagScript.type           = "text/javascript";
        tagScript.textContent    = jsContent;

    domInsertBefore( JsKit.specialTagScriptAfterJsKitTag, tagScript );
}

// define a mechanism of synchronous load of JS files
function include( file )
{
    var http = new JsKit.Network.Http();
    var jsFileContent = http.get( file );

    includeJsContent( jsFileContent );
}
