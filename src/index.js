document.addEventListener("DOMContentLoaded", () => {
    filterDogsByLetter() 
})

function loadDogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(jsonData => {
            jsonData.message.forEach(link => {
                const imgTag = document.createElement("img")
                imgTag.src = `${link}`
                document.getElementById("dog-image-container").appendChild(imgTag)
        });
    })
}
loadDogImages()


function loadDogBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(json => {
            allBreeds = Object.keys(json.message)
            allBreeds.forEach(breed => {
                const li = document.createElement("li")
                li.innerText = `${breed}`
                document.getElementById("dog-breeds").appendChild(li)
                li.addEventListener("click", function(breed) {
                    breed.target.style.color = "red";
            })
        });
    })
}
loadDogBreeds()

function filterDogsByLetter() {
    const dropDownLetters = document.getElementById("breed-dropdown")
    dropDownLetters.addEventListener("change", function (event) {
        const selectLetter = event.target.value
        const result = allBreeds.filter(breed => breed[0] === selectLetter)
        document.getElementById("dog-breeds").innerHTML = ""
        result.forEach(breed => {
            const li = document.createElement("li")
            li.innerText = `${breed}`
            document.getElementById("dog-breeds").appendChild(li)
        })
    })
}




