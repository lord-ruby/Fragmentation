function load_post(name) {
    var client = new XMLHttpRequest();
    client.open('GET', '/posts/'+name);
    client.onreadystatechange = function() {
        var lines = client.responseText.split(/\r?\n|\r|\n/g);
        
        var date = lines[0];
        var title = lines[1];

        document.getElementById("date").innerText = date;
        document.getElementById("title").innerText = title;

        var text = "------------------------------------------<br>"
        lines.shift(); lines.shift(); lines.shift(); 
        lines.forEach(element => {
            text += element + "<br>"
        });
        document.getElementById("main").innerHTML = text;
    }
    client.send();
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
load_post(urlParams.get('post'))