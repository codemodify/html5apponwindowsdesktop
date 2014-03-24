
using System;
using System.Configuration;
using XemantiX.Crawler;
using XemantiX.Persistence;
using XemantiX.Persistence.Models;

namespace XemantiX.Instanciator.Crawler.Console
{
    class Program
    {
        static void Main( string[] args )
        {
            AppDomain.CurrentDomain.UnhandledException += AppUnhandledExceptions;

            var config = ConfigurationManager.GetSection( "XemantiX.Crawler.Config" ) as Config;

            var crawler = Activator.CreateInstance( config.Crawler, config.Instance ).Unwrap() as ICrawler;

            if( crawler != null )
            {
                var tycheDb = new TycheDbDataContext( config.SqlServerConnection );

                crawler.TycheDb = tycheDb;

                String infoMessage = String.Format( "Instantiating and running -> {0}", crawler.ToString() );

                System.Console.WriteLine( infoMessage );

                crawler.Start();
                crawler.Stop();
            }

            System.Console.WriteLine( "Done. Press Enter." );
            System.Console.ReadLine();
        }

        static void AppUnhandledExceptions( object o, UnhandledExceptionEventArgs e )
        {
            System.Console.WriteLine( "\n\n\nERROR:" );
            System.Console.WriteLine( ( e.ExceptionObject as Exception ).ToString() );
        }
    }
}
