using System;

namespace XemantiX.Persistence
{
    public class Location
    {
        public bool GeoEnabled { get; set; }
        public String Name { get; set; }

        public bool GpsEnabled { get; set; }
        public int X { get; set; }
        public int Y { get; set; }

        public String Univers { get; set; }
        public String Galaxy { get; set; }
        public String Planet { get; set; }
        public String Continent { get; set; }
        public String Country { get; set; }
        public String City { get; set; }
        public String Street { get; set; }
        public String Number { get; set; }
    }
}
