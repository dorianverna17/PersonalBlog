function function1() {
    var x = document.getElementsByClassName("long_line");
    var y = document.getElementById("short_line");
    var z = document.getElementById("second_container");
    var q = document.getElementsByClassName("menu_item");
    var i;

    z.style.transition = "all 2s";
    y.style.transition = "all 2s";
    for (i = 0; i < x.length; i++) {
        x[i].style.transition = "all 2s";
    }
    for (i = 0; i < q.length; i++) {
        q[i].style.transition = "all 2s";
    }
}