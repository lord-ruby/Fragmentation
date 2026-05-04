function load_posts() {
    var client = new XMLHttpRequest();
    client.open('GET', 'https://lord-ruby.github.io/Fragmentation/posts/list.txt');
    client.onreadystatechange = function() {
        var lines = client.responseText.split(/\r?\n|\r|\n/g);
        
        var text = ""
        lines.forEach(element => {
            text += "> <a href = 'https://lord-ruby.github.io/Fragmentation/post?post="+element+"'>"+element + "<br>";
        });
        document.getElementById("main").innerHTML = text;
    }
    client.send();
}

load_posts()
