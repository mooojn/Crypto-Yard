using Microsoft.AspNetCore.Mvc;
using Server.BL;
using Server.DL;
using Newtonsoft.Json;


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
            int walletId = UtilDL.GetWalletIdFor(UserController.UserName);
            List<double> amount = new List<double>();
            amount.Add(AssetDL.GetAssetWorthOfType("Main", walletId));
            amount.Add(AssetDL.GetAssetWorthOfType("Trading", walletId));
            amount.Add(AssetDL.GetAssetWorthOfType("Loan", walletId));
            return amount;
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
        [HttpGet]
        [Route("buyCoin")]
        public bool BuyCoin(string coinName, double coinPrice, double amount)
        {
            int coinId = CoinDL.GetCoinId(coinName);
            double coinAmount = amount / coinPrice;
            int walletId = UtilDL.GetWalletIdFor(UserController.UserName);
            
            AssetDL.BuyCoin(coinId, coinAmount, walletId);
            AssetDL.UpdateMainWorth(walletId, amount);

            return true;
        }
        [HttpGet]
        [Route("getHistory")]
        public string GetLatestTransaction()
        {
            int walletId = UtilDL.GetWalletIdFor(UserController.UserName);
            if (walletId == 0)
                return "";
            History history = AssetDL.GetLatestTransaction(walletId);
            return JsonConvert.SerializeObject(history);
        }
        [HttpGet]
        [Route("setHistory")]
        public bool StoreLatestTransaction(int amount, string type)
        {
            int walletId = UtilDL.GetWalletIdFor(UserController.UserName);
            if (walletId == 0)
                return false;
            AssetDL.StoreLatestTransaction(walletId, amount, type);
            return true;
        }

    }
}
