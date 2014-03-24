using System;

namespace XemantiX.Persistence.Objects
{
    public class User
    {
        public String Id { get; set; }
        public String FirstName { get; set; }
        public String SecondName { get; set; }
        public String Email { get; set; }
        public int Age { get; set; }
        public Location Location { get; set; }

        #region User rating related input data

        //                                                    Twitter Analogs as Example
        public int      FriendsCount            { get; set; } // friends_count
        public int      FollowersCount          { get; set; } // followers_count
        public int      FollowingCount          { get; set; } // follow_request_sent
        public int      FavouritesCount         { get; set; } // favourites_count
        public int      ReferencedCount         { get; set; } // listed_count
        public int      SharedMessagesCount     { get; set; } // statuses_count
        public DateTime AccountCreationDate     { get; set; } // created_at
        public String   SelfDescription         { get; set; } // description
        public String   PhotoUrl                { get; set; } // profile_image_url
        public String   HomePage                { get; set; } // url
        public String   Language                { get; set; } // lang
        public bool     Verified                { get; set; } // verified
        public bool     ShowInlineMedia         { get; set; } // show_all_inline_media

        #endregion
    }
}
