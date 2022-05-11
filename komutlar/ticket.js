module.exports = [{
  name:"ticket",
  code:`
  $addButton[1;Ticket Aç;2;ticketaç;no;🎫]
Ticket açmak için aşağıdaki butona basmanız yeterlidir.

Yetkili başvurusu,reklam yaptırma,bot yaptırma vb. şeyler için ticket açabilirsiniz.

Kod yardımı,abone ss vb. için ticket açmazsanız seviniriz.
( Uymayanlar ve boşa ticket açanlar 3 saat mutelenecektir )
  $onlyForIDs[$botOwnerID;]
  `
  },{
    name:"ticketaç",
    type:"interaction",
    prototype:"button",
    code:`
    $interactionReply[🎫 Ticket'ınız açıldı. <#$get[ticket]>;;;;;yes]
    $setUserVar[tticket;$get[ticket]]
    $setChannelVar[tuser;$authorID;$get[ticket]]
    $let[ticket;$newTicket[ticket・$getServerVar[tsayı];$getServerVar[tick] <@$authorID>, Ticket'ınız açıldı. Üst yetkililer birazdan sizinle ilgilenicek. <@&940931897314406491>;$getServerVar[tkategori];yes;uups]]
    $wait[1s]
    $setServerVar[tsayı;$sum[$getServerVar[tsayı];1]]
    $onlyIf[$getUserVar[tticket]==;{"content": "Zaten bir ticket'ın var. <#$getUserVar[tticket]>","ephemeral": true, "options":{"interaction": true }}]
    `
    }]