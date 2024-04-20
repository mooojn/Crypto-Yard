namespace Server.BL
{
    public class Coin
    {
        public int Id { get; set; }
        public string Name {get; set;}
        public string Description {get; set;}
        public double Amount {get; set;}
        public string Symbol {get; set;}
        public Coin(string symbol, string name, string description)
        {
            Symbol = symbol;
            Name = name;
            Description = description;
        }
        public Coin(int id, string name, string description, double amount, string symbol)
        {
            Id = id;
            Name = name;
            Description = description;
            Amount = amount;
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

        public double GetAmount()
        {
            return Amount;
        }

        public void SetAmount(double amount)
        {
            Amount = amount;
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
                Amount = this.Amount,
                Symbol = this.Symbol
            };
        }
        public void UpdateAllProperties(Coin updatedCoins)
        {
            Id = updatedCoins.Id;
            Name = updatedCoins.Name;
            Description = updatedCoins.Description;
            Amount = updatedCoins.Amount;
            Symbol = updatedCoins.Symbol;
        }
    }
}
