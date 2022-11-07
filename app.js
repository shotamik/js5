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

const divSection = document.querySelector(".divclass")

const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "https://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];



function renderCharacters(arr) {
    const renderedCards = characters.map(char => {
        return `
            <div class="divclass1">
                
                <div class="divtext">
                    <h1>${char.first_name} ${char.last_name}</h1>
                    <div class="divclass2">
                        <h1 class="house"> House: </h1>
                        <h3>${char.house}</h3>
                    </div>
                    
                </div>
                <img src="${char.image}" class="card-img"  />
            </div>
        `
    })



    console.log(renderedCards.join(""));
    divSection.innerHTML = renderedCards.join("");

}


renderCharacters();