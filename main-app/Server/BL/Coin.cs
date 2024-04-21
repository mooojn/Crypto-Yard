namespace Server.BL
{
    public class Coin
    {
        public int Id { get; set; }
        public string Name {get; set;}
        public string Description {get; set;}
        public string Overview { get; set;}
        public double Price {get; set;}
        public string Symbol {get; set;}
        public Coin()
        {

        }
        public Coin (string name, double amount)
        {
            Name = name;
            Price = amount;
        }
        public Coin(string symbol, string name, string description)
        {
            Symbol = symbol;
            Name = name;
        }
        public Coin(string symbol, string name, string description, float price, string overview)
        {
            Symbol = symbol;
            Name = name;
            Description = description;
            Price = price;
            Overview = overview;
        }
        public Coin(int id, string name, string description, double amount, string symbol)
        {
            Id = id;
            Name = name;
            Description = description;
            Price = amount;
            Symbol = symbol;
        }

        public int GetId()
        {
            return Id;
        }

        public void SetId(int id)
        {
            Id = id;
        }

        public string GetName()
        {
            return Name;
        }

        public void SetName(string name)
        {
            Name = name;
        }

        public string GetDescription()
        {
            return Description;
        }

        public void SetDescription(string description)
        {
            Description = description;
        }

        public double GetPrice()
        {
            return Price;
        }

        public void SetPrice(double amount)
        {
            Price = amount;
        }

        public string GetSymbol()
        {
            return Symbol;
        }

        public void SetSymbol(string symbol)
        {
            Symbol = symbol;
        }

        public object GetAllPropertiesObject()
        {
            return new
            {
                Id = this.Id,
                Name = this.Name,
                Description = this.Description,
                Price = this.Price,
                Symbol = this.Symbol
            };
        }
        public void UpdateAllProperties(Coin updatedCoins)
        {
            Id = updatedCoins.Id;
            Name = updatedCoins.Name;
            Description = updatedCoins.Description;
            Price = updatedCoins.Price;
            Symbol = updatedCoins.Symbol;
        }
    }
}
