
JsKit.Core.Thread = function()
{
    this._threadId      = null;
    this._threadCode    = null;
    this._isRunning     = null;
}

JsKit.Core.Thread.prototype.setThreadedCode = function( threadCode ){           this._threadCode = threadCode;                                  }
JsKit.Core.Thread.prototype.start           = function()            {           this._threadId  = setInterval( this._threadCode, 0 );
                                                                                this._isRunning = true;                                         }
JsKit.Core.Thread.prototype.stop            = function( value )     {           this.clearInterval( this._threadId ); this._isRunning = false;  }
JsKit.Core.Thread.prototype.isRunning       = function()            { return    this._isRunning;                                                }
