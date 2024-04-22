using Microsoft.AspNetCore.Mvc;
using Server.BL;
using Server.DL;

namespace Server.Controllers
{
    [Route("api/")]
    [ApiController]
    public class AssetController
    {

        [HttpGet]
        [Route("assetWorth")]
        public List<double> GetAssetsWorth()
        {
            return AssetDL.GetAssetWorth(UserController.UserName);
        }
        [HttpGet]
        [Route("buyDollar")]
        public bool BuyDollar(double amount)
        {
            AssetDL.BuyDollars(amount, UserController.UserName);
            return true;
        }
        //public List<double> GetAssetsWorth(string name)
        //{
        //    return AssetDL.GetAssetWorth(name);
        //}
    }
}
