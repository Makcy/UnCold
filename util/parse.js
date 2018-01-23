const request = require('request-promise');
const config = require('../config');
const cheerio = require('cheerio');
const R = require('ramda');

module.exports = {
  getUnColdList: async function (page = null) {
    let body = await request(`${config.unColdList}&page=${page}`);
    const $ = cheerio.load(body);
    return R.compose(R.filter(c => c), R.map(c => c.trim()), R.split('\n'))($('.p_title').slice(1, -1).text());
  },
  getUnColdDetail: async function () {
  }
}
