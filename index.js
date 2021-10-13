require('dotenv').config();
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () =>{
    console.log(`Logged in as: ${client.user.tag} successfully`);
});

client.on('message', async message =>{
    if(message.author.bot) return;
    if(message.author.id === '506226451339542541') {
        if(message.content.toLowerCase().includes('peter griffin')){
            console.log("i did a thing");
            message.channel.send('Peter Griffin I am him hehehe.');
        }
        
    }
    
});


client.login(process.env.token);
