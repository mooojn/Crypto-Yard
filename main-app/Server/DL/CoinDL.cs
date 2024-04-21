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

                coins.Add(new Coin(sym, name, desc, amount, overview));
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

                coin = new Coin(sym, name, desc, amount, overview);
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
    }
}
