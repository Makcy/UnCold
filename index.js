const request = require('request');

request('https://my.hupu.com/search?fid=34&type=topic&q=%E3%80%8A%E4%B8%8D%E5%86%B7%E7%AC%91%E8%AF%9D%E3%80%8B%E7%AC%AC', function(error, response, body) {
  console.log(body)
});