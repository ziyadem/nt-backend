import TelegramBot from "node-telegram-bot-api"
import Dotenv from 'dotenv'
import { read_file, write_file } from "./fs/fs_api.js";

Dotenv.config();

let bot = new TelegramBot(process.env.API_KEY,{
    polling:true
});

let users = read_file("users.json");

bot.onText(/start/,msg=>{
     bot.sendMessage(msg.chat.id, `Hello  ${msg.chat.first_name}`, {
       reply_markup: JSON.stringify({
         keyboard: [
           [
             {
               text: "Operatsion Sistema",
             },
           ],
           [
             {
               text: "Arxivlar paroli",
             },
           ],
           [
             {
               text: "Arxivdan chiqarish qollanmasi",
             },
             {
               text: "Statistika",
             },
           ],
         ],
         resize_keyboard: true,
       }),
     });
});

bot.on('message', msg => {
    const chatId = msg.chat.id
       if (msg.text === "Operatsion Sistema") {
         bot.sendMessage(
           chatId,
           "Quyidagi operatsion sistemalardan birini tanlang!!!",
           {
             reply_markup: JSON.stringify({
               keyboard: [
                 [
                   {
                     text: "Windows",
                   },
                   {
                     text: "Linux",
                   },
                 ],
                 [
                   {
                     text: "MacOs",
                   },
                 ],
                 [
                   {
                     text: "AndroidOs",
                   },
                 ],
                 [
                   {
                     text: "Orqaga",
                   },
                   {
                     text: "Asosiy Menyu",
                   },
                 ],
               ],
               resize_keyboard: true,
             }),
           }
         );
       }
       if (msg.text === "Asosiy Menyu") {
         bot.sendMessage(
           chatId,
           "Quyidagi operatsion sistemalardan birini tanlang!!!",
           {
             reply_markup: JSON.stringify({
               keyboard: [
                 [
                   {
                     text: "Operatsion Sistema",
                   },
                 ],
                 [
                   {
                     text: "Arxivlar paroli",
                   }
                 ],
                 [
                   {
                     text: "Arxivdan chiqarish qollanmasi",
                   },
                   {
                     text: "Statistika",
                   },
                 ],
               ],
               resize_keyboard: true,
             }),
           }
         );
       }
       if (msg.text === "Android 9.0") {
         bot.sendMessage(chatId, "Android 9.0", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "32 bit",
                 },
                 {
                   text: "64 bit",
                 },
               ],
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
       if (msg.text === "Fedora") {
         bot.sendMessage(chatId, "Fedora", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "IoT",
                 },
                 {
                   text: "Workstation",
                 },
               ],
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
       if (msg.text === "BunsenLabs") {
         bot.sendMessage(
           chatId,
           "BunsenLabs",
           {
             reply_markup: JSON.stringify({
               keyboard: [
                 [
                   {
                     text: "x86",
                   },
                   {
                     text: "amd64",
                   },
                 ],
                 [
                   {
                     text: "Orqaga",
                   },
                   {
                     text: "Asosiy Menyu",
                   },
                 ],
               ],
               resize_keyboard: true,
             }),
           }
         );
       }
       if (msg.text === "Windows") {
         bot.sendMessage(
           chatId,
           "Windows",
           {
             reply_markup: JSON.stringify({
               keyboard: [
                 [
                   {
                     text: "x32",
                   },
                   {
                     text: "x64",
                   },
                 ],
                 [
                   {
                     text: "Orqaga",
                   },
                   {
                     text: "Asosiy Menyu",
                   },
                 ],
               ],
               resize_keyboard: true,
             }),
           }
         );
       }
       if (msg.text === "AndroidOs") {
         bot.sendMessage(chatId, "AndroidOs", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "Android 9.0",
                 }
               ],
               [
                {
                   text: "Prime OS",
                 }
               ],
               [
                 {
                   text: "Bliss OS",
                 },
                 
               ],
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
       if (msg.text === "x32") {
         bot.sendMessage(chatId, "Windows", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "Windows 10 |x32",
                 },
               ],
               [
                 {
                   text: "Windows 8 |x32",
                 },
                 {
                   text: "Windows 7 |x32",
                 },
               ],
               [
                 {
                   text: "Windows Vista |x32",
                 },
               ],
               [
                 {
                   text: "Windows XP |x32",
                 },
                 {
                   text: "Windows 98|x32",
                 },
               ],
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
       if (msg.text === "x64") {
         bot.sendMessage(chatId, "x64", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "Windows 11",
                 },
                 {
                   text: "Windows 10",
                 },
                 {
                   text: "Windows 8",
                 },
               ],
               [
                 {
                   text: "Windows 7",
                 },
                 {
                   text: "Windows Vista",
                 },
               ],
              
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
       if (msg.text === "Windows 11") {
         bot.sendMessage(chatId, "Windows 11", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "Orginal Obraz",
                 },
               ],
               [
                 {
                   text: "Windows 11 by SmokieBlahBlah",
                 },
               ],
               [
                 {
                   text: "Windows 11 21H2 by Tatata",
                 }
               ],
               [
                 {
                   text: "Windows 11 21H2 by OnSmile",
                 }
               ],
               [
                 {
                   text: "Windows 11 Compact&Full by flibustier",
                 }
               ],
               [
                 {
                   text: "Windows 11 21H2 Pro Install",
                 },
                 {
                   text: "Windows 11 21H2 rus gx",
                 }
               ],
               [
                {
                  text:"Windows 11 21H2 by Ovgorskiy"
                }
               ],
               [
                {
                  text:"Windows 11 21H2 Enterprice by Zosma"
                }
               ],
               [
                {
                  text:"Windows 11 21H2 Enterprice by Xalex"
                }
               ],
               [
                {
                  text:"Windows 11 21H2 by OneSmile"
                }
               ],
               [
                {
                  text:"Windows 11 IP LTSC by Djannet"
                }
               ],
               
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
       if (msg.text === "Orginal Obraz") {
         bot.sendMessage(chatId, "Orginal Obraz", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "Windows 11 Russian Pro 21H2",
                 },
               ],
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
       if (msg.text === "Windows 10 |x32") {
         bot.sendMessage(chatId, "Windows 10 |x32", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "1507",
                 },
                 {
                   text: "1511",
                 },
               ],
               [
                 {
                   text: "1607",
                 },
                 {
                   text: "1703",
                 },
                 {
                   text: "1709",
                 },
               ],
               [
                 {
                   text: "1803",
                 },
                 {
                   text: "1809",
                 },
               ],
               [
                 {
                   text: "1903",
                 },
                 
               ],
               [
                 {
                   text: "1909",
                 },
                 {
                   text: "2004",
                 },
                 {
                   text: "20H2",
                 },
                 {
                   text: "21H1",
                 },
                 
               ],
               [
                 {
                   text: "21H2",
                 },
                 
               ],
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
       if (msg.text === "Linux") {
         bot.sendMessage(chatId, "Linux", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "Ubuntu",
                 },
                 {
                   text: "Kali",
                 },
               ],
               [
                 {
                   text: "PureOS",
                 },
                 {
                   text: "Debian",
                 },
                 
               ],
               [
                 {
                   text: "CentOS",
                 },
                 {
                   text: "Puppy",
                 },
                 {
                   text: "BlackLab",
                 },
               ],
               [
                 {
                   text: "BunsenLabs",
                 },
               ],
               [
                 {
                   text: "Arch Linux",
                 },
                 {
                   text: "Slackware",
                 },
                 {
                   text: "Solus",
                 },
                 
               ],
               [
                 {
                   text: "Bodhi Linux",
                 },
                 {
                   text: "Xubuntu",
                 },
                                 
               ],
               [
                 {
                   text: "Fedora",
                  },
                ],
                [
                  {
                    text: "Zorin Linux",
                  },
                  {
                    text: "PCLinuxOS",
                  },                                
                ],
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
       if (msg.text === "Windows 10") {
         bot.sendMessage(chatId, "Windows 10 ", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "1507 |x64",
                 },
                 {
                   text: "1511 |x64",
                 },
               ],
               [
                 {
                   text: "1607 |x64",
                 },
                 {
                   text: "1703 |x64",
                 },
                 {
                   text: "1709 |x64",
                 },
               ],
               [
                 {
                   text: "1803 |x64",
                 },
                 {
                   text: "1809 |x64",
                 },
               ],
               [
                 {
                   text: "1903 |x64",
                 },
                 
               ],
               [
                 {
                   text: "1909 |x64",
                 },
                 {
                   text: "2004 |x64",
                 }                 
               ],
               [
                {
                   text: "20H2 |x64",
                 },
                 {
                   text: "21H1 |x64",
                 },
               ],
               [
                 {
                   text: "21H2 |x64",
                 },
               ],
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
       if (msg.text === "Windows 8") {
         bot.sendMessage(chatId, "Windows 8", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "Professional |x64",
                 }
               ],
               [
                 {
                   text: "Enterprice |x64",
                 }
               ],
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
       if (msg.text === "Windows 8 |x32") {
         bot.sendMessage(chatId, "Windows 8 |x32", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "Professional |x32",
                 }
               ],
               [
                 {
                   text: "Enterprice |x32",
                 }
               ],
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
       if (msg.text === "Windows 7") {
         bot.sendMessage(chatId, "Windows 7 |x32", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "Ultimate |x64",
                 },
               ],
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
       if (msg.text === "Windows 7 |x32") {
         bot.sendMessage(chatId, "Windows 7 |x32", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "Ultimate |x64",
                 },
               ],
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
       if (msg.text === "Windows XP |x32") {
         bot.sendMessage(chatId, "Windows XP |x32", {
           reply_markup: JSON.stringify({
             keyboard: [
               [
                 {
                   text: "Professional",
                 },
               ],
               [
                 {
                   text: "Chip",
                 },
               ],
               [
                 {
                   text: "Orqaga",
                 },
                 {
                   text: "Asosiy Menyu",
                 },
               ],
             ],
             resize_keyboard: true,
           }),
         });
       }
    if (msg.text === "Windows 98|x32") {
        bot.sendPhoto(msg.chat.id, "./img/w98.jpg");
        bot.sendMessage(chatId, "software_bot windows10 Windows 98|x32");
      }

    if (msg.text === "Windows 11 IP LTSC by Djannet") {
      bot.sendPhoto(msg.chat.id, "./img/djanet.jpg");
      bot.sendMessage(chatId, "software_bot Windows 11 IP LTSC by Djannet");
    }
    if (msg.text === "Windows 11 21H2 by OneSmile") {
      bot.sendPhoto(msg.chat.id, "./img/osm.jpg");
      bot.sendMessage(chatId, "software_bot Windows 11 21H2 by OneSmile");
    }
    if (msg.text === "Windows 11 21H2 Enterprice by Xalex") {
      bot.sendPhoto(msg.chat.id, "./img/xlx.jpg");
      bot.sendMessage(
        chatId,
        "software_bot Windows 11 21H2 Enterprice by Xalex"
      );
    }
    if (msg.text === "Windows 11 21H2 Enterprice by Zosma") {
      bot.sendPhoto(msg.chat.id, "./img/zsm.jpg");
      bot.sendMessage(
        chatId,
        "software_bot Windows 11 21H2 Enterprice by Zosma"
      );
    }
    if (msg.text === "Windows 11 21H2 by Ovgorskiy") {
      bot.sendPhoto(msg.chat.id, "./img/owg.jpg");
      bot.sendMessage(chatId, "software_bot Windows 11 21H2 by Ovgorskiy");
    }
    if (msg.text === "Windows 11 21H2 rus gx") {
      bot.sendPhoto(msg.chat.id, "./img/rusGx.jpg");
      bot.sendMessage(chatId, "software_bot Windows 11 21H2 rus gx");
    }
    if (msg.text === "Windows 11 21H2 Pro Install") {
      bot.sendPhoto(msg.chat.id, "./img/proI.jpg");
      bot.sendMessage(chatId, "software_bot Windows 11 21H2 Pro Install");
    }
    if (msg.text === "Windows 11 Compact&Full by flibustier") {
      bot.sendPhoto(msg.chat.id, "./img/f.jpg");
      bot.sendMessage(
        chatId,
        "software_bot Windows 11 Compact&Full by flibustier"
      );
    }
    if (msg.text === "Windows 11 21H2 by OnSmile") {
      bot.sendPhoto(msg.chat.id, "./img/onSmile.jpg");
      bot.sendMessage(chatId, "software_bot Windows 11 21H2 by OnSmile");
    }
    if (msg.text === "Windows 11 21H2 by Tatata") {
      bot.sendPhoto(msg.chat.id, "./img/tatata.jpg");
      bot.sendMessage(chatId, "software_bot Windows 11 21H2 by Tatata");
    }
    if (msg.text === "Windows 11 by SmokieBlahBlah") {
      bot.sendPhoto(msg.chat.id, "./img/blah.jpg");
      bot.sendMessage(
        chatId,
        "software_bot  Windows 11 by SmokieBlahBlah"
      );
    }
    if (msg.text === "Windows 11 Russian Pro 21H2") {
      bot.sendPhoto(msg.chat.id, "./img/21H2Rus.jpg");
      bot.sendMessage(
        chatId,
        "software_bot Windows 11 Russian Pro 21H2"
      );
    }
    if (msg.text === "Chip") {
      bot.sendPhoto(msg.chat.id, "./img/chip.jpg");
      bot.sendMessage(chatId, "software_bot windows10 Chip");
    }
    if (msg.text === "Professional |x64") {
      bot.sendPhoto(msg.chat.id, "./img/px32.jpg");
      bot.sendMessage(chatId, "software_bot windows10 Professional |x64");
    }
    if (msg.text === "Professional") {
      bot.sendPhoto(msg.chat.id, "./img/professional.jpg");
      bot.sendMessage(chatId, "software_bot windows10 Professional");
    }
    if (msg.text === "Ultimate |x64") {
      bot.sendPhoto(msg.chat.id, "./img/u.jpg");
      bot.sendMessage(chatId, "software_bot windows10 Ultimate |x64");
    }
    if (msg.text === "Ultimate") {
      bot.sendPhoto(msg.chat.id, "./img/u.jpg");
      bot.sendMessage(chatId, "software_bot windows10 Ultimate");
    }
    if (msg.text === "Windows Vista |x32") {
      bot.sendPhoto(msg.chat.id, "./img/v.jpg");
      bot.sendMessage(chatId, "software_bot windows10 Windows Vista |x32");
    }
    if (msg.text === "Windows Vista") {
      bot.sendPhoto(msg.chat.id, "./img/v.jpg");
      bot.sendMessage(chatId, "software_bot windows10 Windows Vista |x64");
    }
    if (msg.text === "Enterprice |x64") {
      bot.sendPhoto(msg.chat.id, "./img/Ex32.jpg");
      bot.sendMessage(chatId, "software_bot windows10 Enterprice |x64");
    }
    if (msg.text === "Enterprice |x32") {
      bot.sendPhoto(msg.chat.id, "./img/Ex32.jpg");
      bot.sendMessage(chatId, "software_bot windows10 Enterprice |x32");
    }
    if (msg.text === "Professional |x32") {
      bot.sendPhoto(msg.chat.id, "./img/px32.jpg");
      bot.sendMessage(chatId, "software_bot windows10 Professional |x32");
    }
    if(msg.text ===  "1507 |x64"){
        bot.sendPhoto(msg.chat.id, "./img/1507.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1507 |x64')
    }
    if(msg.text ===  "1507"){
        bot.sendPhoto(msg.chat.id, "./img/1507.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1507')
    }
    if(msg.text ===  "1511 |x64"){
        bot.sendPhoto(msg.chat.id, "./img/1511.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1511 |x64')
    }
    if(msg.text ===  "1511"){
        bot.sendPhoto(msg.chat.id, "./img/1511.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1511')
    }
    if(msg.text ===  "1607 |x64"){
        bot.sendPhoto(msg.chat.id, "./img/1607.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1607 |x64')
    }
    if(msg.text ===  "1607"){
        bot.sendPhoto(msg.chat.id, "./img/1607.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1607')
    }
    if(msg.text ===  "1703 |x64"){
        bot.sendPhoto(msg.chat.id, "./img/1703.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1703 |x64')
    }
    if(msg.text ===  "1703"){
        bot.sendPhoto(msg.chat.id, "./img/1703.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1703')
    }
    if(msg.text ===  "1709 |x64"){
        bot.sendPhoto(msg.chat.id, "./img/1709.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1709 |x64')
    }
    if(msg.text ===  "1709"){
        bot.sendPhoto(msg.chat.id, "./img/1709.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1709')
    }
    if(msg.text ===  "1803 |x64"){
        bot.sendPhoto(msg.chat.id, "./img/1803.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1803 |x64')
    }
    if(msg.text ===  "1803"){
        bot.sendPhoto(msg.chat.id, "./img/1803.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1803')
    }
    if(msg.text ===  "1809 |x64"){
        bot.sendPhoto(msg.chat.id, "./img/1809.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1809 |x64')
    }
    if(msg.text ===  "1809"){
        bot.sendPhoto(msg.chat.id, "./img/1809.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1809')
    }
    if(msg.text ===  "1903 |x64"){
        bot.sendPhoto(msg.chat.id, "./img/1903.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1903 |x64')
    }
    if(msg.text ===  "1903"){
        bot.sendPhoto(msg.chat.id, "./img/1903.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1903')
    }
    if(msg.text ===  "1909 |x64"){
        bot.sendPhoto(msg.chat.id, "./img/1909.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1909 |x64')
    }
    if(msg.text ===  "1909"){
        bot.sendPhoto(msg.chat.id, "./img/1909.jpg");
        bot.sendMessage(chatId,'software_bot windows10 1909')
    }
    if(msg.text ===  "2004 |x64"){
        bot.sendPhoto(msg.chat.id, "./img/2004.jpg");
        bot.sendMessage(chatId,'software_bot windows10 2004 |x64')
    }
    if(msg.text ===  "2004"){
        bot.sendPhoto(msg.chat.id, "./img/2004.jpg");
        bot.sendMessage(chatId,'software_bot windows10 2004')
    }
    if(msg.text ===  "20H2 |x64"){
        bot.sendPhoto(msg.chat.id, "./img/20H2.jpg");
        bot.sendMessage(chatId,'software_bot windows10 20H2 |x64')
    }
    if(msg.text ===  "20H2"){
        bot.sendPhoto(msg.chat.id, "./img/20H2.jpg");
        bot.sendMessage(chatId,'software_bot windows10 20H2')
    }
    if(msg.text ===  "21H1 |x64"){
        bot.sendPhoto(msg.chat.id, "./img/21H1.jpg");
        bot.sendMessage(chatId,'software_bot windows10 21H1 |x64')
    }
    if (msg.text === "PCLinuxOS") {
      bot.sendPhoto(msg.chat.id, "./img/pcl.jpg");
      bot.sendMessage(chatId, "software_bot PCLinuxOS");
    }
    if (msg.text === "Zorin Linux") {
      bot.sendPhoto(msg.chat.id, "./img/zl.jpg");
      bot.sendMessage(chatId, "software_bot Zorin Linux");
    }
    if (msg.text === "Xubuntu") {
      bot.sendPhoto(msg.chat.id, "./img/xl.jpg");
      bot.sendMessage(chatId, "software_bot xubuntu");
    }
    if (msg.text === "Bodhi Linux") {
      bot.sendPhoto(msg.chat.id, "./img/bodl.jpg");
      bot.sendMessage(chatId, "software_bot Bodhi LInux");
    }
    if (msg.text === "Solus") {
      bot.sendPhoto(msg.chat.id, "./img/solus.jpg");
      bot.sendMessage(chatId, "software_bot solus");
    }
    if (msg.text === "Slackware") {
      bot.sendPhoto(msg.chat.id, "./img/sw.jpg");
      bot.sendMessage(chatId, "software_bot slackware");
    }
    if (msg.text === "Arch Linux") {
      bot.sendPhoto(msg.chat.id, "./img/al.jpg");
      bot.sendMessage(chatId, "software_bot Archlinux");
    }
    if (msg.text === "x86") {
      bot.sendPhoto(msg.chat.id, "./img/86.jpg");
      bot.sendMessage(chatId, "software_bot x86");
    }
    if (msg.text === "amd64") {
      bot.sendPhoto(msg.chat.id, "./img/amd.jpg");
      bot.sendMessage(chatId, "software_bot amd64");
    }
    if (msg.text === "BlackLab") {
      bot.sendPhoto(msg.chat.id, "./img/bll.jpg");
      bot.sendMessage(chatId, "software_bot blacklab");
    }
    if (msg.text === "Puppy") {
      bot.sendPhoto(msg.chat.id, "./img/puppy.jpg");
      bot.sendMessage(chatId, "software_bot puppy");
    }
    if (msg.text === "CentOS") {
      bot.sendPhoto(msg.chat.id, "./img/centos.jpg");
      bot.sendMessage(chatId, "software_bot centos");
    }
    if (msg.text === "Debian") {
      bot.sendPhoto(msg.chat.id, "./img/debian.jpg");
      bot.sendMessage(chatId, "software_bot debian");
    }
    if (msg.text === "PureOS") {
      bot.sendPhoto(msg.chat.id, "./img/pureos.jpg");
      bot.sendMessage(chatId, "software_bot pureos");
    }
    if (msg.text === "Kali") {
      bot.sendPhoto(msg.chat.id, "./img/kali.jpg");
      bot.sendMessage(chatId, "software_bot kali");
    }
    if (msg.text === "Ubuntu") {
      bot.sendPhoto(msg.chat.id, "./img/ubuntu.jpg");
      bot.sendMessage(chatId, "software_bot Ubuntu");
    }
    if (msg.text === "IoT") {
      bot.sendPhoto(msg.chat.id, "./img/IoT.jpg");
      bot.sendMessage(chatId, "software_bot IoT");
    }
    if (msg.text === "Workstation") {
      bot.sendPhoto(msg.chat.id, "./img/wl.jpg");
      bot.sendMessage(chatId, "software_bot Workstation");
    }
    if(msg.text ===  "21H1"){
        bot.sendPhoto(msg.chat.id, "./img/21H1.jpg");
        bot.sendMessage(chatId,'software_bot windows10 21H1')
    }
    if(msg.text ===  "21H2 |x64"){
        bot.sendPhoto(msg.chat.id, "./img/21H2.jpg");
        bot.sendMessage(chatId,'software_bot windows10 21H2 |x64')
    }
    if (msg.text === "Prime OS") {
      bot.sendPhoto(msg.chat.id, "./img/primeos.jpg");
      bot.sendMessage(chatId, "software_bot Prime OS");
    }
    if (msg.text === "Bliss OS") {
      bot.sendPhoto(msg.chat.id, "./img/blissos.jpg");
      bot.sendMessage(chatId, "software_bot Bliss OS");
    }
    if (msg.text === "64 bit") {
      bot.sendPhoto(msg.chat.id, "./img/a64.jpg");
      bot.sendMessage(chatId, "software_bot 64 bit");
    }
    if (msg.text === "32 bit") {
      bot.sendPhoto(msg.chat.id, "./img/a32.jpg");
      bot.sendMessage(chatId, "software_bot 32 bit");
    }
    if (msg.text === "MacOs") {
      bot.sendPhoto(msg.chat.id, "./img/macos.jpg");
      bot.sendMessage(chatId, "software_bot MacOs");
    }
    if(msg.text ===  "21H2"){
        bot.sendPhoto(msg.chat.id, "./img/21H2.jpg");
        bot.sendMessage(chatId,'software_bot windows10 21H2')
    }
    if(msg.text ===  "Arxivlar paroli"){
        bot.sendPhoto(msg.chat.id, "./img/1.jpg", {
          caption: `
             <strong> Arxiv paroli rasmda ko'rsatilgan 😊</strong>
            `,
          parse_mode: "HTML",
        });
    }
    if (msg.text === "Arxivdan chiqarish qollanmasi") {
      bot.sendPhoto(msg.chat.id, "./img/2.jpg", {
        caption: `
             <strong> Kop faylli arxivlarni arxivdan xalos qilish uchun qollanma !!!</strong>
            `,
        parse_mode: "HTML",
      });
    }
    if (msg.text === "Statistika") {
      bot.sendPhoto(msg.chat.id, "./img/3.jpg", {
        caption: `
             <strong> Statistika !!!</strong>
            `,
        parse_mode: "HTML",
      });
    }
    if (msg.text === "Orqaga") {
      console.log(msg);
    }
})