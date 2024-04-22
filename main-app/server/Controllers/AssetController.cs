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
        public double GetAssetsWorth(string name)
        {
            return AssetDL.GetAssetWorth(name);
        }
    }
}
