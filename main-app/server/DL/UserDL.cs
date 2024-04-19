using Microsoft.Data.SqlClient;
//using CryptoConsole.BL;
using Server.BL;

namespace Server.DL
{
    public class UserDL
    {
        public static string connectionString = "Server=localhost;Database=CryptoYard;Trusted_Connection=True;Encrypt=False";
        public static SqlConnection conn = new SqlConnection(connectionString);

        public static List<User> GetAllUsers()
        {
            conn.Open();
            string query = "SELECT * FROM Users";
            List<User> users = new List<User>();
            SqlCommand command = new SqlCommand(query, conn);
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                string name = reader["name"].ToString();
                string pass = reader["password"].ToString();
                users.Add(new User(name, pass));
            }
            conn.Close();
            return users;
        }
        public static bool ValidateLogin(User u)
        {
            conn.Open();
            string query = $"SELECT * FROM Users WHERE UserName = '{u.Name}' AND UserPassword = '{u.Password}'";
            SqlCommand command = new SqlCommand(query, conn);
            SqlDataReader reader = command.ExecuteReader();
            bool result = false;
            while (reader.Read())
            {
                result = true;
            }
            conn.Close();
            return result;
        }
        public static void AddUser(User u)
        {
            conn.Open();
            string query = $"INSERT INTO Users VALUES ('{u.Name}', '{u.Password}', '{"N/A"}', '{u.Cnic}', @Date)";
            SqlCommand command = new SqlCommand(query, conn);
            command.Parameters.AddWithValue("@Date", u.DateCreated);
            command.ExecuteNonQuery();
            conn.Close();
        }
        public static User FindUser(string name)
        {
            conn.Open();
            string query = $"SELECT * FROM Users WHERE UserName = '{name}'";
            SqlCommand command = new SqlCommand(query, conn);
            SqlDataReader reader = command.ExecuteReader();
            User u = null;
            while (reader.Read())
            {
                string n = reader["UserName"].ToString();
                string p = reader["UserPassword"].ToString();
                u = new User(n, p);
            }
            conn.Close();
            return u;
        }
    }
}
