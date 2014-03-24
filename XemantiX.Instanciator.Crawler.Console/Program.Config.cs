
using System;
using System.Configuration;

namespace XemantiX.Instanciator.Crawler.Console
{
    public class Config : ConfigurationSection
    {
        [ConfigurationProperty( "crawler", IsRequired = true )]
        public String Crawler
        {
            get
            {
                return (String) base[ "crawler" ];
            }
        }

        [ConfigurationProperty( "instance", IsRequired = true )]
        public String Instance
        {
            get
            {
                return (String) base[ "instance" ];
            }
        }

        [ConfigurationProperty( "sqlServerConnection", IsRequired = true )]
        public String SqlServerConnection
        {
            get
            {
                return (String) base[ "sqlServerConnection" ];
            }
        }
    }
}
