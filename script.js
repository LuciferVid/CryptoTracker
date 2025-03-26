const coins = [
  { name: 'Bitcoin (BTC)', price: '$47,256', change: '+3.2%', txns: 235678, volume: '$37.4B', age: '12y', liquidity: '$900B', mcap: '$1.2T', trend: 'up' },
  { name: 'Ethereum (ETH)', price: '$3,400', change: '-1.5%', txns: 478923, volume: '$22.1B', age: '8y', liquidity: '$400B', mcap: '$510B', trend: 'down' },
  { name: 'Binance Coin (BNB)', price: '$420', change: '+2.1%', txns: 189432, volume: '$8.4B', age: '6y', liquidity: '$70B', mcap: '$90B', trend: 'up' },
  { name: 'Solana (SOL)', price: '$145.50', change: '-2.3%', txns: 342567, volume: '$7.8B', age: '5y', liquidity: '$60B', mcap: '$75B', trend: 'down' },
  { name: 'Cardano (ADA)', price: '$1.35', change: '+5.1%', txns: 189432, volume: '$5.2B', age: '6y', liquidity: '$45B', mcap: '$60B', trend: 'up' },
];

const coinNames = [
  'Ripple (XRP)', 'Dogecoin (DOGE)', 'Shiba Inu (SHIB)', 'Floki Inu (FLOKI)', 'Pepe (PEPE)', 'Dogwifhat (WIF)', 'MIND of Pepe (MIND)', 'BTC Bull (BTCBULL)',
  'Pepe Unchained (PEPU)', 'Crypto All-Stars (STARS)', 'Chill Guy (CHILLGUY)', 'BTFD Coin (BTFD)', 'Neiro (NEIRO)', 'Degen (DEGEN)', 'Avalanche (AVAX)',
  'Polkadot (DOT)', 'Litecoin (LTC)', 'Chainlink (LINK)', 'Polygon (MATIC)', 'Stellar (XLM)', 'VeChain (VET)', 'Theta (THETA)', 'Tezos (XTZ)', 'Monero (XMR)',
  'EOS (EOS)', 'Tron (TRX)', 'Algorand (ALGO)', 'Decentraland (MANA)', 'Enjin Coin (ENJ)', 'Zcash (ZEC)', 'IOTA (MIOTA)', 'Dash (DASH)', 'NEM (XEM)',
  'Basic Attention Token (BAT)', 'Decred (DCR)', 'Holo (HOT)', 'Qtum (QTUM)', 'Zilliqa (ZIL)', 'Waves (WAVES)', 'Nano (NANO)', 'Fantom (FTM)', 'Hedera (HBAR)',
  'Kaspa (KAS)', 'Bonk (BONK)', 'Wojak (WOJAK)'
];

coinNames.forEach((name, i) => {
  coins.push({
    name,
    price: `$${(Math.random() * 5000).toFixed(2)}`,
    change: `${(Math.random() * 10 - 5).toFixed(2)}%`,
    txns: Math.floor(Math.random() * 500000) + 10000,
    volume: `$${(Math.random() * 50).toFixed(1)}B`,
    age: `${Math.floor(Math.random() * 10) + 1}y`,
    liquidity: `$${(Math.random() * 100).toFixed(1)}B`,
    mcap: `$${(Math.random() * 200).toFixed(1)}B`,
    trend: Math.random() > 0.5 ? 'up' : 'down'
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Inject the HTML structure first
  document.body.innerHTML = `
    <header>
      <h1>Live Crypto Tracker</h1>
      <p>Stay updated on trending cryptocurrencies</p>
    </header>
    <main class="crypto-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Token</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>TXNs</th>
            <th>Volume</th>
            <th>Age</th>
            <th>Liquidity</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </main>
    <footer>
      <p>Data is sourced by DExScreener</p>
    </footer>
  `;
  
  // Now query the tbody element after HTML is injected
  const tableBody = document.querySelector("tbody");

  function generateRows() {
    tableBody.innerHTML = "";
    let fragment = document.createDocumentFragment();
    
    coins.forEach((coin, index) => {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td class="rank">#${index + 1}</td>
        <td><span class="token-name">${coin.name}</span></td>
        <td>${coin.price}</td>
        <td class="${coin.trend}">${coin.change}</td>
        <td>${coin.txns.toLocaleString()}</td>
        <td>${coin.volume}</td>
        <td>${coin.age}</td>
        <td>${coin.liquidity}</td>
        <td>${coin.mcap}</td>
      `;
      fragment.appendChild(row);
    });
    tableBody.appendChild(fragment);
  }
  
  generateRows();
  setInterval(generateRows, 3000);
});
