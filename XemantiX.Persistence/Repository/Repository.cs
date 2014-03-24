using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using XemantiX.Persistence.Models;

namespace XemantiX.Persistence
{
    public partial class Repository
    {
        TycheDbDataContext dc;

        public Repository()
        {
            dc = new TycheDbDataContext();
        }

        public Repository(string connectionString)
        {
            dc = new TycheDbDataContext(connectionString);
        }

        public void Add<T>(T obj)
        {
            dc.GetTable(typeof(T)).InsertOnSubmit(obj);
        }

        public void Remove<T>(T obj)
        {
            dc.GetTable(typeof(T)).DeleteOnSubmit(obj);
        }

        public void Save()
        {
            dc.SubmitChanges();
        }
    }
}
