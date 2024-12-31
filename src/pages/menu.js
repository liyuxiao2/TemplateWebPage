import dumplings from "../assets/images/dumplings.png"
import friedRice from "../assets/images/friedrice.png"
import generalTsoChicken from "../assets/images/generaltsochicken.png"
import springRoll from "../assets/images/springroll.png"
import sweetSourPork from "../assets/images/sweetsourpork.png"

export default function createMenuPage(content){
    const foodImages = [
        dumplings,
        friedRice,
        generalTsoChicken,
        springRoll,
        sweetSourPork
    ]

    const foodTitle = [
        "dumplings",
        "fried rice",
        "general tso chicken",
        "spring rolls",
        "sweet and sour pork"
    ]

    const food = document.createElement("div");
    food.classList.add("card");

    foodImages.forEach((image, index) => {
        const foodContainer = document.createElement("div");
        foodContainer.classList.add("food-container")

        const foodbg = document.createElement("img");
        foodbg.classList.add("food-bg");
        foodbg.src = image;

        const title = document.createElement("h5");
        title.textContent = foodTitle[index];

        foodContainer.appendChild(title);
        foodContainer.appendChild(foodbg);

        food.appendChild(foodContainer);
    });

    content.appendChild(food);
}

