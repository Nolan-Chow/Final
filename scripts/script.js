user_input = document.querySelector(".user_input");
thumb_bar = document.querySelector("#thumb-bar");
displayed_img = document.querySelector(".displayed-img")

function display_img () {
    let imgs = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]
    let titles = ["Baby", "Art", "Flower", "Egypt", "Butterfly"]
    for (let i=0; i<imgs.length; ++i) {
        let img_item = document.createElement("img");
        img_item.setAttribute("src", `images/${imgs[i]}`);
        img_item.setAttribute("title", titles[i])
        img_item.setAttribute("alt", `image ${i}`);
        thumb_bar.appendChild(img_item)
    }
}

function hovered_img (e) {
    if (e.target.tagName === "IMG") {
        img = e.target
        displayed_img.setAttribute("src", img.src);
        displayed_img.setAttribute("title", img.title);
        displayed_img.setAttribute("alt", img.alt);
        user_input.removeAttribute("style")
    }
}

user_input.style.display = "none";
display_img()
thumb_bar.addEventListener("mouseover", hovered_img)