const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env.token, 
prefix: "$getServerVar[prefix]", 
intents: "all" 
})  

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

////////// Callbackler \\\\\\\\\\
bot.onJoin()
bot.onLeave()
bot.onMessage()
bot.onInteractionCreate()
bot.onMemberUpdate()
bot.onMessageDelete()
bot.onMessageUpdate()

////////// Durum \\\\\\\\\\
bot.status({
text:"Eklenen Kodları",
type:"WATCHING",
status:"online",
time: 12
})

////////// Variableler \\\\\\\\\\
bot.variables({
  vip:"940931289601671238",
  banhammer:"940932758547619841",
  mutehammer:"954102620388216902",
  subhammer:"940931519319515187",
  subrol:"940931145783189545",
  member:"940930568147845170",
  tavsiyelog:"941959571335938068",
  admin:"940932232456052756",
  staff:"940931897314406491",
  tkategori:"940988399525969961",
  prefix:".",
  snipe1:"",
  snipe2:"",
  snipe3:"",
  afk:"no",
  afksayı:"0",
  afksebep:"",
  subsayı:"0",
  staffpuan:"0",
  tticket:"",
  tsayı:"0",
  tuser:"",
  ykategori:"",
  ylog:"",
  ybaşvuru:"no",
  ysoru1:"",
  ysoru2:"",
  ysoru3:"",
  ysoru4:"",
  ysoru5:"",
  ycevap1:"",
  ycevap2:"",
  ycevap3:"",
  ycevap4:"",
  ycevap5:"",
  cross:"<:flora_cross:950475138778943588>",
  tick:"<:flora_tick:950474824462004224>",
  spams:"kapalı",
  spam:"-3",
  hex:"RANDOM"
})

//////////// Komutlar \\\\\\\\\\


//Raid engel 
bot.command({
  name:"$alwaysExecute",
  code:`
  $onlyIf[$mentionedUsersCount<=4;{execute:raid}]
  $onlyIf[$mentioned[1;no]!=undefined;]
  $onlyIf[$hasPerms[$guildID;$authorID;admin]!=true;]
  `
  })

bot.awaitedCommand({
  name:"raid",
  code:`
  $timeoutMember[$guildID;$authorID;30m;no;5'den fazla etiket]
  $author[1;Kullanıcı mutelendi!;$authorAvatar;https://discordapp.com/users/$authorID]
  $addField[1;Sebep;\`Raid Engel ( 5'den fazla etiket )\`]
  $addField[1;Yetkili;<@$clientID> - \`($clientID)\`]
  $addField[1;Kullanıcı;<@$authorID> - \`($authorID)\`]
  $color[1;BLACK]
  $deleteCommand
  `
  })

//Link engel
bot.command({
  name:"$alwaysExecute",
  code:`
  $author[1;Kullanıcı uyarıldı!;$authorAvatar;https://discordapp.com/users/$authorID]
  $addField[1;Sebep;\`Link Engel\`]
  $addField[1;Yetkili;<@$clientID> - \`($clientID)\`]
  $addField[1;Kullanıcı;<@$authorID> - \`($authorID)\`]
  $color[1;BLACK]
  $deleteCommand
  $onlyIf[$checkContains[$channelID;944985537482219540]==false;]
  $onlyIf[$checkContains[$toLowercase[$message];https://;discord.gg/;discord.com/;gg/;http://;.glitch.me;.repl.co;.com;.xyz;.tk;dis.gd/]==true;]
  $onlyIf[$hasPerms[$guildID;$authorID;admin]==false;]
  $onlyIf[$hasRoles[$guildID;$authorID;940931380106379295]==false;]  `
  })

bot.leaveCommand({
channel:"948138071071805500",
code:`$senDM[Angel Code Share Sunucusundan Çıkış Yaptığınız İçin _Çıkış Ban_ Sebebinden Banlandınız.Yeniden Girmek İçin Yöneticilerle Konuşunuz https://discord.gg/Yg2zeMeAmK;$authorID;yes]
$ban[$authorID;$guildID;;Çıkış Ban Sistemi]
$onlyBotPerms[ban;Üzgünüm ama **Üyeleri Yasakla** iznim olmadığı için **$userTag ( $authorID )** adlı kullanıcıyı banlayamadım]`,
});

bot.joinCommand({ 
   channel:"954099561897525348", 
   code:` 
<@!$authorID>
$deleteIn[2s]
`})

bot.joinCommand({ 
   channel:"940990026987212850", 
   code:` 
<@!$authorID>
$deleteIn[2s]
`})

