document.addEventListener("DOMContentLoaded", () => {
    const characters = {
        DC: [
            { name: "Superman", img: "superman.jpg" },
            { name: "Batman", img: "batman.jpg" },
            { name: "Wonder Woman", img: "wonderwoman.jpg" },
            { name: "Flash", img: "flash.jpg" },
            { name: "Aquaman", img: "aquaman.jpg" }
        ],
        Marvel: [
            { name: "Spider-Man", img: "spiderman.jpg" },
            { name: "Iron Man", img: "ironman.jpg" },
            { name: "Captain America", img: "captainamerica.jpg" },
            { name: "Thor", img: "thor.jpg" },
            { name: "Hulk", img: "hulk.jpg" }
        ],
        Anime: [
            { name: "Goku", img: "goku.jpg" },
            { name: "Naruto", img: "naruto.jpg" },
            { name: "Luffy", img: "luffy.jpg" },
            { name: "Ichigo", img: "ichigo.jpg" },
            { name: "Sailor Moon", img: "sailormoon.jpg" }
        ]
    };

    // Función para mostrar personajes
    function showCharacters(category) {
        const container = document.getElementById(`${category.toLowerCase()}-characters`);
        container.innerHTML = "";
        characters[category].forEach(character => {
            const characterDiv = document.createElement("div");
            characterDiv.className = "character";
            characterDiv.innerHTML = `
                <img src="${character.img}" alt="${character.name}">
                <h3>${character.name}</h3>
            `;
            container.appendChild(characterDiv);
        });
    }

    // Mostrar personajes de la categoría activa al cargar la página
    document.querySelector(".tablinks").click();

    // Función para manejar la apertura de categorías
    window.openCategory = (evt, category) => {
        const tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        const tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(category).style.display = "block";
        evt.currentTarget.className += " active";

        showCharacters(category);
    }
});
