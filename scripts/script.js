let user_input = document.querySelector(".user_input");
let thumb_bar = document.querySelector("#thumb-bar");
let displayed_img = document.querySelector(".displayed-img");
let submit = document.querySelector(".submit");
let effect = document.querySelector("#effect");

function display_img () {
    let imgs = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
    let titles = ["Baby", "Art", "Flower", "Egypt", "Butterfly"];
    for (let i=0; i<imgs.length; ++i) {
        let img_item = document.createElement("img");
        img_item.setAttribute("src", `images/${imgs[i]}`);
        img_item.setAttribute("title", titles[i])
        img_item.setAttribute("alt", `image ${i + 1}`);
        thumb_bar.appendChild(img_item);
    }
}

function hovered_img (e) {
    if (e.target.tagName === "IMG") {
        let img = e.target
        displayed_img.setAttribute("src", img.src);
        displayed_img.setAttribute("title", img.title);
        displayed_img.setAttribute("alt", img.alt);
        user_input.removeAttribute("style");
    }
}

function blur () {
    if (effect.value.toLowerCase() === "blur") {
        let img_num = displayed_img.alt.substring(6, 7);
        displayed_img.src = `images/pic${img_num}B.jpg`;
    } else {
        alert(`Invalid effect: ${effect.value}`);
    }
    effect.value = "";
}

user_input.style.display = "none";
display_img();
thumb_bar.addEventListener("mouseover", hovered_img);
submit.addEventListener("click", blur);