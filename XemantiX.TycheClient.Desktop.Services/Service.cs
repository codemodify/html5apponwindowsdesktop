using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace XemantiX.TycheClient.Desktop.Services
{
    public class Service : IService
    {
        public UserEntity Login( String user, String password )
        {
            var userEntity = new UserEntity();
                userEntity.FirstName = user;
                userEntity.LastName = String.Empty;

            return userEntity;
        }
    }
}
