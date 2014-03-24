
using System;
using System.Threading.Tasks;
using XemantiX.Persistence;
using XemantiX.Persistence.Models;

namespace XemantiX.Crawler
{
    public abstract class AbstractCrawler : ICrawler
    {
        private Task _task;

        public TycheDbDataContext TycheDb { get; set; }

        public virtual void Start()
        {
            _task = Task.Factory.StartNew( Crawl );
        }

        public abstract void Crawl();

        public virtual void Stop()
        {
            _task.Wait();
        }

        #region ICrawler Members

        public void StartCrawl()
        {
            throw new NotImplementedException();
        }

        public void StartCrawl(string searchKey)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}
