namespace Server.BL
{
    public class History
    {
        public double Amount { get; set; }
        public string  Type { get; set; }
        public DateTime date { get; set; }
        public History(double amount, string type)
        {
            this.Amount = amount;
            this.Type = type;
        }
    }
}
