const PREFIX = process.env.GH_PAGES ? '/stonks-and-shit' : '';
const domain = process.env.GH_PAGES
  ? 'https://fleshascs.github.io/stonks-and-shit'
  : 'http://localhost:3000';

module.exports = {
  siteName: 'Stonks',
  domain,
  defaultTitle: 'stonks and shit',
  defaultDescription: 'Stonks analyzer blablabla',
  googleAnalyticsKey: 'UA-125851250-1',
  basePath: PREFIX
};
