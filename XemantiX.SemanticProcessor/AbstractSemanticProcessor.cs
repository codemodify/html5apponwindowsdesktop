using System.Threading.Tasks;
using XemantiX.Persistence;

namespace XemantiX.SemanticProcessor
{
    public abstract class AbstractSemanticProcessor : ISemanticProcessor
    {
        private Task _task;

        public Repository TycheRepository { get; set; }

        public virtual void Start()
        {
            _task = Task.Factory.StartNew(Process);
        }

        public abstract void Process();

        public virtual void Stop()
        {
            _task.Wait();
        }
    }
}
