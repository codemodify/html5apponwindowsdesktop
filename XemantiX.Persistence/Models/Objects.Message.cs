using System;

namespace XemantiX.Persistence.Objects
{
    public class Message
    {
        public String Content { get; set; }
        public Location Location { get; set; }
        public DateTime Time { get; set; }
        public User User { get; set; }
    }
}
