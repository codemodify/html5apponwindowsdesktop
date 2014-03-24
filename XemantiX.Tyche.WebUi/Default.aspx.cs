using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using XemantiX.Manager;

namespace XemantiX.Tyche.WebUi
{
    public partial class _Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataManager manager = new DataManager();
            List<InteractionInfo> info = manager.GetLatestInteractions();

            string javascript = "function InitInteractions() {";
            if (info != null)
            {
                foreach (InteractionInfo interactionInfo in info)
                {
                    javascript += "AddInteraction(" + info.IndexOf(interactionInfo) + ", '" + interactionInfo.FromUser + "', '" + interactionInfo.Text.Replace("'", "") + "');";
                }
            }
            javascript += "}";
            javascript += "InitInteractions();";

            ScriptManager.RegisterStartupScript(this, this.GetType(), "InitInteractionScript", javascript, true);
        }
    }
}
