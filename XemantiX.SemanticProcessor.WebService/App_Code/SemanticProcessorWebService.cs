using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Configuration;
using XemantiX.SemanticProcessor;
using XemantiX.Persistence;

[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
// [System.Web.Script.Services.ScriptService]

public class SemanticProcessorWebService : System.Web.Services.WebService
{
    public SemanticProcessorWebService () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    public void Process()
    {
        var tycheDBCN = ConfigurationManager.ConnectionStrings["TycheDB"];

        #region Keyword extraction
        RunProcessor(tycheDBCN, new KeywordExtraction());
        #endregion

        #region Entity extraction
        RunProcessor(tycheDBCN, new EntityExtraction());
        #endregion

        #region Url process
        RunProcessor(tycheDBCN, new LinkParsing());
        #endregion
    }

    private static void RunProcessor(ConnectionStringSettings tycheDBCN, ISemanticProcessor processor)
    {
        if (processor != null)
        {
            var tycheRepo = new Repository(tycheDBCN.ConnectionString);

            processor.TycheRepository = tycheRepo;

            processor.Start();
            processor.Stop();
        }
    }
}