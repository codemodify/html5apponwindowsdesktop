
### What is it
A POC of how to build & deploy HTML5 apps on windows desktop.

### Architecture
![](https://raw.github.com/ukoreh/html5apponwindowsdesktop/master/diagram.png)

### In simple words
The idea behind this technique is to achieve for a windows desktop 
application an UI rendered by the HTML5 +CSS3 and allow the business 
logic to be written in high performance an high efficiency language as C#.
As a minimal requirement this development model for this kind of applications 
must have a MVC at its core to ease thing in long term. Thus the Controller is 
the JS part that serves as a bridge between the Model  (C#) and the View (HTML5+CSS3). 
The model and its data is exposed as DataContracts to the JS by passing through 
the Scripting Factories existing in .NET. All is possible in a desktop app because 
in .NET exists the System.Web.Hosting namespace. The same namespace will eventually 
allow to replace the current IIS Express based implementation to serve WCF services to the JS.
