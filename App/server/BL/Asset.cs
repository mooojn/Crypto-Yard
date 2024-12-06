using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.BL
{
    public class Asset
    {
        private int id;
        private int CoinId;
        private float Amount;
        private string AssetsStatus;
        private int WalletId;

        public Asset(int id, int coinId, float amount, string assetStatus, int walletId)
        {
            this.id = id;
            this.CoinId = coinId;
            this.Amount = amount;
            this.AssetsStatus = assetStatus;
            this.WalletId = walletId;
        }

        // Getters and Setters
        public int GetId()
        {
            return id;
        }

        public void SetId(int id)
        {
            this.id = id;
        }


        public int GetCoinId()
        {
            return CoinId;
        }

        public void SetCoinId(int coinId)
        {
            CoinId = coinId;
        }

        public float GetAmount()
        {
            return Amount;
        }

        public void SetAmount(float amount)
        {
            Amount = amount;
        }

        public string GetStatus()
        {
            return AssetsStatus;
        }

        public void SetAssetsStatus(string assetsStatus)
        {
            AssetsStatus = assetsStatus;
        }

        public int GetWalletId()
        {
            return WalletId;
        }

        public void SetWalletId(int walletId)
        {
            WalletId = walletId;
        }

        // Function to return all properties as an object
        public object GetAllPropertiesObject()
        {
            return new
            {
                Id = this.id,
                CoinId = this.CoinId,
                Amount = this.Amount,
                AssetsStatus = this.AssetsStatus,
                WalletId = this.WalletId
            };
        }

        // Function to update all properties from another Asset object
        public void UpdateAllProperties(Asset updatedAssets)
        {
            id = updatedAssets.id;
            CoinId = updatedAssets.CoinId;
            Amount = updatedAssets.Amount;
            AssetsStatus = updatedAssets.AssetsStatus;
            WalletId = updatedAssets.WalletId;
        }
    }
}
