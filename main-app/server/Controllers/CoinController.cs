using CryptoConsole.BL;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Server.BL;
using Server.DL;

namespace Server.Controllers
{
    [Route("api/")]
    [ApiController]
    public class CoinController
    {
        [HttpGet]
        [Route("coinInfo")]
        public string GetCoin()
        {
            List<Coin> coins = CoinDL.ReadAll();

            return JsonConvert.SerializeObject(coins);
        }
    }
}
