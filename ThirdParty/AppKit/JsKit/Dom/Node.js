
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
    nodesAsList.removeAll( "" );    // remove all the empty elements
    nodesAsList.removeAt( 0 );      // 'currentNode' is 'HTML' ==> remove it from "nodesAsList"
    
    // seek to the node we're interested in
    for( var nodeIndex=0; nodeIndex < nodesAsList.getLength(); nodeIndex++ )
    {
        var nodeName = nodesAsList.getAt( nodeIndex );

        currentNode = JsKit.Dom.getChildDomNodeByName( currentNode, nodeName );
    }

    this._domNode = currentNode;
}


// general operations on a node
JsKit.Dom.Node.prototype.isValid            = function()                { return    this._domNode != null;                    }
JsKit.Dom.Node.prototype.setContent         = function( nodeContent )   {           this._domNode.innerHTML = nodeContent;  }
JsKit.Dom.Node.prototype.cloneNode          = function()                { return    this._domNode.cloneNode(true);          }
JsKit.Dom.Node.prototype.nextSibling        = function()                { return    this._domNode.nextSibling();            }
JsKit.Dom.Node.prototype.fromExistingNode   = function( existingNode )  {           this._domNode = existingNode;           }


// child related operations, as parameter is taken a JsKit.Dom.Node
JsKit.Dom.Node.prototype.appendChild        = function( childNode )         { this._domNode.appendChild( childNode._domNode );                }
JsKit.Dom.Node.prototype.replaceChild       = function( newChild, oldChild ){ this._domNode.replaceChild( newChild._domNode,oldChild._domNode ); }
JsKit.Dom.Node.prototype.removeChild        = function( childToRemove )     { this._domNode.removeChild( childToRemove._domNode );            }
JsKit.Dom.Node.prototype.getChildren        = function()                    { this._domNode.childNodes;                                    }

// child related operations, as parameter is taken a DOM node
JsKit.Dom.Node.prototype.appendDomChild     = function( childNode )         { this._domNode.appendChild( childNode );               }
JsKit.Dom.Node.prototype.replaceDomChild    = function( newChild, oldChild ){ this._domNode.replaceChild( newChild, oldChild );     }
JsKit.Dom.Node.prototype.removeDomChild     = function( childToRemove )     { this._domNode.removeChild( childToRemove );           }


// operations on node's attributes
JsKit.Dom.Node.prototype.hasAtrributes      = function()                                { return    this._domNode.hasAtrributes();  }
JsKit.Dom.Node.prototype.getAttributes      = function()                                { return    this._domNode.attributes;       }

JsKit.Dom.Node.prototype.hasAttribute       = function( attributeName )                 { return    this._domNode.hasAttribute(attributeName); }
JsKit.Dom.Node.prototype.getAttribute       = function( attributeName )                 { return    this._domNode.getAttribute(attributeName); }

JsKit.Dom.Node.prototype.setAttribute       = function( attributeName, attributeValue ) {           this._domNode.setAttribute( attributeName, attributeValue );    }
JsKit.Dom.Node.prototype.removeAttribute    = function( attributeName )                 { return    this._domNode.removeAttribute(attributeName);                   }
