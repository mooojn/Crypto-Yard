using Microsoft.Data.SqlClient;
using Server.BL;

namespace Server.DL
{
    public class CoinDL
    {
        public static List<Coin> ReadAll()
        {
            List < Coin > coins = new List<Coin>();
            
            Database.OpenConnection();
            string query = $"SELECT * FROM Coins";
            SqlCommand cmd = new SqlCommand(query, Database.GetConnection());
            SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                string sym = reader["Symbol"].ToString();
                string name = reader["Name"].ToString();
                string desc = reader["Coin_Description"].ToString();
                string overview = reader["Coin_Details"].ToString();

                float amount = Convert.ToSingle(reader["Amount"]);

                coins.Add(new Coin(sym, name, desc, Math.Round(amount, 2), overview));
            }
            Database.CloseConnection();
            return coins;
        }
        public static Coin ReadAll(string Name)
        {
            Coin coin = new Coin();
            Database.OpenConnection();
            string query = $"SELECT * FROM Coins WHERE Name = '{Name}'";
            SqlCommand cmd = new SqlCommand(query, Database.GetConnection());
            SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                string sym = reader["Symbol"].ToString();
                string name = reader["Name"].ToString();
                string desc = reader["Coin_Description"].ToString();
                string overview = reader["Coin_Details"].ToString();

                float amount = Convert.ToSingle(reader["Amount"]);

                coin = new Coin(sym, name, desc, Math.Round(amount, 2), overview);
            }
            Database.CloseConnection();
            return coin;
        }
        public static void UpdatePrices(Coin coin)
        {
            Database.OpenConnection();
            string query = $"UPDATE Coins SET Amount = '{coin.Price}' WHERE Name = '{coin.Name}' OR Symbol = '{coin.Name}'";
            SqlCommand cmd = new SqlCommand(query, Database.GetConnection());
            cmd.ExecuteNonQuery();
            Database.CloseConnection();
        }
        public static int GetCoinId(string coinName)
        {
            Database.OpenConnection();
            string query = $"Select ID from Coins where Name = '{coinName}'";
            SqlCommand cmd = new SqlCommand(query, Database.GetConnection());
            SqlDataReader reader = cmd.ExecuteReader();
            int id = 0;
            if (reader.Read())
            {
                id = Convert.ToInt32(reader["ID"]);
            }
            Database.CloseConnection();
            return id;
        }
    }
}
