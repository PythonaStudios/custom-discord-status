var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Up to 20% of Pythona Studios products (valid till: 1/4/2021)",
assets : {
large_image : "pythona_studios",
large_text : "Pythona Studios CEO" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "WEBSITE" , url : "https://pythonastudios.com"},{label : "SERVER",url : "https://g9.yt/psdcrd"}]
}
})
})
client.login({ clientId : "804095585509572618" }).catch(console.error);