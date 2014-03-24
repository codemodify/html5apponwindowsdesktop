
/*****************************************************************************
*
*   Defines the "Widget" class that is used to build new UI elements.
*
*   Usage:
*       var widget = new JsKit.Gui.Widget();
*
*           widget.setLayoutManager( new JsKit.Gui.HorizontalLayoutManager()    ); //    this
*           widget.setLayoutManager( new JsKit.Gui.VerticalLayoutManager()      ); // or this
*
*           widget.getLayoutManager().appendWidget( new JsKit.Gui.TextEdit()    );
*           widget.getLayoutManager().appendWidget( new JsKit.Gui.PushButton()  );
*
******************************************************************************/

JsKit.Gui.Widget = function()
{
    this._name = "JsKit.Gui.Widget";

    this._domNode = new JsKit.Dom.Node();

    this._layoutManager = null;

    // hack used to build the content of a widget
    this._firstTimeShow = true;
}

JsKit.Gui.Widget.prototype.setName = function( name )                   {        this._name = name;                    }
JsKit.Gui.Widget.prototype.getNode = function()                         { return this._domNode;                        }
JsKit.Gui.Widget.prototype.setLayoutManager = function( layoutManager ) {        this._layoutManager = layoutManager;  }
JsKit.Gui.Widget.prototype.getLayoutManager = function()                { return this._layoutManager;                  }

JsKit.Gui.Widget.prototype.show = function()
{
    if( !this._firstTimeShow )
    {
        // get the style attribute
        var styleAttributeContent   = this._domNode.getAttribute( "style" );

        // modify the style to our needs
        var inlineStyle             = new JsKit.Css.Inline( styleAttributeContent )
            inlineStyle.setCssProperty( JsKit.Css.eClassification.Visibility, JsKit.Css.eVisibility.Visible );

        // save the style back to the DOM node
        this._domNode.setAttribute( "style", inlineStyle.getAsString() );
    }

    this.render();
}

JsKit.Gui.Widget.prototype.hide = function()
{
    if( !this._firstTimeShow )
    {
        // get the style attribute
        var styleAttributeContent   = this._domNode.getAttribute( "style" );

        // modify the style to our needs
        var inlineStyle             = new JsKit.Css.Inline( styleAttributeContent )
            inlineStyle.setCssProperty( JsKit.Css.eClassification.Visibility, JsKit.Css.eVisibility.Hidden );

        // save the style back to the DOM node
        this._domNode.setAttribute( "style", inlineStyle.getAsString() );
    }

    this.render();
}

JsKit.Gui.Widget.prototype.render = function()
{
    if( !this._firstTimeShow )
        return;

    this.buildContent();
    this._domNode.setAttribute( "id", this._name     );
    this._domNode.setAttribute( "class", this._name  );

    var children        = this.getChildren();
    var childrenCount   = children.getLength();
    for( var index=0; index < childrenCount; index++ )
    {
        var child = children.getAt( index );
            child.render();

        if( child.getNode().isValid() )
            this.getNode().appendChild( child.getNode() );
    }

    this._firstTimeShow = false;
}


// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Overrides ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Gui.Widget.prototype.buildContent = function()
{
    // NOTE:
    //      This method needs to be implemented by the derived widgets.
    //      Here they will modify the "this._node" DOM node to their needs
}

JsKit.Gui.Widget.prototype.getChildren = function()
{
    // NOTE:
    //      This method needs to be implemented by the derived widgets if they have more than
    //      one layout managers
    
    return this.getLayoutManager().getChildren();
}
