const express = require('express');
const { request, response } = require('express');
const app = express();
var emoji = require("node-emoji");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', async (request, response)=> {
    response.status(200).json(`Hello Word`)
});

app.get('/soma/:num1/:num2', async (request, response) =>{
    const result = Number(request.params.num1) + Number(request.params.num2);
    response.json({result});
});

const check = emoji.get("white_check_mark");
const twisted_rightwards_arrows = emoji.get("twisted_rightwards_arrows");
const sunglasses = emoji.get("sunglasses");
const large_green_circle = emoji.get("large_green_circle");
const door = emoji.get("door");
const zero = emoji.get("zero");
const three = emoji.get("three");
const fast_forward = emoji.get("fast_forward");
const rewind = emoji.get("rewind");


app.listen(4000, () => {

    const msg_aplicacao =`\n${large_green_circle}${large_green_circle}-- ${check}SERVIDOR ONLINE !${check}${large_green_circle}${large_green_circle} \n             ${sunglasses}
    ${fast_forward}--${door} Na porta 4000 ${door}--${rewind}\n`;


    console.log(msg_aplicacao)
})
