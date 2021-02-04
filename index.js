var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "yourdescription",
assets : {
large_image : "imagename",
large_text : "" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "WEBSITE" , url : "https://pythonastudios.com"},{label : "SERVER",url : "https://g9.yt/psdcrd"}]
}
})
})
client.login({ clientId : "ApplicationsID" }).catch(console.error);
