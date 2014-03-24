using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Text;
using System.Threading;
using System.Xml.Linq;
using XemantiX.Persistence;
using System.Data;
using XemantiX.Persistence.Models;

namespace XemantiX.SemanticProcessor
{
    public class Common
    {
        public static List<interaction> LoadDBData(Repository tycheRepo, InteractionProcessedAction action)
        {
            return tycheRepo.GetUnprocessedInteractions(action);
        }

        public static void ExtractKeywords(int tweetId, string text, Repository tycheRepo)
        {
            AlchemyAPI.AlchemyAPI alchemyObj = new AlchemyAPI.AlchemyAPI();
            alchemyObj.SetAPIKey(ConfigurationManager.AppSettings["AlchemyAPIKey"]);

            string xml;
            XDocument xdoc;

            try
            {
                xml = alchemyObj.TextGetRankedKeywords(text);
            }
            catch
            {
                xml = "";
            }

            if (xml != "")
            {
                xdoc = XDocument.Load(new StringReader(xml));
                foreach (XElement e in xdoc.Descendants("keyword"))
                {
                    interaction_keyword keyword = new interaction_keyword();
                    keyword.interaction_id = tweetId;
                    keyword.keyword = e.Element("text").Value;
                    keyword.keyword_count = 1;
                    keyword.keyword_relevance = decimal.Parse(e.Element("relevance").Value);
                    keyword.keyword_sentiment = e.Element("sentiment").Element("type").Value;
                    if (e.Element("sentiment").Element("score") != null)
                        keyword.keyword_sentiment_score = decimal.Parse(e.Element("sentiment").Element("score").Value);
                    else
                        keyword.keyword_sentiment_score = 0;
                    tycheRepo.Add(keyword);
                }

                tycheRepo.UpdateLastInteractionProcessed(tweetId, InteractionProcessedAction.Keyword);

                tycheRepo.Save();

                Thread.Sleep(12);
            }
        }

        public static void ExtractKeywordsFromUrl(interaction_url interaction_url, string url, Repository tycheRepo)
        {
            AlchemyAPI.AlchemyAPI alchemyObj = new AlchemyAPI.AlchemyAPI();
            alchemyObj.SetAPIKey(ConfigurationManager.AppSettings["AlchemyAPIKey"]);

            string xml;
            XDocument xdoc;

            try
            {
                xml = alchemyObj.URLGetRankedKeywords(url);
            }
            catch
            {
                xml = "";
            }

            if (xml != "")
            {
                xdoc = XDocument.Load(new StringReader(xml));
                foreach (XElement e in xdoc.Descendants("keyword"))
                {
                    interaction_url_keyword keyword = new interaction_url_keyword();
                    keyword.interaction_url_id = interaction_url.id;
                    keyword.keyword = e.Element("text").Value;
                    keyword.keyword_count = 1;
                    keyword.keyword_relevance = decimal.Parse(e.Element("relevance").Value);
                    keyword.keyword_sentiment = e.Element("sentiment").Element("type").Value;
                    if (e.Element("sentiment").Element("score") != null)
                        keyword.keyword_sentiment_score = decimal.Parse(e.Element("sentiment").Element("score").Value);
                    else
                        keyword.keyword_sentiment_score = 0;
                    tycheRepo.Add(keyword);
                }

                tycheRepo.Save();

                Thread.Sleep(12);
            }
        }

        public static void ExtractEntities(int tweetId, string text, Repository tycheRepo)
        {
            AlchemyAPI.AlchemyAPI alchemyObj = new AlchemyAPI.AlchemyAPI();
            alchemyObj.SetAPIKey(ConfigurationManager.AppSettings["AlchemyAPIKey"]);

            string xml;
            XDocument xdoc;

            try
            {
                xml = alchemyObj.TextGetRankedNamedEntities(text);
            }
            catch
            {
                xml = "";
            }

            if (xml != "")
            {
                xdoc = XDocument.Load(new StringReader(xml));
                foreach (XElement e in xdoc.Descendants("entity"))
                {
                    interaction_entity entity = new interaction_entity();
                    entity.interaction_id = tweetId;
                    entity.entity = e.Element("text").Value;
                    entity.entity_count = int.Parse(e.Element("count").Value);
                    entity.entity_relevance = decimal.Parse(e.Element("relevance").Value);
                    entity.entity_sentiment = e.Element("sentiment").Element("type").Value;
                    if (e.Element("sentiment").Element("score") != null)
                        entity.entity_sentiment_score = decimal.Parse(e.Element("sentiment").Element("score").Value);
                    else
                        entity.entity_sentiment_score = 0;
                    tycheRepo.Add(entity);
                }

                tycheRepo.UpdateLastInteractionProcessed(tweetId, InteractionProcessedAction.Entity);

                tycheRepo.Save();

                Thread.Sleep(12);
            }
        }

        public static void ExtractEntitiesFromUrl(interaction_url interaction_url, string url, Repository tycheRepo)
        {
            AlchemyAPI.AlchemyAPI alchemyObj = new AlchemyAPI.AlchemyAPI();
            alchemyObj.SetAPIKey(ConfigurationManager.AppSettings["AlchemyAPIKey"]);

            string xml;
            XDocument xdoc;

            try
            {
                xml = alchemyObj.URLGetRankedNamedEntities(url);
            }
            catch
            {
                xml = "";
            }

            if (xml != "")
            {
                xdoc = XDocument.Load(new StringReader(xml));
                foreach (XElement e in xdoc.Descendants("entity"))
                {
                    interaction_url_entity entity = new interaction_url_entity();
                    entity.interaction_url_id = interaction_url.id;
                    entity.entity = e.Element("text").Value;
                    entity.entity_count = int.Parse(e.Element("count").Value);
                    entity.entity_relevance = decimal.Parse(e.Element("relevance").Value);
                    entity.entity_sentiment = e.Element("sentiment").Element("type").Value;
                    if (e.Element("sentiment").Element("score") != null)
                        entity.entity_sentiment_score = decimal.Parse(e.Element("sentiment").Element("score").Value);
                    else
                        entity.entity_sentiment_score = 0;
                    tycheRepo.Add(entity);
                }

                tycheRepo.Save();

                Thread.Sleep(12);
            }
        }
    }
}
