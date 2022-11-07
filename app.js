const btn = document.querySelector(".btn");


function handleclick() {
    btn.remove();

}

btn.addEventListener("click", handleclick);

const image = document.createElement('img');



image.setAttribute(
    "src",
    "https://picsum.photos/id/1/200/300",
)

const box = document.getElementById('box');


box.appendChild(image);