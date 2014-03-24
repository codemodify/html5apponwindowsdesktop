
using System;
using System.Collections.Generic;
using System.IO;

namespace XemantiX.SemanticProcessorSimulator
{
    public class SemanticProcessor
    {
        private String[] _listOfWords;

        public SemanticProcessor()
        {
            using( TextReader tr = new StreamReader( "englishwords.text" ) )
            {
                _listOfWords = tr.ReadToEnd().Split( new String[]{Environment.NewLine}, StringSplitOptions.RemoveEmptyEntries );
            }
        }

        public List<WordMood> GetMoodsForWords( List<String> words )
        {
            var wordMoodList = new List<WordMood>();

            foreach( String word in words )
            {
                wordMoodList.Add( new WordMood( word, RandomNumberGenerator.GetByte() ) );
            }

            return wordMoodList;
        }

        public List<WordMood> GetMoodsForTrends()
        {
            int trndsCount = RandomNumberGenerator.GetInt16();

            var wordMoodList = new List<WordMood>();

            for( int trendIndex=0; trendIndex < trndsCount; trendIndex++ )
            {
                int wordsIndex = RandomNumberGenerator.GetInt16();

                wordMoodList.Add( new WordMood( _listOfWords[ wordsIndex ], RandomNumberGenerator.GetByte() ) );
            }

            return wordMoodList;
        }
    }
}
