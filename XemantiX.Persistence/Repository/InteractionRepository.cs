using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using XemantiX.Persistence.Models;

namespace XemantiX.Persistence
{
    public partial class Repository
    {
        public List<interaction> GetAllInteractions()
        {
            return dc.interactions.ToList();
        }

        public List<interaction> GetLatestInteractions()
        {
            return dc.interactions.OrderByDescending(x => x.time).Take(10).ToList();
        }

        public interaction GetInteraction(int id)
        {
            return dc.interactions.Where(x => x.id == id).FirstOrDefault();
        }

        public List<interaction> GetUnprocessedInteractions(InteractionProcessedAction action)
        {
            int lastId = GetLastInteractionProcessed(action);
            return dc.interactions.Where(x => x.id > lastId).ToList();
        }

        public int GetLastInteractionProcessed(InteractionProcessedAction action)
        {
            last_interaction_processed last = dc.last_interaction_processeds.Where(x => x.action == action.ToString()).FirstOrDefault();

            if (last != null && last.interaction_id.HasValue)
                return last.interaction_id.Value;

            return 0;
        }

        public void UpdateLastInteractionProcessed(int interactionId, InteractionProcessedAction action)
        {
            last_interaction_processed last = dc.last_interaction_processeds.Where(x => x.action == action.ToString()).FirstOrDefault();

            if (last != null)
            {
                last.interaction_id = interactionId;
                Save();
            }
        }
    }
}
