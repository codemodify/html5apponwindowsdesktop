
XemantiXS.TycheClient.Desktop.SplashScreen = function () { };
XemantiXS.TycheClient.Desktop.SplashScreen.Delegates = function () { };

XemantiXS.TycheClient.Desktop.SplashScreen.Delegates.OnSplashAnimationEndedDelegate = function ()
{
    var loginScreen = new XemantiXS.TycheClient.Desktop.LoginScreen();
        loginScreen.Show();
};

XemantiXS.TycheClient.Desktop.SplashScreen.prototype =
{
    Show: function ()
    {
        jQuery.get( "View/SplashScreen.html", function (data)
        {
            $( "#" + XemantiXS.Globals.BodyTag ).html(data);

            FireworkDisplay.TextToDisplay = "Tyche Demo ----------- XemantiX TechLab";
            FireworkDisplay.canvaswidth = $("#SplashScreen").width();
            FireworkDisplay.canvasheight = $("#SplashScreen").height();

            FireworkDisplay.OnAnimationEnded = XemantiXS.TycheClient.Desktop.SplashScreen.Delegates.OnSplashAnimationEndedDelegate;

            FireworkDisplay.launchText();
        });
    }
};
