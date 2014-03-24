using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using LinqToTwitter;
using XemantiX.Persistence;
using XemantiX.Persistence.Models;

namespace XemantiX.Crawler.TwitterSearch
{
    public class TwitterSearchCrawler : AbstractCrawler
    {
        public override void Crawl()
        {
            var auth = new SingleUserAuthorizer
            {
                Credentials = new InMemoryCredentials
                {
                    ConsumerKey = "Wdgc9WuxVoSVkkCRTqE71g",
                    ConsumerSecret = "wnSFdRxMDyTZjqGAmFTwPrAfGrsXhodmaqvDMnYiQU",
                    OAuthToken = "376303850-aqtCGosnGAiTXu6xVQ8YauYMY4s1eCfWLzZv5aUg",
                    AccessToken = "lUvnHtIoO7ERBBbuGupSuQsKbb6Dn9KGrS0T7pj1xXk"
                }
            };

            using (var twitterCtx = new TwitterContext(auth, "https://api.twitter.com/1/", "https://search.twitter.com/"))
            {
                //Log
                twitterCtx.Log = Console.Out;

                TycheDbDataContext db = this.TycheDb;

                SearchTwitter.Run(twitterCtx, db);
            }
        }
    }
}
