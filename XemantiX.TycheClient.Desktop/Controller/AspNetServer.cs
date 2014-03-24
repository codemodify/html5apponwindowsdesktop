using System;
using System.Diagnostics;
using System.IO;
using Logging;

namespace XemantiX.TycheClient.Desktop.Controller
{
    public class AspNetServer
    {
        public String Url
        {
            get { return String.Format( "http://localhost:{0}/index.aspx", Port ); }
            private set { }
        }

        public int Port
        {
            get{ return 50000; }
            private set { }
        }

        private Process _process;

        #region AspNetServer()

        public AspNetServer()
        {
            try
            {
                var appDirectory = AppDomain.CurrentDomain.BaseDirectory;
                    appDirectory = appDirectory.Remove( appDirectory.Length-1, 1 );

                var serverDirectory = Path.Combine( appDirectory, "Publisher" );

                _process = new Process();
                _process.StartInfo.WorkingDirectory = serverDirectory;
                _process.StartInfo.FileName = Path.Combine( serverDirectory, "iisexpress.exe" );
                _process.StartInfo.Arguments = String.Format( "/port:{0} /path:\"{1}\" /vpath:\"/\" /systray:false", Port, appDirectory );
                
                _process.StartInfo.UseShellExecute = true;
                _process.StartInfo.CreateNoWindow = true;
                _process.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
                //_process.StartInfo.RedirectStandardInput = true;
                //_process.StartInfo.RedirectStandardError = true;
                //_process.StartInfo.RedirectStandardOutput = true;
                //_process.ErrorDataReceived += new DataReceivedEventHandler( ErrorDataReceived );
                //_process.OutputDataReceived += new DataReceivedEventHandler( OutputDataReceived );
                
                _process.Start();
            }
            catch( Exception ex )
            {
                LogManager.GetLogger().LogError( ex.ToString() );
            }
        }

        void OutputDataReceived( object sender, DataReceivedEventArgs e )
        {
            LogManager.GetLogger().LogInfo( e.Data );
        }

        void ErrorDataReceived( object sender, DataReceivedEventArgs e )
        {
            LogManager.GetLogger().LogError( e.Data );
        }

        #endregion

        #region Stop()

        public void Stop()
        {
            //_process.StandardInput.Write( 'q' );
            _process.WaitForExit( 1000 );
            _process.Kill();
        }

        #endregion
    }
}
