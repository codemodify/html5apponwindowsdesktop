<%@ Page Language="C#" 
         AutoEventWireup="true" 
         CodeBehind="index.aspx.cs" 
         Inherits="XemantiX.TycheClient.Desktop.Services.Publisher.index" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

    <head runat="server">

        <title></title>

        <!-- ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
            Global
        ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ -->
        <style type='text/css'>
            html, body { overflow: hidden; }
        </style>
            
        <!-- ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
            SplashSreen
        ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ -->
        <link type="text/css" href="jquery.svg/jquery.svg.css" rel="stylesheet" />

        <!-- ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
            LoginScreen
        ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ -->
        <style type='text/css'>    
            .clear{
                clear:both;    
            }
            .box_container2{
                position:relative; /* important */
                width:100%; /* we must set a specific width of the container, so it doesn't strech when the image starts moving */
                height:100%; /* important */
                overflow:hidden;  /* hide the content that goes out of the div */
                /*just styling bellow*/
                color:white;
            }
            .images_holder2{
                width:100%; /* we must set a specific width of the container, so it doesn't strech when the image starts moving */
                height:100%; /* important */
            }
            .image_div2 {
                position:relative; /* important so we can work with the left or right indent */
                overflow:hidden; /* hide the content outside the div (this is how we will hide the part of the image) */
                width:50%; /* make it 50% of the whole images_holder */
                float:left; /* make then inline */
            }
            .right2 img{
                margin-left: -100%; /* 100% is in this case 50% of the image, so this is how we show the second part of the image */
            }
            
        </style>

        <style type='text/css'>
            .boxtext {
                margin:10px 3px;
                padding:8px;
                color:white;
                font-weight:bold;
                font-family:arial;
            }
            #login {
                cursor:pointer;
                background:#67A4ED;
                border:1px solid #3C75BA;
                margin:10px 3px;
                padding:8px;
                color:white;
                font-weight:bold;
            }
            #logout {
                cursor:pointer;
                background:#67A4ED;
                border:1px solid #3C75BA;
                margin:10px 3px;
                padding:8px;
                color:white;
                font-weight:bold;
            }
            input[type='text']{
                border:2px solid #3C75BA;
                padding:5px;
                width:300px;
                font-size:18px;
                color:#3C75BA;
            }
            #form {
               position:absolute;
               top:10px;
               left: 50%;
               margin-left: -225px;
               width: 450px;
               background:#569AEE;
               padding:16px;
               border:#3C75BA;
               text-align:center;
               display:none;
            }
        </style>

    </head>

    <body>

        <!-- ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
            System Area
        ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ -->
        <form id="TheScriptManagerForm" runat="server">
            <asp:ScriptManager ID="TheScriptManager" runat="server">
                <Services>
                    <asp:ServiceReference Path="~/Service.svc" />
                </Services>
                <Scripts>
                    <asp:ScriptReference Path="~/jquery.min.js" />

                    <asp:ScriptReference Path="~/jquery.svg/jquery.svg.js" />
                    <asp:ScriptReference Path="~/jquery.svg/jquery.svganim.js" />
                    <asp:ScriptReference Path="~/Controller/fireworks.svg.js" />

                    <asp:ScriptReference Path="~/Controller/easing.js" />

                    <asp:ScriptReference Path="~/jquery.flot.js" />

                    <asp:ScriptReference Path="~/Controller/Init.js" />
                    <asp:ScriptReference Path="~/Controller/SplashScreen.js" />
                    <asp:ScriptReference Path="~/Controller/LoginScreen.js" />
                    <asp:ScriptReference Path="~/Controller/WorkspaceScreen.js" />
                    <asp:ScriptReference Path="~/Controller/Main.js" />
                </Scripts>
            </asp:ScriptManager>
        </form>

        <!-- ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
            App's Entry Point
        ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ -->
        <script type="text/javascript">

            var entryPoint = new XemantiXS.TycheClient.Desktop.Main();
                entryPoint.Run();

        </script>

        <!-- ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~
            App's Entry Point
        ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ ~~~~ -->
        <div id="TheBodyTag"></div>

    </body>

</html>
