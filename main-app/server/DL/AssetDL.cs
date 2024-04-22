using Microsoft.Data.SqlClient;
using Server.BL;

namespace Server.DL
{
    public class AssetDL
    {
        public static List<double> GetAssetWorth(string userName)
        {
            Database.OpenConnection();
            List<double>amount = new List<double>();
            string query = $"select c.Amount*a.Amount as TotalAmount from Coins as c Join Assets as a on c.ID = a.CoinID " +
            $"Where WalletId = (select Id from Wallet where UserID = (select UserID from Users where UserName = '{userName}'))";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                amount.Add(Math.Round(Convert.ToDouble(reader["TotalAmount"]), 2));
            }
            Database.CloseConnection();
            return amount;
        }
    }
}
