type Currency = "USD" | "EUR" | "UAH";

interface ConvertCurrency {
    amount: number;
    currency: Currency;
}

function convertCurrency({amount, currency}:ConvertCurrency):void {
  console.log(`Converting ${amount} to ${currency}`);
}
