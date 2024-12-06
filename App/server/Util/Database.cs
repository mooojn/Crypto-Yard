using Microsoft.Data.SqlClient;

namespace Server
{
    public class Database
    {
        private static string connectionString = "Server=localhost;Database=CryptoYard;Trusted_Connection=True;Encrypt=False";
        private static SqlConnection conn = new SqlConnection(connectionString);
        public static void OpenConnection()
        {
            conn.Open();
        }
        public static void CloseConnection()
        {
            conn.Close();
        }
        public static SqlConnection GetConnection()
        {
            return conn;
        }
    }
}
