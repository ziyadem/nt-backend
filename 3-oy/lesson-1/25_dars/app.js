import Dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'


Dotenv.config()



const bot = new TelegramBot('5974400588:AAHpDvHb0UMg4m7OcnRmN4xWilt2ctnQxxM', { polling: true })

bot.onText(/start/, msg => {
    console.log(msg);

    bot.sendMessage(msg.chat.id, `Hello  ${msg.chat.first_name}`, {
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text: 'menu'
                    },
                    {
                        text: 'video'
                    },
                    {
                        text: 'music'
                    }
                ],
                [
                    {
                        text: 'but 1'
                    },
                    {
                        text: 'but 2'
                    }
                ]
            ],
            resize_keyboard: true
        })
    })
})


bot.on('message', msg => {
    const chatId = msg.chat.id
    if(msg.text === 'menu'){
        bot.sendMessage(chatId, 'Asosiy menu', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Foods'
                        },
                        {
                            text: 'Drinks'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }


    if(msg.text === 'Foods'){
        bot.sendMessage(chatId, 'Fast food menu', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Lavash'
                        },
                        {
                            text: 'Burger'
                        }
                    ]
                ],
                resize_keyboard: true
            })
        })
    }

    if(msg.text === 'Lavash'){
        bot.sendPhoto(msg.chat.id, './img/1.jpeg', {
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

bot.on("callback_query",  msg => {
    if(msg.data === 'zakaz'){
       bot.sendMessage(msg.message.chat.id, 'Contactinggizni qoldiring', {
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text: 'Contact berish',
                        request_contact: true
                    },
                    {
                        text: 'Locatsiyani berish',
                        request_location: true
                    }
                ]
            ],
            resize_keyboard: true
        })
       })
    }
    
 })


 //
 import { read_file, write_file } from './fs/fs_api.js'


 const contacts = read_file("zakaz.json")
 bot.on("contact", msg => {

    const { phone_number, first_name, user_id } = msg.contact

  let foundedContact =  contacts.find(c => c.user_id === user_id)

  if(foundedContact){
    return
  }

    contacts.push({
        user_id,
        first_name,
        phone_number
    })
    
    write_file("zakaz.json", contacts)
   return bot.sendMessage(msg.chat.id, 'Operator tez orada javob beradi!!!')
})


bot.on("location", msg => {
    let { latitude, longitude } = msg.location
    console.log(latitude);
    console.log(longitude);
    bot.sendLocation(msg.chat.id, latitude, longitude  )
})