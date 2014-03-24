
JsKit.Dom.getChildNodeByName = function( parentDomNode, nodeNameToLookFor )
{
    var chlidren = parentDomNode.childNodes;
    for( var index=0; index < chlidren.length; index++ )
    {
        var currentNode = chlidren[ index ];
        if( currentNode.nodeName == nodeNameToLookFor.toUpperCase() )
            return currentNode;
    }

    return null;
}

JsKit.Dom.createNodeByPath = function( nodePath )
{
    var incommingValue = new JsKit.Core.String();
        incommingValue.setValue( nodePath );

    var parentNodePath = new JsKit.Core.String();
        parentNodePath.setValue( incommingValue.getSubstringByIndex(0,incommingValue.lastIndexOf("/")+1) );
    var parentNode = new JsKit.Dom.Node( parentNodePath.getValue() );

    var nodeName = incommingValue.getSubstringByIndex( incommingValue.lastIndexOf("/")+1, incommingValue.getLength() );
    var node = document.createElement( nodeName );

    parentNode.appendChild( node );
}

JsKit.Dom.createNodeInMemory = function( nodeName )
{
    return document.createElement( nodeName );
}

JsKit.Dom.deleteNode = function( nodePath )
{
    var incommingValue = new JsKit.Core.String();
        incommingValue.setValue( nodePath );

    var parentNodePath = new JsKit.Core.String();
        parentNodePath.setValue( incommingValue.getSubstringByIndex(0,incommingValue.lastIndexOf("/")) );
    var parentNode = JsKit.Dom.Node( parentNodePath.getValue() );
    
    var nodeName = incommingValue.getSubstringByIndex( incommingValue.lastIndexOf("/"), incommingValue.getLength() );
    var node = document.createElement( nodeName );
    
    parentNode.removeChild( node );
}

JsKit.Dom.getNodeById = function( nodeId )
{
    return document.getElementById( tagId );
}

JsKit.Dom.setTagContentById = function( tagId, tagContent )
{
    getTagById(tagId).innerHTML = tagContent;
}
