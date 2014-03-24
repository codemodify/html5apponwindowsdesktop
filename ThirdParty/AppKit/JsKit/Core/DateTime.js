
JsKit.Core.DateTime = function()
{}

JsKit.Core.DateTime.prototype.getDateTime                           = function(){ return new Date();                            }
JsKit.Core.DateTime.prototype.getYear                               = function(){ return this.getDateTime().getFullYear();      }
JsKit.Core.DateTime.prototype.getMonth                              = function(){ return this.getDateTime().getMonth();         }
JsKit.Core.DateTime.prototype.getDate                               = function(){ return this.getDateTime().getDate();          }
JsKit.Core.DateTime.prototype.getDay                                = function(){ return this.getDateTime().getDay();           }
JsKit.Core.DateTime.prototype.getHour                               = function(){ return this.getDateTime().getHours();         }
JsKit.Core.DateTime.prototype.getMinutes                            = function(){ return this.getDateTime().getMinutes();       }
JsKit.Core.DateTime.prototype.getSeconds                            = function(){ return this.getDateTime().getSeconds();       }
JsKit.Core.DateTime.prototype.getTimeInMiliscondsFromThe_1970_01_01 = function(){ return this.getDateTime().getTime();          }
JsKit.Core.DateTime.prototype.toLocalAsString                       = function(){ return this.getDateTime().toLocaleString();   }
JsKit.Core.DateTime.prototype.toGmtAsString                         = function(){ return this.getDateTime().toGMTString();      }
