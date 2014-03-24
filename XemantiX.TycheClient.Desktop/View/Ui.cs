using System;
using System.Windows.Forms;

namespace XemantiX.TycheClient.Desktop.View
{
    public partial class Ui : Form
    {
        String _url;

        public Ui( String url )
        {
            _url = url;
            
            InitializeComponent();
        }

        private void Ui_Load( object sender, EventArgs e )
        {
            webBrowser.Navigate( _url );
        }
    }
}
