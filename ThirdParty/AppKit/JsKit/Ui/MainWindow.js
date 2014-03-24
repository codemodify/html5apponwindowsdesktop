
JsKit.Gui.MainWindow = function()
{
    this._name = "JsKit.Gui.MainWindow";
}

JsKit.Gui.MainWindow.prototype = new JsKit.Gui.Widget();

JsKit.Gui.MainWindow.prototype.setTitle = function( title )
{
    document.title = title;
}

JsKit.Gui.MainWindow.prototype.setTopAreaLayoutManager      = function( layoutManager ){ this._topLayoutManager     = layoutManager; }
JsKit.Gui.MainWindow.prototype.setBottomAreaLayoutManager   = function( layoutManager ){ this._bottomLayoutManager  = layoutManager; }
JsKit.Gui.MainWindow.prototype.setCentralAreaLayoutManager  = function( layoutManager ){ this._layoutManager        = layoutManager; }
JsKit.Gui.MainWindow.prototype.setLeftAreaLayoutManager     = function( layoutManager ){ this._leftLayoutManager    = layoutManager; }
JsKit.Gui.MainWindow.prototype.setRightAreaLayoutManager    = function( layoutManager ){ this._rightLayoutManager   = layoutManager; }
JsKit.Gui.MainWindow.prototype.setDefaultLayoutManagers     = function()
{
    this._topLayoutManager      = new JsKit.Gui.HorizontalLayoutManager();
    this._bottomLayoutManager   = new JsKit.Gui.HorizontalLayoutManager();
    this._layoutManager         = new JsKit.Gui.HorizontalLayoutManager();
    this._leftLayoutManager     = new JsKit.Gui.VerticalLayoutManager();
    this._rightLayoutManager    = new JsKit.Gui.VerticalLayoutManager();
}

JsKit.Gui.MainWindow.prototype.getTopArea       = function(){ return this._topLayoutManager;    }
JsKit.Gui.MainWindow.prototype.getBottomArea    = function(){ return this._bottomLayoutManager; }
JsKit.Gui.MainWindow.prototype.getCentralArea   = function(){ return this._layoutManager;       }
JsKit.Gui.MainWindow.prototype.getLeftArea      = function(){ return this._leftLayoutManager;   }
JsKit.Gui.MainWindow.prototype.getRightArea     = function(){ return this._rightLayoutManager;  }


// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- Overrides ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
JsKit.Gui.MainWindow.prototype.buildContent = function()
{
    // touch the DOM
    var mainWindowTag = "/html/body/div";

    JsKit.Dom.createNodeByPath( mainWindowTag );

    this._domNode = new JsKit.Dom.Node( mainWindowTag );
}

JsKit.Gui.MainWindow.prototype.getChildren = function()
{
    var childrenList = new JsKit.Core.List();

    if( this._topLayoutManager.getChildren().getLength() )
        childrenList.appendList( this._topLayoutManager.getChildren() );

    if( this._bottomLayoutManager.getChildren().getLength() )
        childrenList.appendList( this._bottomLayoutManager.getChildren() );
        
    if( this._layoutManager.getChildren().getLength() )
        childrenList.appendList( this._layoutManager.getChildren() );
        
    if( this._leftLayoutManager.getChildren().getLength() )
        childrenList.appendList( this._leftLayoutManager.getChildren() );
        
    if( this._rightLayoutManager.getChildren().getLength() )
        childrenList.appendList( this._rightLayoutManager.getChildren() );

    return childrenList;
}
