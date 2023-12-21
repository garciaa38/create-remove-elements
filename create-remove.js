/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        const urlParts = url.split('/');
        const breed = urlParts[4];


        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        let galleryList = document.querySelector(".gallery > ul");

        const addElement = () => {

            const newLi = document.createElement("li");
            galleryList.appendChild(newLi);

            const newFigure = document.createElement("figure");
            newLi.appendChild(newFigure);

            const newImg = document.createElement("img");
            newImg.src = url;
            newFigure.appendChild(newImg);

            const newCaption = document.createElement("figcaption");
            newCaption.innerText = breed;
            newFigure.appendChild(newCaption);
        }

        addElement();
        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    let firstCard = document.querySelector(".gallery > ul > li");

    /*-------------------- Remove the first dog card --------------------- */
    if (firstCard) {
        firstCard.remove();
    } else {
        console.log('no doggie found')
    };
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    let lastCard = document.querySelectorAll(".gallery > ul li");



    /*-------------------- Remove the last dog card ----------------------- */
    if (lastCard.length > 0) {
        lastCard[lastCard.length - 1].remove();
    }

});
