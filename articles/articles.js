function findItem(items, id) {//recursive search function from le chat gpt
    for (var i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            return items[i];
        }
        if (items[i].children) {
            var found = findItem(items[i].children, id);
            if (found) {
                return found;
            }
        }
    }
    return null;
}





window.addEventListener('load', function () {//only after the page loads
    fetch("articles.json")//get Jason!
        .then(function(penis) {//make it js readable
            return penis.json();
        })
        .then(function(data) {//what to do once it's been got
            data.forEach(function(item) {//repeat for every item
                if (item.children) {//if it contains 'children'
                    document.getElementById("menu").innerHTML += "<li id=\""+item.id+"\">" + item.name + "</li>";//only print the top level
                } else if (item.link) {//or if it contains a link
                    document.getElementById("menu").innerHTML += "<li><a href=\"" + item.link + "\">" + item.name + "</a></li>";//make 'link' the href and 'name' the shown text.
                }
            });
            document.getElementById("menu").addEventListener("click", function(vagina) { // detects when anything in the menu is pressed
                vagina.target.innerHTML+="<ul id=\""+vagina.target.id+"Contents\"></ul>";  //creates an empty unordered list with a similar id  target --> targetContents
                var clickedItem = findItem(data, vagina.target.id);// Find it!
                var clickedItemId = clickedItem.id
                clickedItem.children.forEach(function(item) { //run a for loop for each item in the clicked thingy
                    if (item.children) {     //run this if the item itself has more children
                        document.getElementById(clickedItemId+"Contents").innerHTML += "<li id=\""+item.id+"\">" + item.name + "</li>";//add the item into the new unordered list but only the top level name
                    } else if (item.link) {//run this if the item does not itself have children but instead is a link
                        document.getElementById(clickedItemId+"Contents").innerHTML += "<li><a href=\"" + item.link + "\">" + item.name + "</a></li>";//add the item into the new unordered list
                    }
                });
                document.getelementById(vagina.target.id).id = "clit" //prevent it from being clicked again. I <3 clitoris (:
            });
        });
});
