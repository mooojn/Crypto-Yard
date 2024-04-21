﻿using Microsoft.AspNetCore.Mvc; 
using Microsoft.AspNetCore.Http;
using System.Data;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Options;
using System.Text.Json;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Data.SqlClient;
using Server.DL;
using Server.BL;



namespace Server.Controllers
{

    [Route("api/")]
    [ApiController]
    public class UserController
    {
        [HttpGet]
        [Route("test")]
        public string GetUsers()
        {
            List<User> user;
            user = DL.UserDL.GetAllUsers();
            //Serialize the users list to JSON
            string json = JsonConvert.SerializeObject(user);
            return json;
        }
        
        [HttpGet]
        [Route("login")]
        public bool SignIn(string Name, string Password)
        {
            return UserDL.ValidateLogin(new User(Name, Password));
        }
        
        [HttpGet]
        [Route("signUp")]
        public bool SignUp(string Name, string Password, string Cnic)
        {
            User u = new User(Name, Password, Cnic);
            if (UserDL.FindUser(Name) != null)
                return false;
            DL.UserDL.AddUser(u);
            return true;
        }
    }
}
