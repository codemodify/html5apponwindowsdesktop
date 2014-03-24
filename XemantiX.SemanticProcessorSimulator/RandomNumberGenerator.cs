
using System;
using System.Security.Cryptography;

namespace XemantiX.SemanticProcessorSimulator
{
    public class RandomNumberGenerator
    {
        private static byte[] _randomInt32 = new byte[ 4 ];
        private static byte[] _randomInt16 = new byte[ 2 ];
        private static byte[] _randomByte = new byte[ 1 ];
        private static RNGCryptoServiceProvider _randomNumberGenerator = new RNGCryptoServiceProvider();

        public static int GetInt32()
        {
            _randomNumberGenerator.GetBytes( _randomInt32 );

            if( BitConverter.IsLittleEndian )
                Array.Reverse( _randomInt32 );

            return BitConverter.ToInt32( _randomInt32, 0 );
        }

        public static int GetInt16()
        {
            _randomNumberGenerator.GetBytes( _randomInt32 );

            if( BitConverter.IsLittleEndian )
                Array.Reverse( _randomInt16 );

            return BitConverter.ToInt16( _randomInt16, 0 );
        }

        public static int GetByte()
        {
            _randomNumberGenerator.GetBytes( _randomByte );

            return BitConverter.ToInt32( _randomByte, 0 );
        }
    }
}
