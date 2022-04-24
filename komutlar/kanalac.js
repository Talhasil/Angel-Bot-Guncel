module.exports = {
name:"kanal-aç",
code:`
$author[1;Kanal Oluşturuldu;$userAvatar]
$description[1;
<@$authorID> Tarafından #$messageSlice[1;10] Adlı Kanal Oluşturuldu]
$thumbnail[1;$userAvatar]
$footer[1;$username Kullandı]
$color[1;RANDOM]
$addTimestamp[1;$datesTamp]
$createChannel[$guildID;$messageSlice[1;10];text;;$message[1]]
$cooldown[5m;Sayın Yetkili 5 Dakikada Bir Kod Ekleyebilirsin]
$onlyIf[$hasRoles[$guildID;$authorID;940931380106379295]==true;Yetkin Yok Güzelim]
`} 
