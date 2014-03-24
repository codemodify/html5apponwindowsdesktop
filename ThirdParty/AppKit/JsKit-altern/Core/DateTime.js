
JsKit.Core.DateTime = function() {};
JsKit.Core.DateTime.prototype = 
{
	// public interface
	getDateTime: function(){ return new Date(); },
	
	getYear:	function(){ return this.getDateTime().getFullYear();	},
	getMonth:	function(){ return this.getDateTime().getMonth();	},
	getDate:	function(){ return this.getDateTime().getDate();	},
	getDay:		function(){ return this.getDateTime().getDay();		},
	getHour:	function(){ return this.getDateTime().getHours();	},
	getMinutes:	function(){ return this.getDateTime().getMinutes();	},
	getSeconds:	function(){ return this.getDateTime().getSeconds();	},

	getTimeInMiliscondsFromThe_1970_01_01: function(){ return this.getDateTime().getTime(); },

	toLocalAsString:	function(){ return this.getDateTime().toLocaleString(); },
	toGmtAsString:	function(){ return this.getDateTime().toGMTString(); }
};
