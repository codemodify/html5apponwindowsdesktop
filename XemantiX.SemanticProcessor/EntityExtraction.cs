using XemantiX.Persistence;
using System.Collections.Generic;
using XemantiX.Persistence.Models;

namespace XemantiX.SemanticProcessor
{
    public class EntityExtraction : AbstractSemanticProcessor
    {
        public override void Process()
        {
            List<interaction> tweets = Common.LoadDBData(TycheRepository, InteractionProcessedAction.Entity);
            ExtractEntities(tweets);
        }

        public void ExtractEntities(List<interaction> tweets)
        {
            for (int i = 0; i < tweets.Count; i++)
            {
                string tweet = tweets[i].content_id;

                if (tweet.Length == 0)
                {
                    continue;
                }

                Common.ExtractEntities(tweets[i].id, tweet, TycheRepository);
            }
        }
    }
}
