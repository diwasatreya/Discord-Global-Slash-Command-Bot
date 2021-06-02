const Discord = require('discord.js')
const fs = require('fs');

module.exports = {
	name: 'help',
	description: 'Shows all slash commands',
	commandOptions: null,
    global: true,
	execute(interaction) {
        const ram = process.memoryUsage().heapUsed / 1024 / 1024
        const botAuthor = client.users.cache.get("804299863277174805")
        const dir = './commands';

        fs.readdir(dir, (err, files) => {
            const infoembed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Recluse Bot')
                .setThumbnail(client.user.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
                .addFields(
                    { name: '8ball', value: `Ask a question it will reply`, inline: true },
                    { name: 'botinfo', value: `Shows informations`, inline: true },
                    { name: "diceroll", value: `Roll a dice`, inline: true}
                )
                .addFields(
                    { name: 'help', value: `Shows all slash commands available`, inline: true },
                    { name: 'imgsearch', value: `Search image in google`, inline: true},
                    { name: 'meme', value: `Shows funny memes`, inline: true},
                     { name: 'musicinfo', value: `Gives you informations of given music`, inline: true},
                      { name: 'ping', value: `Pong`, inline: true},
                       { name: 'wiki', value: `Search words in wikipedia`, inline: true},
                       { name: 'covid', value: `Shows covid status`, inline: true},
                       { name: 'invite', value: `Gives you invite link of bot`, inline: true},
                )
                .setFooter(client.user.tag, client.user.displayAvatarURL({ size: 256, format: 'png', dynamic: true }))
                .setTimestamp()

            client.api.interactions(interaction.id, interaction.token).callback.post({data: {
                type: 4,
                data: {
                        embeds: [infoembed]
                    }
                }
            })
        });
	},
};
