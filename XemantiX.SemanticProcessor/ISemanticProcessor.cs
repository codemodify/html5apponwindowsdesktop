using XemantiX.Persistence;

namespace XemantiX.SemanticProcessor
{
    public interface ISemanticProcessor
    {
        Repository TycheRepository { get; set; }

        void Start();
        void Stop();
    }
}
