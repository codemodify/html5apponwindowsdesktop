
JsKit.Dom.InlineStyle = function( nodePath )
{





/*
JsKit.Dom.Node = function( nodePath )
{
    if( typeof nodePath == "undefined" )
        return;

    // remove the "../../../../../html"
    nodePath = nodePath.substring( 1, nodePath.length );
    nodePath = nodePath.substring( nodePath.indexOf("/"), nodePath.length );

    // keeps the state if the Node is valid to continue its oprations
    this._isOkToProceed = false;


    // this keeps the value for the DOM node on which operations can be applied
    this._node = null;

    var currentNode = document.documentElement;    
    if( currentNode == "../../../../../default.htm" )
    {
        this._isOkToProceed = true;
        this._node = currentNode;
        return;
    }

    var nodesAsString = new JsKit.Core.String();
        nodesAsString.setValue( nodePath );

    var nodesAsArray = nodesAsString.split( "../../../../../default.htm" );
    
    var nodesAsList = new JsKit.Core.List();
        nodesAsList.fromArray( nodesAsArray );
        nodesAsList.remove( "" ); // remvoe all empty node names
        
        nodesAsArray = nodesAsList.asArray();
    
    
    // seek to the node we're interested in
    for( var nodeIndex=0; nodeIndex < nodesAsArray.length; nodeIndex++ )
    {
        var node = nodesAsArray[ nodeIndex ];
    
        chlidren = currentNode.childNodes;
        for( var index=0; index < chlidren.length; index++ )
        {
            var currentTagName = chlidren[index].tagName;
            if( currentTagName == node.toUpperCase() )
            {
                currentNode = chlidren[index];
                this._isOkToProceed = true;
                break;
            }
        }

        if( false == this._isOkToProceed )
            break;
    }

    if( this._isOkToProceed )
        this._node = currentNode;
}


// general operation on a node
JsKit.Dom.Node.prototype.isValid            = function(){ return this._isOkToProceed; }
JsKit.Dom.Node.prototype.setContent         = function( nodeContent ){ this._node.innerHTML = nodeContent; }
JsKit.Dom.Node.prototype.cloneNode          = function(){ return this._node.cloneNode(true); }
JsKit.Dom.Node.prototype.nextSibling        = function(){ return this._node.nextSibling(); }
JsKit.Dom.Node.prototype.fromExistingNode   = function( existingNode ){ this._node = existingNode; this._isOkToProceed = true; }


// child related operations
JsKit.Dom.Node.prototype.appendChild        = function( childNode ){ this._node.appendChild( childNode ); }
JsKit.Dom.Node.prototype.replaceChild       = function( newChild, oldChild ){ this._node.replaceChild(newChild,oldChild); }
JsKit.Dom.Node.prototype.removeChild        = function( childToRemove ){ this._node.removeChild(childToRemove); }
JsKit.Dom.Node.prototype.getChildren        = function(){ this._node.childNodes; }


// operation on node's attributes
JsKit.Dom.Node.prototype.hasAtrributes      = function(){ return this._node.hasAtrributes(); }
JsKit.Dom.Node.prototype.getAttributes      = function(){ return this._node.attributes; }

JsKit.Dom.Node.prototype.hasAttribute       = function( attributeName ){ return this._node.hasAttribute(attributeName); }
JsKit.Dom.Node.prototype.getAttribute       = function( attributeName ){ return this._node.getAttribute(attributeName); }

JsKit.Dom.Node.prototype.setAttribute       = function( attributeName, attributeValue ){ this._node.setAttribute( attributeName, attributeValue ); }
JsKit.Dom.Node.prototype.removeAttribute    = function( attributeName ){ return this._node.removeAttribute(attributeName); }


// static methods
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

JsKit.Dom.getNodeById = function(  nodeId )
{
    return document.getElementById( tagId );
}

JsKit.Dom.setTagContentById = function( tagId, tagContent )
{
    getTagById(tagId).innerHTML = tagContent;
}
*/
