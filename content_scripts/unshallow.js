let anchors = document.querySelectorAll("a");

anchors.forEach(anchor =>  {
    let s = document.createElement("span");
    s.innerHTML = anchor.innerHTML;
    anchor.replaceWith(s);
});
