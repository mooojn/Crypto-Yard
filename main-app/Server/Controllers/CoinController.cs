using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Server.BL;
using Server.DL;
using System.Net.Http;
using System.Threading.Tasks;


namespace Server.Controllers
{
    [Route("api/")]
    [ApiController]
    public class CoinController : ControllerBase
    {
        [HttpGet]
        [Route("coinInfo")]
        public string GetCoin()
        {
            // Your existing code to retrieve coin information
            // Assuming it returns a JSON string
            return JsonConvert.SerializeObject(CoinDL.ReadAll());
        }

        [HttpGet]
        [Route("scrape")]
        public async Task<IActionResult> GetPrices()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    // Make GET request to the external API endpoint
                    HttpResponseMessage response = await httpClient.GetAsync("http://localhost:3000/scrape");

                    // Check if the response is successful
                    response.EnsureSuccessStatusCode();

                    // Read the content of the response
                    string jsonContent = await response.Content.ReadAsStringAsync();

                    // Deserialize the JSON content into a list of objects
                    var coins = JsonConvert.DeserializeObject<List<Coin>>(jsonContent);

                    // Extract the name and price of the first object
                    foreach (var coin in coins)
                    {
                        string name = coin.Name;
                        double price = coin.Price;
                        CoinDL.UpdatePrices(new Coin(name, price));
                    }
                    return StatusCode(200, "Sucess");
                }
            }
            catch (HttpRequestException ex)
            {
                // Log or handle the exception
                return StatusCode(500, $"Error retrieving data: {ex.Message}");
            }
        }


    }
}
