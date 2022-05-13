module.exports = {
  name: "sil",
  code: `
$clear[$message[1]]
$onlyPerms[managemessages;Bu komutu kullanmak için ”Mesajları Yönet“ yetkisine sahip olman gerek.]
**$message** adet mesaj başarıyla havaya uçuruldu!
$onlyIf[$isNumber[$message[1]]!=false;Lütfen sileceğin mesaj miktarını gir. $getServerVar[cross]]
$deleteIn[3s]
`,
};
