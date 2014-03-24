using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;

namespace XemantiX.TycheClient.Desktop.Controller
{
    static class Program
    {
        static AspNetServer _aspNetServer;


        [STAThread]
        static void Main()
        {
            _aspNetServer = new AspNetServer();

            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault( false );

            var ui = new View.Ui( _aspNetServer.Url );
                ui.FormClosing += FormClosing;

            Application.Run( ui );
        }

        static void FormClosing( object sender, FormClosingEventArgs e )
        {
            _aspNetServer.Stop();
        }
    }
}
