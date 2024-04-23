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
        [Route("assetWorthOfType")]
        public double GetAssetsWorthOfType(string Type)
        {
            int walletId = UtilDL.GetWalletIdFor(UserController.UserName);
            return AssetDL.GetAssetWorthOfType(Type, walletId);
        }
        [HttpGet]
        [Route("buyDollar")]
        public bool BuyDollar(double amount)
        {
            int walletId = UtilDL.GetWalletIdFor(UserController.UserName);
            if (walletId == 0)
                return false;
            if (UtilDL.IsMainWalletExist(walletId))
                AssetDL.BuyDollars(amount, walletId);  
            else
                AssetDL.BuyDollarsNew(amount, walletId);  // first time
            return true;
        }
        [HttpGet]
        [Route("sellDollar")]
        public bool SellDollar(double amount)
        {
            int walletId = UtilDL.GetWalletIdFor(UserController.UserName);
            if (walletId == 0)
                return false;
            if (!AssetDL.CashExist(amount, walletId))
                return false;
            AssetDL.SellDollars(amount, walletId);
            return true;
        }

        
    }
}
