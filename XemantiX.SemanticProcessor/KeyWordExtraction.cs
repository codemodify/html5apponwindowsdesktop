using System.Collections.Generic;
using XemantiX.Persistence;
using XemantiX.Persistence.Models;

namespace XemantiX.SemanticProcessor
{
    public class KeywordExtraction : AbstractSemanticProcessor
    {
        public override void Process()
        {
            List<interaction> tweets = Common.LoadDBData(TycheRepository, InteractionProcessedAction.Keyword);
            ExtractKeywords(tweets);
        }

        public void ExtractKeywords(List<interaction> tweets)
        {
            for (int i = 0; i < tweets.Count; i++)
            {
                string tweet = tweets[i].content_id;

                if (tweet.Length == 0)
                {
                    continue;
                }

                Common.ExtractKeywords(tweets[i].id, tweet, TycheRepository);
            }
        }
    }
}
