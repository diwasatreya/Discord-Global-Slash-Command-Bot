const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
	name: 'covid',
	description: 'See corona status.',
	commandOptions: [
		{
			type: 3,
            name: "country",
            description: "String to search",
            required: true
		}
    ],
	global: true,
	async execute(interaction) {

        const args1 = interaction.data.options[0].value.split(" ")
        const search = args1.join('_');

        const country = encodeURI(search)

        const res = await fetch("https://covid19.mathdro.id/api/countries/" + country);
        const data = await res.json();
let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

      
        const embed = new Discord.MessageEmbed()
            .setColor(`#00b140`)
            .setTitle(`Covid 19 Status of ${country}`)
            .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
            

            client.api.interactions(interaction.id, interaction.token).callback.post({data: {
                type: 4,
                data: {
                        embeds: [embed],
                        
                    }
                }
            })
          
	},
};
