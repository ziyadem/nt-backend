require("dotenv").config()
const TelegramBot = require("node-telegram-bot-api")

let bot = new TelegramBot(process.env.API_KEY, {
    polling: true
})


bot.onText(/start/, msg => {
    bot.sendMessage(msg.chat.id, `Hello ${msg.chat.first_name}`, {
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text: 'menu'
                    },
                    {
                        text: 'video'
                    }
                ],
                [
                    {
                        text: 'audio'
                    },
                    {
                        text: 'document'
                    }
                ]
            ],
            resize_keyboard: true
        
        })
    })


   
     
})

bot.onText(/echo/, msg => {

    bot.sendMessage(msg.chat.id, `echo`)

})


bot.on("message", msg => {
    if(msg.text == 'menu'){
     bot.sendMessage(msg.chat.id, 'Ovqatlar', {
         reply_markup: JSON.stringify({
             keyboard: [
                 [
                     {
                         text: 'Lavash'
                     },
                     {
                         text: 'Gamburger'
                     }
                 ]
             ],
             resize_keyboard: true
         })
     })
    }

    if(msg.text == 'audio'){
        bot.sendAudio(msg.chat.id, "./img/music.ogg", {
            caption: 'Nasafiy!'
        })
    }

    if(msg.text == 'video'){
        bot.sendVideo(msg.chat.id, "./img/3.mp4", {
            caption: 'Video haqida...!'
        })
    }
 

    if(msg.text == 'document'){
        bot.sendDocument(msg.chat.id, "./img/test.txt", {
            caption: 'Video haqida...!'
        })
    }
 
    if(msg.text == 'Lavash'){
     bot.sendPhoto(msg.chat.id, './img/2.jpg', {
         caption: `
          <strong> Lavash haqida 😊 </strong>
          <i>24000</i>
          <span class="tg-spoiler">Tarkibi sirli va tovuqli!!!</span>
         `,
         parse_mode: "HTML",
         reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Zakaz berish",
                        callback_data: "zakaz"
                    },
                    {
                        text: "batafsil",
                        url: 'https://www.npmjs.com/package/node-telegram-bot-api'
                    }
                ]
            ]
         }
        
     },
     )
    }

 })


 bot.on("callback_query", msg => {
    if(msg.data == 'zakaz'){
       bot.sendMessage(msg.chat.id, 'Contactinggizni qoldiring', {
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text: 'contact'
                    },
                    {
                        text: 'locatsiya'
                    }
                ]
            ],
            resize_keyboard: true
        })
       })
    }
    
 })





