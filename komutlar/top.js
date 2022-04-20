module.exports = {
  name:"top",
  code:`
    $author[1;Yetkili Puanı;$authorAvatar]
  $description[1;$userLeaderboard[$guildID;staffpuan;asc;{top} - **{username}** - \`({value})\`]]
  $color[1;BLACK]
  
  $author[2;Abone Puanı;$authorAvatar]
  $description[2;$userLeaderboard[$guildID;subsayı;asc;{top} - **{username}** - \`({value})\`]]
  $color[2;BLACK]
  
  $onlyForRoles[$getServerVar[staff];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
   
  `}