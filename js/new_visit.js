var get = (function() {
    var a = window.location.search;
    var b = new Object();
    a = a.substring(1).split("&");
    for (var i = 0; i < a.length; i++) {
  	c = a[i].split("=");
        b[c[0]] = c[1];
    }
    return b;
})();
var ad = 'Неизвестно'
if ('ad' in get) { ad = get['ad'] }
window.location.href = "https://discord.com/invite/sFhNEaMhCS";
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", `https://api.vk.com/method/messages.send?user_id=201887526&message=Новый+переход+в+дискорд<br>Реклама:+` + ad + `&random_id=0&access_token=afe1635504af7185a4ddd0500c928159573c27efba9250b14b6ed086bc7939ef18837550cbb947737005f&v=7.2` , false ); // false for synchronous request
xmlHttp.send( null );
