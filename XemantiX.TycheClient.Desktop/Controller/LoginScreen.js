
XemantiXS.TycheClient.Desktop.LoginScreen = function () { };
XemantiXS.TycheClient.Desktop.LoginScreen.Delegates = function () { };
XemantiXS.TycheClient.Desktop.LoginScreen.Helpers = function () { };

XemantiXS.TycheClient.Desktop.LoginScreen.Helpers.AnimateLogin = function( miliseconds )
{
    var width = $('.box_container2').outerWidth() / 2;

    $('.box_container2').find('.left2').animate({ right: width }, { easing: 'easeOutBounce', queue: false, duration: miliseconds });
    $('.box_container2').find('.right2').animate({ left: width }, { easing: 'easeOutBounce', queue: false, duration: miliseconds });
};

XemantiXS.TycheClient.Desktop.LoginScreen.Helpers.AnimateLogout = function( miliseconds )
{
    $('.box_container2').find('.left2').animate({ right: 0 }, { easing: 'easeOutBounce', queue: false, duration: miliseconds });
    $('.box_container2').find('.right2').animate({ left: 0 }, { easing: 'easeOutBounce', queue: false, duration: miliseconds });
};

XemantiXS.TycheClient.Desktop.LoginScreen.Delegates.LoginOk = function (data, args)
{
    XemantiXS.TycheClient.Desktop.LoginScreen.Helpers.AnimateLogin( 1000 );

    $('#form').fadeOut('fast');

    XemantiXS.Globals.UserGreetingName = data.FirstName + " " + data.LastName;

    setTimeout(function ()
    {
        var workspaceScreen = new XemantiXS.TycheClient.Desktop.WorkspaceScreen();
            workspaceScreen.Show();
    }, 1050);
};
    
XemantiXS.TycheClient.Desktop.LoginScreen.Delegates.LogiNotOk = function ( serviceCallError, args )
{
    // FIXME: log this 
    alert(serviceCallError._message);
};

XemantiXS.TycheClient.Desktop.LoginScreen.Delegates.OnLoginDelegate = function ()
{
    var user = $("#user").val();
    var password = "demo";

    xemantixservices.iservice.Login
    (
        user,
        password,
        XemantiXS.TycheClient.Desktop.LoginScreen.Delegates.LoginOk,
        XemantiXS.TycheClient.Desktop.LoginScreen.Delegates.LogiNotOk
    );
};

XemantiXS.TycheClient.Desktop.LoginScreen.prototype =
{
    Show: function (isLogout)
    {
        jQuery.get("View/LoginScreen.html", function (data)
        {
            $("#" + XemantiXS.Globals.BodyTag).html(data);

            $('#login').click(XemantiXS.TycheClient.Desktop.LoginScreen.Delegates.OnLoginDelegate);

            if (isLogout)
            {
                XemantiXS.TycheClient.Desktop.LoginScreen.Helpers.AnimateLogin( 0 );
                setTimeout(function ()
                {
                    XemantiXS.TycheClient.Desktop.LoginScreen.Helpers.AnimateLogout( 1000 );
                }, 50);
            }

            $('#form').fadeIn(2000);
        });
    }
};
