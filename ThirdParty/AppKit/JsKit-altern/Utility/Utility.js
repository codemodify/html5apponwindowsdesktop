
// define a mechanism of synchronous load of JS files
function include( file )
{
	var http = new JsKit.Network.Http();
	var jsFileContent = http.get( file );
	
	includeJsContent( jsFileContent );
}
