const days = [
  { day: "Monday", hours: "6am-6pm" },
  { day: "Tuesday", hours: "6am-6pm" },
  { day: "Wednesday", hours: "6am-6pm" },
  { day: "Thursday", hours: "6am-6pm" },
  { day: "Friday", hours: "6am-6pm" },
  { day: "Saturday", hours: "6am-6pm" },
  { day: "Sunday", hours: "6am-6pm" },
];

function createHoursList(container, days){
    days.forEach(({ day, hours }) => {
        const listItem = document.createElement("ul");
        listItem.textContent = `${day}: ${hours}`;
        container.appendChild(listItem);
    });
}

export default function createHomePage(content){
    const introCard = document.createElement("div");
    introCard.classList.add("card");

    const introduction = document.createElement("h1");
    introduction.textContent = "About Us";

    const introBody = document.createElement("p");
    introBody.textContent = "At Dragon Buffet, we bring together flavors from around the world to create a dining experience like no other. Our team of passionate chefs and warm staff ensures that every meal is a celebration of taste, tradition, and innovation."

    introCard.appendChild(introduction);
    introCard.appendChild(introBody);


    const hoursCard = document.createElement("div");
    hoursCard.classList.add("card");

    const hours = document.createElement("h1");
    hours.textContent = "Hours"

    const hoursBody = document.createElement("div");
    createHoursList(hoursBody, days);


    hoursCard.appendChild(hours);
    hoursCard.appendChild(hoursBody);


    const locationCard = document.createElement("div");
    locationCard.classList.add("card");

    const location = document.createElement("h1");
    location.textContent = "Location";

    const locationBody = document.createElement("p");
    locationBody.textContent = "71 Udine Court";

    locationCard.appendChild(location);
    locationCard.appendChild(locationBody);

    content.appendChild(introCard);
    content.appendChild(hoursCard);
    content.appendChild(locationCard);
}