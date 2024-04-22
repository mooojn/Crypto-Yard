using Microsoft.Data.SqlClient;
using Server.BL;

namespace Server.DL
{
    public class UtilDL
    {
        public static int GetWalletIdFor(string name)
        {
            int id = 0;
            Database.OpenConnection();
            string query = $"Select Id from Wallet where UserId = (select UserID from Users where UserName = '{name}')";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            SqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {
                id = Convert.ToInt32(reader["Id"]);
            }
            Database.CloseConnection();
            return id;
        }
        public static void CreateWallet(string name)
        {
            Database.OpenConnection();
            string query = $"Insert into Wallet values ((select UserID from Users where UserName = '{name}'),'{GenerateWalletNumber(name)}')";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            command.ExecuteNonQuery();
            Database.CloseConnection();
        }
        private static string GenerateWalletNumber(string name)
        {
            string nums = GenerateRandomString(3);
            string accountNumber = $"{name.ToLower()}{nums}@cryptoyard";
            return accountNumber;
        }
        private static string GenerateRandomString(int length)
        {
            Random rand = new Random();
            string result = "";

            for (int i = 0; i < length; i++)
            {
                int num = rand.Next(0, 10);
                result += num.ToString();
            }
            return result;
        }
    }
}
