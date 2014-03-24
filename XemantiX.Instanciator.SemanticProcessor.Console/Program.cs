using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using XemantiX.Instanciator.SemanticProcessor.Console.SemanticProcessorWebService;

namespace Instanciator.SemanticProcessor.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Start");
            AppDomain.CurrentDomain.UnhandledException += AppUnhandledExceptions;
            SemanticProcessorWebServiceSoapClient client = new SemanticProcessorWebServiceSoapClient();
            client.Process();

            System.Console.WriteLine("Done. Press Enter.");
            System.Console.ReadLine();
        }

        static void AppUnhandledExceptions(object o, UnhandledExceptionEventArgs e)
        {
            System.Console.WriteLine("\n\n\nERROR:");
            System.Console.WriteLine((e.ExceptionObject as Exception).ToString());
        }
    }
}
