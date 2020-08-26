fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(function(data) {
            console.log(data);
            let character = document.querySelector("#character");
            let characterList = document.querySelector(".characterList");

            data.results.forEach(function(result) {
                let clone = character.content.cloneNode(true);
                clone.querySelector(".character").innerText = result.name;
                characterList.appendChild(clone);
            })
        });