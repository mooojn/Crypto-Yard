import requests
from bs4 import BeautifulSoup

def get_info(link):
    url = link
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    name = soup.find("span" , class_="sc-f70bb44c-0 jltoa").text
    price = soup.find("span" , class_="sc-f70bb44c-0 jxpCgO base-text").text

    print(f'{name}: {price}')

# BTC
url1 = "https://coinmarketcap.com/currencies/bitcoin/"
url2 = "https://coinmarketcap.com/currencies/ethereum/"
url3 = "https://coinmarketcap.com/currencies/tether/"
url4 = "https://coinmarketcap.com/currencies/dogecoin/"
while(True):
    get_info(url1)

    # ETH
    get_info(url2)

    # USDT
    get_info(url3)

    # DOGE
    get_info(url4)