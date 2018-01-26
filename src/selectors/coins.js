export default (coins, { text, sortBy }) => {
  return coins.filter((coin) => {
    const textMatch = coin.name.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'nameAscending') {
      return a.name > b.name ? 1 : -1;
    } else if (sortBy === 'amountAscending') {
      return +a.price_usd < +b.price_usd ? 1 : -1;
    } else if (sortBy === 'nameDescending') {
      return a.name < b.name ? 1 : -1;
    } else if (sortBy === 'amountDescending') {
      return +a.price_usd > +b.price_usd ? 1 : -1;
    }
  });
};
