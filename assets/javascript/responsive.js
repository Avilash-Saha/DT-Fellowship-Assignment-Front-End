function shrinkExpand(){
    let element1 = document.getElementById("journeyBoardContainer");
    let element2 = document.getElementById("journeyBoardTitle");
    let element3 = document.getElementById("journeyBoardDescription");
    let element4 = document.getElementById("arrow");
    element1.classList.toggle("wrapped");
    element2.classList.toggle("wrap");
    element3.classList.toggle("wrap");
    element4.classList.toggle("fa-arrow-left");
}

function toggleNotice(){
    let element1 = document.getElementById("noticeBoardContainer");
    let element2 = document.getElementById("noticeBoardDescription");
    let element3 = document.getElementById("plus_x");
    element1.classList.toggle("toggleWidth");
    element2.classList.toggle("noticeDescriptionUpdate");
    element3.classList.toggle("fa-xmark");
}