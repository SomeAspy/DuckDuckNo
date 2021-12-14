var he = document.getElementById("header");
var baseurl = "https://ddn.bootloader.repl.co/?q=";
var options = "&format=json";

async function go() {
    var input = document.getElementById("search").value;
    let response = await fetch(baseurl + input + options);
    let data = await response.json();
    let json = data.list;
    he.innerHTML = "<h3>" + data.Heading + "</h3><img src='https://api.duckduckgo.com" + data.Image + "'></img><br><br>" + data.Abstract + "<br> - " + data.AbstractSource;
}
