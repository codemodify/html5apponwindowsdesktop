
using XemantiX.Persistence;
using XemantiX.Persistence.Models;

namespace XemantiX.Crawler
{
    public interface ICrawler
    {
        TycheDbDataContext TycheDb { get; set; }

        void Start();
        void Stop();
    }
}
