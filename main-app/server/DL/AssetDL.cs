using Microsoft.Data.SqlClient;
using Server.BL;
using System.Collections.Generic;

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
        public static void BuyDollars(double amount, string userName)
        {
            Database.OpenConnection();
            string query = $"insert into Assets values(4, {amount}, 'Main', (Select Id from Wallet where UserId = (select UserID from Users where UserName = '{userName}')))";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            command.ExecuteNonQuery();
            Database.CloseConnection();
        }
        public static void SellDollars(double amount, int walletId)
        {
            Database.OpenConnection();
            string query = $"update Assets set Amount = Amount-{amount} where WalletId = {walletId}";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            command.ExecuteNonQuery();
            Database.CloseConnection();
        }
        public static bool CashExist(double amount, int walletId)
        {
            Database.OpenConnection();
            string query = $"select Amount from Assets where CoinID = 4 and WalletId = {walletId}";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            SqlDataReader reader = command.ExecuteReader();
            double currentAmount = 0;
            while (reader.Read())
            {
                currentAmount += Convert.ToDouble(reader["Amount"]);
            }
            Database.CloseConnection();
            return currentAmount >= amount;
        }
    }
}
