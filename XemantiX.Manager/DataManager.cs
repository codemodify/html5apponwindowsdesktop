using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using XemantiX.Persistence.Models;
using System.Configuration;
using XemantiX.Persistence;

namespace XemantiX.Manager
{
    public class DataManager
    {
        #region Variables
        string tycheDBCN = ConfigurationManager.ConnectionStrings["TycheDB"].ConnectionString;
        #endregion

        #region Properties
        Repository repo;
        Repository TycheRepository
        {
            get
            {
                if (repo == null)
                    repo = new Repository(tycheDBCN);

                return repo;
            }
        }
        #endregion

        #region Methods
        public List<InteractionInfo> GetLatestInteractions()
        {
            List<InteractionInfo> interactionsInfo = new List<InteractionInfo>();

            List<interaction> interactions = TycheRepository.GetLatestInteractions();

            if (interactions != null)
            {
                foreach (interaction interact in interactions)
                {
                    InteractionInfo info = new InteractionInfo();
                    info.FromUser = "user1";
                    info.Text = interact.content_id;
                    interactionsInfo.Add(info);
                }
            }

            return interactionsInfo;
        }

        public List<EntityInfo> GetEntitiesInfo()
        {
            List<EntityInfo> entitiesInfo = new List<EntityInfo>();

            List<interaction_entity> entities = TycheRepository.GetAllEntities();
            List<interaction_url_entity> urlEntities = TycheRepository.GetAllUrlsEntities();

            if (entities != null)
            {
                foreach (interaction_entity entity in entities)
                {
                    EntityInfo entityInfo = entitiesInfo.Where(x => x.Name == entity.entity).FirstOrDefault();
                    if (entityInfo == null)
                    {
                        EntityInfo info = new EntityInfo();
                        info.Name = entity.entity;
                        info.SentimentScore = entity.entity_sentiment_score.HasValue ? entity.entity_sentiment_score.Value : 0;
                        info.Relevance = entity.entity_relevance.HasValue ? entity.entity_relevance.Value : 0;
                        entitiesInfo.Add(info);
                    }
                    else
                    {
                        if (entity.entity_sentiment_score.HasValue)
                            entityInfo.SentimentScore = (entityInfo.SentimentScore + entity.entity_sentiment_score.Value) / 2;

                        if (entity.entity_relevance.HasValue)
                            entityInfo.Relevance = (entityInfo.Relevance + entity.entity_relevance.Value) / 2;
                    }
                }
            }

            if (urlEntities != null)
            {
                foreach (interaction_url_entity urlEntity in urlEntities)
                {
                    EntityInfo entityInfo = entitiesInfo.Where(x => x.Name == urlEntity.entity).FirstOrDefault();
                    if (entityInfo == null)
                    {

                        EntityInfo info = new EntityInfo();
                        info.Name = urlEntity.entity;
                        info.SentimentScore = urlEntity.entity_sentiment_score.HasValue ? urlEntity.entity_sentiment_score.Value : 0;
                        info.Relevance = urlEntity.entity_relevance.HasValue ? urlEntity.entity_relevance.Value : 0;
                        entitiesInfo.Add(info);
                    }
                    else
                    {
                        if (urlEntity.entity_sentiment_score.HasValue)
                            entityInfo.SentimentScore = (entityInfo.SentimentScore + urlEntity.entity_sentiment_score.Value) / 2;

                        if (urlEntity.entity_relevance.HasValue)
                            entityInfo.Relevance = (entityInfo.Relevance + urlEntity.entity_relevance.Value) / 2;
                    }
                }
            }

            return entitiesInfo;
        }
        #endregion
    }
}
