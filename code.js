/**
 * Discord bot which notifies a server that it's rat time.
 * Used this site as a guide:
 *  https://blog.syntonic.io/2016/10/22/programming-a-discord-bot/
 * 
 * @author hornetfighter515 (ifb9649@rit.edu)
 */

const Discord = require('discord.js');
const bot = new Discord.Client();
const config =  require('./parts/config.json');

const token = config.TOKEN;

const image_getter = require("./parts/discord_image_formatter.js");

// guts of the program
bot.on('message', message => {
    // check to make sure that the bot won't reply to itself
    if(message.author.bot) return;
    
    var text = message.content;
    var response = '';

    if(text.match("rat", "i")){
        // we want to get a rat image
        response = "Not yet implemented. Ask me again later!";
    }else if(text.match("ping","i")){
        response = "pong";
    }

    message.channel.send(response);
});

bot.login(token);
