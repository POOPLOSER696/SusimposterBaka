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
        if(message.content.toLowerCase().includes('peter griffin')) {
            console.log("You said Peter in a server!");
            message.channel.send('Peter Griffin I am him hehehe.');
        }
        
    }
    if(message.author.id !== '506226451339542541') {
        if(message.content.toLowerCase().includes('peter griffin i am him')) {
            console.log("someone ELSE TRIED TO SAY PETER GRIFFIN!");
            message.channel.send("Dude. Not cool :unamused: ");
        }
            
    }
    if(message.content.toLowerCase().includes('burger')) {
        console.log("peter is hungry");
        message.channel.send("Can i have burger? :pleading_face::point_right::point_left:");
    }
    if(message.content.toLowerCase().includes('i farded')) {
        console.log("someone farded");
        message.channel.send("No fard. Only eyes, only shid. No fard.");
    
    }
});


client.login(process.env.token);
