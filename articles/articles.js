window.addEventListener('load', function () {//only after the page loads
    fetch("articles.json")//get Jason!
        .then(function(penis) {//make it js readable
            return penis.json();
        })
        .then(function(data) {//what to do once it's been got
            data.forEach(function(item) {//repeat for every item
                if (item.children) {//if it contains 'children'
                    document.getElementById("menu").innerHTML += "<li\""+item.id+"\">" + item.name + "</li>";//only print the top level
                } else if (item.link) {//or if it contains a link
                    document.getElementById("menu").innerHTML += "<li><a href=\"" + item.link + "\">" + item.name + "</a></li>";//make 'link' the href and 'name' the shown text.
                }
            });
        });
});
