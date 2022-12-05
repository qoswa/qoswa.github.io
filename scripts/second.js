var horizontalFlex = document.getElementById("horizontal-flex-container");
var verticalFlex = document.getElementById("vertical-flex-container");

var boy = document.getElementById("boy-img")
var kirpich = document.createElement("img")
var boyCaption = document.createElement("h1")

boy.addEventListener('mouseover', (event) => {
    boy.srcSet="images/boy_dumaet.png, images/mini_boy_dumaet.png 0.5x"
    kirpich.src="images/kirpich.png"
    kirpich.srcSet="images/mini_kirpich.png 0.5x"
    kirpich.classList.add("fade-in")
    boyCaption.textContent = "Это мяч?...."
    horizontalFlex.appendChild(kirpich)
    verticalFlex.prepend(boyCaption)
});

boy.addEventListener('mouseout', (event) => {
boy.srcSet="images/boy_stoit.png, images/mini_boy_stoit.png 0.5x"
if (horizontalFlex.contains(kirpich)) {
  kirpich.remove()
}
if (verticalFlex.contains(boyCaption)) {
 boyCaption.remove()
}
kirpich.classList.remove("rotate-animation")
    verticalFlex.classList.remove("shake-animation")
});

boy.addEventListener('click', (event) => {
    boy.srcSet="images/boy_upal.png, images/mini_boy_upal.png 0.5x"
    boyCaption.textContent = "Это кирпич...."
    verticalFlex.classList.add("shake-animation")
    kirpich.classList.remove("fade-in")
    kirpich.classList.add("rotate-animation")
});
