namespace Server.BL
{
    public class User
    {
        public string Name { get; set; }
        public string Password {get; set;}
        public string Role {get; set;}
        public string Cnic {get; set;}
        public DateTime DateCreated {get; set;}
        public User(string name, string pass)
        {
            Name = name;
            Password = pass;
        }
        public User(string userName, string password, string cnic)
        {
            Name = userName;
            Password = password;
            Cnic = cnic;
            DateCreated = DateTime.Now;
        }
        public User(string userName, string password, string role, string cnic, DateTime dateCreated)
        {
            Name = userName;
            Password = password;
            Role = role;
            Cnic = cnic;
            DateCreated = dateCreated;
        }


        public object GetAllPropertiesObject()
        {
            return new
            {
                Name = this.Name,
                Password = this.Password,
                Role = this.Role,
                Cnic = this.Cnic,
                DateCreated = this.DateCreated
            };
        }
        public void UpdateAllProperties(User updatedUser)
        {
            Name = updatedUser.Name;
            Password = updatedUser.Password;
            Role = updatedUser.Role;
            Cnic = updatedUser.Cnic;
            DateCreated = updatedUser.DateCreated;
        }

        public void SetUserId(int userId)
        {
        }

        public string GetName()
        {
            return Name;
        }

        public void SetName(string userName)
        {
            Name = userName;
        }

        public string GetPassword()
        {
            return Password;
        }

        public void SetPassword(string password)
        {
            Password = password;
        }

        public string GetRole()
        {
            return Role;
        }

        public void SetRole(string role)
        {
            Role = role;
        }

        public string GetCnic()
        {
            return Cnic;
        }

        public void SetCnic(string cnic)
        {
            Cnic = cnic;
        }

        public DateTime GetDateCreated()
        {
            return DateCreated;
        }

        public void SetDateCreated(DateTime dateCreated)
        {
            DateCreated = dateCreated;
        }


        public static bool ValidateInput(User user)
        {
            if (string.IsNullOrWhiteSpace(user.Name))
            {
                return false;
            }
            if (string.IsNullOrWhiteSpace(user.Password) || user.Password.Length < 6)
            {
                return false;
            }
            if (user.Role.ToLower() != "admin" && user.Role.ToLower() != "customer")
            {
                return false;
            }

            if (user.Cnic.ToString().Length != 13)
            {
                return false;
            }
            if (user.DateCreated > DateTime.Now)
            {
                return false;
            }
            return true;
        }
    }
}
