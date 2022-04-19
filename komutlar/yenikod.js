module.exports = {
name:"yenikod",
code:`
$thumbnail[1;$userAvatar]
<#$mentionedChannels[1]>
$author[1;Yeni Kod Eklendi;https://media.discordapp.net/attachments/954100087338971146/966105174592598016/bee8012e03375435f4bf4f3230310aec.webp]
$description[1;<@$authorID> **İsimli Yetkili** \`$noMentionMessage\` **Adlı Bir Kod Ekledi**

**Kodun Bulunduğu Kanal**
<#$mentionedChannels[1]>

**Kod Kategorisi**
\`$message[2]\`]
$color[1;RANDOM]
$footer[1;Angel Code;https://media.discordapp.net/attachments/954100087338971146/966105174592598016/bee8012e03375435f4bf4f3230310aec.webp]
$onlyForRoles[940931380106379295;Yetkili Değilsin]
$onlyForChannels[941959516008898560;Bu Komutu Sadece <#941959516008898560> Kanalında Kullanabilirsiniz]
$addTimestamp[1;$datesTamp]
$deleteCommand
`}