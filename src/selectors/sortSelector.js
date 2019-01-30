// import { sortByAmountDescending } from "../actions/coinsFilters";

export default (coins, { text, sortBy }) => coins.filter((coin) => {
  const textMatch = coin.name.toLowerCase().includes(text.toLowerCase());

  return textMatch;
}).sort((a, b) => {
  if (sortBy === 'nameAscending') return a.name > b.name ? 1 : -1;
  if (sortBy === 'nameDescending') return a.name < b.name ? 1 : -1;
  if (sortBy === 'priceUsdAscending') return +a.price_usd < +b.price_usd ? 1 : -1;
  if (sortBy === 'priceUsdDescending') return +a.price_usd > +b.price_usd ? 1 : -1;
  if (sortBy === 'marketCapAscending') return +a.market_cap_usd < +b.market_cap_usd ? 1 : -1;
  if (sortBy === 'marketCapDescending') return +a.market_cap_usd > +b.market_cap_usd ? 1 : -1;
  if (sortBy === 'perChangeAscending') return +a.percent_change_24h < +b.percent_change_24h ? 1 : -1;
  if (sortBy === 'perChangeDescending') return +a.percent_change_24h > +b.percent_change_24h ? 1 : -1;

  return a.name > b.name ? 1 : -1;
});
