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

    if(response != '' && response != null)
        message.channel.send(response);
});

bot.login(token);


bot.on('ready',()=>{

    //bot.setTimeout(rat_time, millisecondsTilFour);
    var channel = bot.channels.cache.get('695758384711860244');

    setTimeout(() => {
        //console.log(channel.type);
        channel.send("it is rat time")
           .catch(console.error);
      }, ( new Date().setHours(20, 12, 0, 0) - Date.now() + 1000*60*60*24 ) % (1000*60*60*24) );


    bot.user.setActivity('Bad Rats', { type: 'PLAYING' })
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
});

function rat_time(){
    var channel = bot.channels.cache.get('695758384711860244');
    console.log(channel.type);
    channel.send("it is rat time")
       .catch(console.error);
}


