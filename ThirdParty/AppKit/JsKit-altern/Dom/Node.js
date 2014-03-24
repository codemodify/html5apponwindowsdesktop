
/*****************************************************************************
*
*   Defines the "Node" class that represents a DOM node.
*   The DOM node must be already created.
*   Implements easy interfaces to change a node at run time.
*
*   Usage:
*       var node = new JsKit.Dom.Node( "/html/body/div" );
*           node.setAttribute( "class", "withCoolUnderline" );
*
******************************************************************************/

JsKit.Dom.Node = function( nodePath )
{
    this._domNode = null;

    this.fromPath( nodePath );
}

JsKit.Dom.Node.prototype.fromPath = function( nodePath )
{
    this._domNode = null;
    
    if( typeof nodePath == "undefined" )
        return;

    // split the path into a list of node names
    var nodesAsList = new JsKit.Core.List();
        nodesAsList.appendList( nodePath.split("/") );

    // seek to the root of the DOM
    var currentNode = window.document.documentElement;
    nodesAsList.removeAt( 0 ); // 'currentNode' is 'HTML' ==> remove it from "nodesAsList"
    
    // seek to the node we're interested in
    for( var nodeIndex=0; nodeIndex < nodesAsList.getLength(); nodeIndex++ )
    {
        var nodeName = nodesAsList.getAt( nodeIndex );

        this._domNode = getChildNodeByName( currentNode, nodeName );
    }
}


// general operations on a node
JsKit.Dom.Node.prototype.isValid            = function()                { return this._isOkToProceed; }
JsKit.Dom.Node.prototype.setContent         = function( nodeContent )   { this._node.innerHTML = nodeContent; }
JsKit.Dom.Node.prototype.cloneNode          = function()                { return this._node.cloneNode(true); }
JsKit.Dom.Node.prototype.nextSibling        = function()                { return this._node.nextSibling(); }
JsKit.Dom.Node.prototype.fromExistingNode   = function( existingNode )  { this._node = existingNode; this._isOkToProceed = true; }


// child related operations
JsKit.Dom.Node.prototype.appendChild        = function( childNode )         { this._node.appendChild( childNode ); }
JsKit.Dom.Node.prototype.replaceChild       = function( newChild, oldChild ){ this._node.replaceChild(newChild,oldChild); }
JsKit.Dom.Node.prototype.removeChild        = function( childToRemove )     { this._node.removeChild(childToRemove); }
JsKit.Dom.Node.prototype.getChildren        = function()                    { this._node.childNodes; }


// operations on node's attributes
JsKit.Dom.Node.prototype.hasAtrributes      = function()                                { return this._node.hasAtrributes(); }
JsKit.Dom.Node.prototype.getAttributes      = function()                                { return this._node.attributes; }

JsKit.Dom.Node.prototype.hasAttribute       = function( attributeName )                 { return this._node.hasAttribute(attributeName); }
JsKit.Dom.Node.prototype.getAttribute       = function( attributeName )                 { return this._node.getAttribute(attributeName); }

JsKit.Dom.Node.prototype.setAttribute       = function( attributeName, attributeValue ) { this._node.setAttribute( attributeName, attributeValue ); }
JsKit.Dom.Node.prototype.removeAttribute    = function( attributeName )                 { return this._node.removeAttribute(attributeName); }
