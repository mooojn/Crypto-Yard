using Microsoft.Data.SqlClient;
using Server.BL;

namespace Server.DL
{
    public class AssetDL
    {
        public static double GetAssetWorth(string userName)
        {
            Database.OpenConnection();
            double amount = 0;
            string query = $"select c.Amount*a.Amount as TotalAmount from Coins as c Join Assets as a on c.ID = a.CoinID " +
            $"Where WalletId = (select Id from Wallet where UserID = (select UserID from Users where UserName = '{userName}'))";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                amount += Convert.ToDouble(reader["TotalAmount"]);
            }
            Database.CloseConnection();
            return amount;
        }
    }
}
