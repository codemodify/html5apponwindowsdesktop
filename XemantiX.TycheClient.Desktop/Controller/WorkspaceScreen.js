
XemantiXS.TycheClient.Desktop.WorkspaceScreen = function () { };
XemantiXS.TycheClient.Desktop.WorkspaceScreen.Delegates = function () { };

XemantiXS.TycheClient.Desktop.WorkspaceScreen.Delegates.LoginOk = function (data, args)
{
    var width = $('.box_container2').outerWidth() / 2;

    $('.box_container2').find('.left2').animate({ right: width }, { easing: 'easeOutBounce', queue: false, duration: 1000 });
    $('.box_container2').find('.right2').animate({ left: width }, { easing: 'easeOutBounce', queue: false, duration: 1000 });

    $('#form').fadeOut('fast');

    XemantiXS.Globals.UserGreetingName = data.FirstName + " " + data.LastName;
};

XemantiXS.TycheClient.Desktop.WorkspaceScreen.Delegates.LogiNotOk = function (serviceCallError, args)
{
    // FIXME: log this 
    alert(serviceCallError._message);
};

XemantiXS.TycheClient.Desktop.WorkspaceScreen.Delegates.OnLogoutDelegate = function ()
{
    var loginScreen = new XemantiXS.TycheClient.Desktop.LoginScreen();
        loginScreen.Show( true );
};

XemantiXS.TycheClient.Desktop.WorkspaceScreen.prototype =
{
    Show: function ()
    {
        jQuery.get("View/WorkspaceScreen.html", function (data)
        {
            $("#" + XemantiXS.Globals.BodyTag).html(data);

            $('#logout').click(XemantiXS.TycheClient.Desktop.WorkspaceScreen.Delegates.OnLogoutDelegate);
            $('#userName').html("Welcome: " + XemantiXS.Globals.UserGreetingName);
        });
    }
};
