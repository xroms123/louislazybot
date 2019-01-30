var linebot = require('linebot');
var express = require('express');

var bot = linebot({
    channelId: "1643104538",
    channelSecret: "3d069adbc8d0202e08b01cf6620cf21b",
    channelAccessToken: "V+DxEouhWkrKPSkt2gPlbu5SB5uUns8fe+MGH5o8Lj5BvplwTQlraUX/k3Y1RXfi7IeVmqIDyHFDcM0uUDXiCG8UY6YTwErQcKoRxxdPp+9d+t+jMSNYmO6eDveQv2McZqLfN5cxoycHdgo4tkZIjAdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function (event) {
    console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});