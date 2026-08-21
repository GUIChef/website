window.addEventListener('load', function () {
    fetch("articles.json")
        .then(function(penis) {
            return penis.json();
        })
        .then(function(data) {
            data.forEach(function(item) {
                if (item.name) {
                    document.getElementById("menu").innerHTML += "<li>" + item.name + "</li>";
                } else if (item.link) {
                    document.getElementById("menu").innerHTML += "<li><a href=\"" + item.link + "\">" + item.link + "</a></li>";
                }
            });
        });
});
