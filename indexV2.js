const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

// IDs reales
const ID_DEL_BOT_OBJETIVO = '1237947863728918588';
const ID_CANAL_ORIGINAL = '1235041963191832697';
const ID_CANAL_DESTINO = '1243654671533609020';
const ID_DEL_ROL = '794090687300632616';

client.on('ready', () => {
  console.log(`✅ Conectado como ${client.user.username}`);
});

client.on('messageCreate', async (message) => {
  if (
    message.author.id === ID_DEL_BOT_OBJETIVO &&
    message.channel.id === ID_CANAL_ORIGINAL &&
    message.embeds.length > 0
  ) {
    const embed = message.embeds[0];

    const titulo = embed.title || '';
    const descripcion = embed.description || '';
    const footer = embed.footer?.text || '';
    const campos = embed.fields?.map(f => `${f.name} ${f.value}`).join('\n') || '';

    const textoCompleto = `${titulo}\n${descripcion}\n${footer}\n${campos}`;

    if (textoCompleto.toLowerCase().includes('will be hosted in 2 hours')) {
      const canalDestino = await client.channels.fetch(ID_CANAL_DESTINO);
      if (canalDestino) {
          canalDestino.send(`<@&${ID_DEL_ROL}> 💀 ${titulo} Double Coins will be hosted in 2 hours in Plasma Survival`);
      }
    }
  }
});


// 🛡️ Tu token alterno
client.login('MTM4OTg5Nzk1OTM1NzAyNjM3Nw.G5ss8d.JvHiO4XnDe3vPSlEIV9a-MEOS8Q0yY5_5eQHy4');
