using Microsoft.Data.SqlClient;
using Server.BL;
using Server.Controllers;
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
        public static void BuyDollars(double amount, int walletId)
        {
            Database.OpenConnection();
            string query = $"Update Assets set Amount += {amount} where walletid = {walletId} AND Assests_Status = 'Main'";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            command.ExecuteNonQuery();
            Database.CloseConnection();
        }
        public static double GetAssetWorthOfType(string Type, int walletId)
        {
            Database.OpenConnection();
            double amount = 0;
            string query = $"select c.Amount*a.Amount as TotalAmount from Coins as c Join Assets as a on c.ID = a.CoinID " +
            $"Where WalletId = {walletId} AND Assests_Status = '{Type}'";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            SqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {
                amount = Math.Round(Convert.ToDouble(reader["TotalAmount"]), 2);
            }
            Database.CloseConnection();
            return amount;
        }
        public static void BuyDollarsNew(double amount, int walletId)
        {
            Database.OpenConnection();
            string query = $"insert into Assets values(4, {amount}, 'Main', {walletId})";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            command.ExecuteNonQuery();
            Database.CloseConnection();
        }
        public static void SellDollars(double amount, int walletId)
        {
            Database.OpenConnection();
            string query = $"update Assets set Amount = Amount-{amount} where WalletId = {walletId} AND Assests_Status = 'Main'";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            command.ExecuteNonQuery();
            Database.CloseConnection();
        }
        public static bool CashExist(double amount, int walletId)
        {
            Database.OpenConnection();
            string query = $"select Amount from Assets where CoinID = 4 and WalletId = {walletId} AND Assests_Status = 'Main'";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            SqlDataReader reader = command.ExecuteReader();
            double currentAmount = 0;
            if (reader.Read())
            {
                currentAmount = Convert.ToDouble(reader["Amount"]);
            }
            Database.CloseConnection();
            return currentAmount >= amount;
        }
    }
}
