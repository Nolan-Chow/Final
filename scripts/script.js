user_input = document.querySelector(".user_input");
thumb_bar = document.querySelector("#thumb-bar");

user_input.style.display = "none";

function display_img () {
    let imgs = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]
    let titles = ["Baby", "Art", "Flower", "Egypt", "Butterfly"]
    for (let i=0; i<imgs.length; ++i) {
        let img_item = document.createElement("IMG");
        img_item.setAttribute("src", `images/${imgs[i]}`);
        img_item.setAttribute("title", titles[i])
        img_item.setAttribute("height", "80");
        img_item.setAttribute("alt", `image ${i}`);
        thumb_bar.appendChild(img_item)
    }
}

display_img()