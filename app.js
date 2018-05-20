// Shit
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`I am ready!`);
});

// Prefix
const prefix = "!";



//client.on("guildCreate", guild => {
  //guild.defaultChannel.sendMessage(`test`);
  
  

//})



//client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  //if (!message.guild) return;

  /*if (message.content === '/join') { -------------------------------------------------------------------------
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  
}); -------------------------------------------------------------------------------------------------------------- */



// Commands
client.on('message', message => {
  msg = message.content.toLowerCase();

    if (message.author.bot) return;
    if (!message.content.startsWith("!")) return;

    let args = message.content.split(" ").slice(1);

  // !game
  if (msg.startsWith(prefix + "game")){
    if (message.member.hasPermission("ADMINISTRATOR")){
    var argument = message.content.substr("game ".length);
    client.user.setPresence({ status:'online', game: {name: argument }});
    /*message.channel.send({embed: {
      title: "Game",
      color: 3447003,
      description: `Game of the bot has been changed to "${argument} "!`
    }});*/
    }
    if (!message.member.hasPermission("ADMINISTRATOR")){
      message.channel.send({embed: {
        title: "Invalid permissions",
        color: 3447003,
        description: "You do not have the required permissions to perform this action \n \n **Permission required: \"Administrator\"** "
      }})
    }
  }


  // !avatar [mention] (Returns a link to the profile picture of the mentioned user)
  if (msg.startsWith(prefix + "avatar")){
    let member = message.mentions.members.first();
    message.channel.sendMessage(member.user.avatarURL);
    message.delete();
  }


 



  
  
  // !summon (puts the bot in the channel you're in)


  //if (msg.startsWith(prefix + "summon")){
    //if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
      //messge.channel.sendMessage("Connected");
    //})

  //}




  // !roleinfo (gives information about the role)
  if (msg.startsWith(prefix + "roleinfo")){
    var argument = message.content.substr("roleinfo ".length);
    
    let Role = message.guild.roles.find("name", argument);
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
    title: "Invite code",
    url: "https://discordapp.com/api/oauth2/authorize?client_id=443053206071934997&permissions=0&scope=bot",
    description: "Role Information",
    fields: [{
      name: "Role name",
      value: `${Role}`
    }]
    }})
  }
  
  
  // !settings (needs to be further edited, should be the server settings of the bot)
  if (msg.startsWith(prefix + "settings")){
    if (message.member.hasPermission("ADMINISTRATOR")){
      message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
      title: "Invite code",
      url: "https://discordapp.com/api/oauth2/authorize?client_id=443053206071934997&permissions=0&scope=bot",
      description: "Settings",
      fields: [{
        name: "Verify role",
        value: "to be further edited"

      },
    {
      name: "Verified role",
      value: "To be further edited"
    }],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© MaasBot"
    } 
      } 
      })
    }
    if (!message.member.hasPermission("ADMINISTRATOR")){
      message.channel.send({embed: {
        color: 3447003,
        description: "You do not have the required permissions to perform this action \n \n **Permission required: \"Administrator\"** "
      }})
    }
  }
  
  
  
  // !test
  if (msg.startsWith(prefix + "test")){
    if (message.member.hasPermission("ADMINISTRATOR")){
      message.channel.sendMessage('Should work');
    }
    if (!message.member.hasPermission("ADMINISTRATOR")){
      message.channel.send({embed: {
        color: 3447003,
        description: "You do not have the required permissions to perform this action \n \n **Permission required: \"Administrator\"** "
      }});
    }
  }else


    // !botinfo (gives some information about the bot)
    if (msg.startsWith(prefix + "botinfo")){
      message.channel.send({embed: {
        color: 3447003,
        author: {
          name: "MaasBot information",
          icon_url: client.user.avatarURL
        },
        title: "Invite code",
        url: "https://discordapp.com/api/oauth2/authorize?client_id=443053206071934997&permissions=0&scope=bot",
        description: "The prefix of this server is \"!\"\n\nMaasBot is a discord bot created by @MeesEnz#2770\nThe bot is still in major development and a list for all the available commands is being created.",
        fields: [{
            name: "ping",
            value: "Will reply with \"pong\" so you can see if the bot is working."
          },
          {
            name: "mathplus/mathminus/mathmultiply/mathdivide",
            value: "Will either add, subtract, multiply or divide the given numbers. There is no limit to the amount of numbers you can use, discord has a limit of 2000 characters by default."
          },
          {
            name: "say [sentence]",
            value: "Will repeat the given sentence or word(s)"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© MaasBot official"
        }
      }
    });
    }else


    // !say (replies with the arguments that have been said)
    if (msg.startsWith(prefix + "say")){
      message.channel.sendMessage(args.join(" "))
    }else


    // !mathplus (adds the two given numbers)
    if (msg.startsWith(prefix + "mathplus")){
      let numArray = args.map(n=> parseInt(n));
      let total = numArray.reduce( (p, c) => p+c);
      message.channel.sendMessage(total);
    }else


    // !mathminus (subtracts the given numbers)
    if (msg.startsWith(prefix + "mathminus")){
      let numArray = args.map(n=> parseInt(n));
      let total = numArray.reduce( (p, c) => p-c);
      message.channel.sendMessage(total);
    }else


    // !mathmultiply (multiplies the given numbers)
    if (msg.startsWith(prefix + "mathmultiply")){
      let numArray = args.map(n=> parseInt(n));
      let total = numArray.reduce( (p, c) => p*c);
      message.channel.sendMessage(total);
    }else


    // !mathdivide (divides the given numbers)
    if (msg.startsWith(prefix + "mathdivide")){
      let numArray = args.map(n=> parseInt(n));
      let total = numArray.reduce( (p, c) => p/c);
      message.channel.sendMessage(total);
    }else
    

    // !ping (replies with "pong")
    if (msg.startsWith(prefix + "ping")) {
      message.channel.send({embed: {
        color: 3447003,
        title: "Client ping",
        description: 'pong' + " " + "***" + client.ping + "***" + "ms"
      }});
  }else


    // !foo (replies with "bar!")
    if (message.content.startsWith(prefix + "foo")) {
    message.channel.sendMessage("bar!");
  }

  //message.channel.send({embed: {
    //color: 3447003,
    //title: "Error",
    //description: "That is not a valid command."
  //}})
});



// Bot Token
clclient.login(process.env.'NDQzMDUzMjA2MDcxOTM0OTk3.DdHw-g.wy3HX3PZVmvrTcnccTRV_5gzOCY'); //NDQzMDUzMjA2MDcxOTM0OTk3.DdHw-g.wy3HX3PZVmvrTcnccTRV_5gzOCY
