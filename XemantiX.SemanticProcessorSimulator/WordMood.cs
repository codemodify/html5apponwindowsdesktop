
using System;

namespace XemantiX.SemanticProcessorSimulator
{
    public class WordMood
    {
        public String Word { get; set; }
        public int Mood { get; set; }

        public WordMood( String word, int mood )
        {
            Word = word;
            Mood = mood;
        }
    }
}
