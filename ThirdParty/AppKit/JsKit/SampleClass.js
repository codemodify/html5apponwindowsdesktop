
/*****************************************************************************
*
*   This file demonstrates a standart way to declare a class 
*   within the "JsKit Framework".
*
******************************************************************************/


// declare the class
SampleClass = function()
{
	// variables
    this._sampleVariabel1 = 0;
    this._sampleVariabel2 = 0.01;
    this._sampleVariabel3 = "";
    this._sampleVariabel4 = false;
}

// show that this class inherits some other class
SampleClass.prototype = new JsKit.Gui.Widget();

// add methods to the class
SampleClass.prototype.saySomething = function()
{
    aboutJsKit();
}
