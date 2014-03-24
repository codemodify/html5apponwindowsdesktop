using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace XemantiX.TycheClient.Desktop.Services
{
    [ServiceContract( Namespace = "http://XemantiXServices" )]
    public interface IService
    {
        [OperationContract]
        UserEntity Login( String user, String password );
    }

    [DataContract]
    public class UserEntity
    {
        [DataMember]
        public String FirstName
        {
            get;
            set;
        }

        [DataMember]
        public String LastName
        {
            get;
            set;
        }
    }
}
