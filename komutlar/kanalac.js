module.exports = {
name:"kanal-aç",
code:`
$author[1;Kanal Oluşturuldu;$userAvatar]
$description[1;
<@$authorID> Tarafından $messageSlice Adlı Kanal Oluşturuldu]
$thumbnail[1;$userAvatar]
$footer[1;$username Kullandı]
$addTimestamp[1;$datesTamp]
$createChannel[$guildID;$messageSlice[2;10];text;;$message[2]]
$onlyIf[$hasRoles[$guildID;$authorID;940931380106379295]==true;sg]

`}
