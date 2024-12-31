export default function contactpage(content) {
    const titles = [
        "phone number",
        "email",
        "yelp review"
    ]

    const text = [
        "643-892-9302",
        "dragonbuffet@gmail.com",
        "https://dragonbuffet@yelp.com"
    ]

    const contactCard = document.createElement("div");

    contactCard.classList.add("card");

    titles.forEach((title, index) => {
        const subSection = document.createElement("div")
        
        const header = document.createElement("h5");

        const body = document.createElement("p");

        header.textContent = title;

        body.textContent = text[index];

        subSection.classList.add("subSection");

        subSection.appendChild(header);
        subSection.appendChild(body);

        content.appendChild(subSection);

    });
}