bot.joinCommand({ 
   channel:"941811289938882621", 
   code:` 
<@!$authorID>
$deleteIn[2s]
`})

bot.banAddCommand({
  channel:"954101145012428810",
  code:`
  $author[1;$userTag;$authorAvatar]
  $description[1;<@$authorID> Sunucudan yasaklandı.
  
Sebep: **$getBanReason[$authorID]**]
  $footer[1;ID: $authorID]
  $addTimestamp[1;$datesTamp]
  $thumbnail[1;$authorAvatar]
  $color[1;RANDOM]
  `
  })
bot.onBanAdd()

bot.banRemoveCommand({
  channel:"954101145012428810",
  code:`
  $author[1;$userTag;$authorAvatar]
  $description[1;<@$authorID> Yasağı kaldırıldı.]
  $footer[1;ID: $authorID]
  $addTimestamp[1;$datesTamp]
  $thumbnail[1;$authorAvatar]
  $color[1;RANDOM]
  `
  })
bot.onBanRemove() 

bot.command({
name: "banner",
code:`$description[1;<@$mentioned[1;yes]>] $image[1;$getUserBanner[$mentioned[1;yes]]] $footer[1;$userTag Tarafından İstendi]
  $color[1;BLACK]
  
  `
  })


bot.command({
name:"saas-aç",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[evet]・Başarıyla Sa As Sistemini Aktif Ettin**]
$setServerVar[saas;açık]
$onlyIf[$getServerVar[saas]!=açık;{newEmbed:{description:**$customEmoji[yasak] <@$authorID>,Selam Sistemi Zaten Aktif Kapatmak İçin \`?saas-kapat\`**}{color:RANDOM}}]
$onlyPerms[managemessages;{newEmbed:{description:**$customEmoji[yasak] Bu Komutu Kullanmak İçin \`Mesajları Yönet\` Yetkin Olmalı**}{color:RANDOM}}]
$suppressErrors
`
}) 

bot.command({
name:"saas-kapat",
code:`
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;**$customEmoji[evet]・Başarıyla Sa As Sistemini Kapadın**]
$setServerVar[saas;kapalı]
$onlyIf[$getServerVar[saas]!=kapalı;{newEmbed:{description:**$customEmoji[yasak] <@$authorID>,Selam Sistemi Zaten Kapalı Açmak İçin \`?saas-aç\`**}{color:RANDOM}}]
$onlyPerms[managemessages;{newEmbed:{description:**$customEmoji[yasak] Bu Komutu Kullanmak İçin \`Mesajları Yönet\` Yetkin Olmalı**}{color:RANDOM}}]
$suppressErrors
`
}) 

bot.command({
  name:"sa",
  code:`
  $onlyIf[$message!=sa;**$customEmoji[pikacu] <@$authorID> Aleyküm Selam Hoşgeldin**]
  $onlyIf[$getServerVar[saas]==açık;]`,
  nonPrefixed: true
})  

bot.command({
  name:"selamun aleyküm",
  code:`
  **$customEmoji[pikacu] <@$authorID> Aleyküm Selam Hoşgeldin**
  $onlyIf[$getServerVar[saas]==açık;]`,
  nonPrefixed: true
})  
bot.command({
  name:"selamün aleyküm",
  code:`
  **$customEmoji[pikacu] <@$authorID> Aleyküm Selam Hoşgeldin**
  $onlyIf[$getServerVar[saas]==açık;]`,
  nonPrefixed: true
})  

bot.command({
  name:"sea",
  code:`
  **$customEmoji[pikacu] <@$authorID> Aleyküm Selam Hoşgeldin**
  $onlyIf[$getServerVar[saas]==açık;]`,
  nonPrefixed: true
})  

bot.command({
  name:"Sa",
  code:`
  $onlyIf[$message!=Sa;**$customEmoji[pikacu] <@$authorID> Aleyküm Selam Hoşgeldin**]
  $onlyIf[$getServerVar[saas]==açık;]`,
  nonPrefixed: true
})  

bot.command({
  name:"SA",
  code:`
  $onlyIf[$message!=SA;**$customEmoji[pikacu] <@$authorID> Aleyküm Selam Hoşgeldin**]
  $onlyIf[$getServerVar[saas]==açık;]`,
  nonPrefixed: true
})  

bot.command({
  name:"sA",
  code:`
  $onlyIf[$message!=sA;**$customEmoji[pikacu] <@$authorID> Aleyküm Selam Hoşgeldin**]
  $onlyIf[$getServerVar[saas]==açık;]`,
  nonPrefixed: true
})   


bot.variables({
saas:"kapalı",
})  
