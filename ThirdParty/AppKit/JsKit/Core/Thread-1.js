
Thread = function () {};
Thread.prototype = 
{
    setThreadedCode: function( threadCode )
    {
    	this._threadCode = threadCode;
    },
    
    start: function()
    {
		this._threadId = setInterval( this._threadCode, 100 );
		this._isRunning = true;
    },
    
    stop: function( value )
    {
        clearInterval( this._threadId );
		this._isRunning = false;
    },
	
	isRunning: function()
	{
		return this._isRunning;
	},
	
	// private data
    _threadId:		null,
	_threadCode:	null,
	_isRunning:	    false
};
