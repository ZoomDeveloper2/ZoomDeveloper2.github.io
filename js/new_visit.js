var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://api.vk.com/method/messages.send?user_id=201887526&message=Новый+переход+в+дискорд.&random_id=0&access_token=afe1635504af7185a4ddd0500c928159573c27efba9250b14b6ed086bc7939ef18837550cbb947737005f&v=7.2" , false ); // false for synchronous request
xmlHttp.send( null );
alert(xmlHttp.responseText);
let params = (new URL(document.location)).searchParams; 
alert(params.get("data"));
