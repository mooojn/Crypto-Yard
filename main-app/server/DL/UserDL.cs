using Microsoft.Data.SqlClient;
//using CryptoConsole.BL;
using Server.BL;

namespace Server.DL
{
    public class UserDL
    {
        public static List<User> GetAllUsers()
        {
            Database.OpenConnection();
            string query = "SELECT * FROM Users";
            List<User> users = new List<User>();
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                string name = reader["name"].ToString();
                string pass = reader["password"].ToString();
                users.Add(new User(name, pass));
            }
            Database.CloseConnection();
            return users;
        }
        public static bool ValidateLogin(User u)
        {
            Database.OpenConnection();
            string query = $"SELECT * FROM Users WHERE UserName = '{u.Name}' AND UserPassword = '{u.Password}'";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            SqlDataReader reader = command.ExecuteReader();
            bool result = false;
            while (reader.Read())
            {
                result = true;
            }
            Database.CloseConnection();
            return result;
        }
        public static void AddUser(User u)
        {
            Database.OpenConnection();
            string query = $"INSERT INTO Users VALUES ('{u.Name}', '{u.Password}', '{"N/A"}', '{u.Cnic}', @Date)";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            command.Parameters.AddWithValue("@Date", u.DateCreated);
            command.ExecuteNonQuery();
            Database.CloseConnection();
        }
        public static User FindUser(string name)
        {
            Database.OpenConnection();
            string query = $"SELECT * FROM Users WHERE UserName = '{name}'";
            SqlCommand command = new SqlCommand(query, Database.GetConnection());
            SqlDataReader reader = command.ExecuteReader();
            User u = null;
            while (reader.Read())
            {
                string n = reader["UserName"].ToString();
                string p = reader["UserPassword"].ToString();
                u = new User(n, p);
            }
            Database.CloseConnection();
            return u;
        }
    }
}
