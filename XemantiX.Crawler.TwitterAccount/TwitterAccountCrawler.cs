using System.Linq;
using LinqToTwitter;
using XemantiX.Persistence.Models;

namespace XemantiX.Crawler.TwitterAccount
{
    public class TwitterAccountCrawler : AbstractCrawler
    {
        public override void Crawl()
        {
            var twitterContext = new TwitterContext();

            var noAuthPublicTweets =
            (
                from tweet in twitterContext.Status
                where tweet.Type == StatusType.Public
                select tweet
            ).ToList();

            TycheDbDataContext db = this.TycheDb;

            noAuthPublicTweets.ForEach
            (
                tweet =>
                System.Console.WriteLine( "User: {0}\nTweet: {1}\n", tweet.User.Identifier.ScreenName, tweet.Text )
                //{
                //    XemantiX.Persistence.Interaction 
                //        interaction = new XemantiX.Persistence.Interaction();
                //        //interaction.Content // FIXME:
                //}
            );

        }
    }
}
