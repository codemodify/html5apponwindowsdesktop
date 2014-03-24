
JsKit.Core.Thread = function () {};
JsKit.Core.Thread.prototype = 
{
	// public interfaces
    setThreadedCode: function( threadCode )
    {
    	_threadCode = threadCode;
    },
    
    start: function()
    {
		_threadId = setInterval( _threadCode, 0 );
		_isRunning = true;
    },
    
    stop: function( value )
    {
        clearInterval( _threadId );
		_isRunning = false;
    },
	
	isRunning: function()
	{
		return _isRunning;
	},
	
	// private data
    _threadId:		null,
	_threadCode:	null,
	_isRunning:		null
};
