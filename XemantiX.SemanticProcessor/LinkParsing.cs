using System;
using System.Text.RegularExpressions;
using XemantiX.Persistence;
using System.Collections.Generic;
using XemantiX.Persistence.Models;

namespace XemantiX.SemanticProcessor
{
    public class LinkParsing : AbstractSemanticProcessor
    {
        public override void Process()
        {
            List<interaction> tweets = Common.LoadDBData(TycheRepository, InteractionProcessedAction.Url);
            ParseLinks(tweets);
        }

        public void ParseLinks(List<interaction> tweets)
        {
            for (int i = 0; i < tweets.Count; i++)
            {
                string tweet = tweets[i].content_id;

                if (tweet.Length == 0)
                {
                    continue;
                }
                MatchCollection mc = Regex.Matches(tweet, @"(www[^ \s]+|http[^ \s]+)([\s]|$)", RegexOptions.IgnoreCase);
                for (int j = 0; j < mc.Count; j++)
                {
                    string url = mc[j].Value;

                    interaction_url interactionUrl = new interaction_url();
                    interactionUrl.interaction_id = tweets[i].id;
                    interactionUrl.url = url;
                    TycheRepository.Add(interactionUrl);

                    TycheRepository.Save();

                    #region Keyword extraction
                    Common.ExtractKeywordsFromUrl(interactionUrl, url, TycheRepository);
                    #endregion

                    #region Entity extraction
                    Common.ExtractEntitiesFromUrl(interactionUrl, url, TycheRepository);
                    #endregion

                    TycheRepository.UpdateLastInteractionProcessed(tweets[i].id, InteractionProcessedAction.Url);

                    TycheRepository.Save();
                }
            }
        }
    }
}
