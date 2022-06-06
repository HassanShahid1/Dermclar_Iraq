function Search(item) {
    var product = document.getElementsByClassName("card");
    for (i = 0; i < product.length; i++) {
        if (((product[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
          product[i].style.display = "block";
        } else {
          product[i].style.display = "none";
        }
    }
}