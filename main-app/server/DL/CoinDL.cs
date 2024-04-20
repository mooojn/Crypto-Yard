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
                string desc = reader["Coin_Details"].ToString();

                coins.Add(new Coin(sym, name, desc));
            }
            Database.CloseConnection();
            return coins;
        }
    }
}
