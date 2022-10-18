const cardData = [
  {
    cardHeader: "Total Students",
    cardBody: "10",
    cardMessage: "Total students in the class",
    cardStyle: "primary",
  },
  {
    cardHeader: "Passed Students",
    cardBody: "5",
    cardMessage: "Total students passed in the exam",
    cardStyle: "success",
  },
  {
    cardHeader: "Failed Students",
    cardBody: "2",
    cardMessage: "Total students failed in the exam",
    cardStyle: "danger",
  },
  {
    cardHeader: "No Show",
    cardBody: "1",
    cardMessage: "Total students failed in the exam",
    cardStyle: "info",
  },
  {
    cardHeader: "On Leave",
    cardBody: "2",
    cardMessage: "Total students failed in the exam",
    cardStyle: "dark",
  },
];

async function createCard(data) {
  return new Promise((resolve, reject) => {
    const card = document.createElement("div");
    card.classList.add("card", `border-${data.cardStyle}`, "mb-3");
    card.classList.add("card", "border-1");
    card.style.width = "200px";

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header", "text-center");
    cardHeader.innerText = data.cardHeader;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", `text-${data.cardStyle}`);

    const cardTitle = document.createElement("h1");
    cardTitle.classList.add("card-title", "text-center");
    cardTitle.innerText = data.cardBody;

    cardBody.appendChild(cardTitle);

    if (data.cardMessage) {
      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.innerText = data.cardMessage;
      cardBody.appendChild(cardText);
    }

    if (data.imgSrc) {
      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.setAttribute("src", data.imgSrc);
      card.appendChild(img);
    }

    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    resolve(card);
  });
}
async function getAppCards() {
  const cardDeck = document.createElement("div");
  cardDeck.classList.add("card-deck");
  cardDeck.style.marginLeft = "50px";

  cardData.forEach(async (data) => {
    const card = await createCard(data);
    card.style.borderRadius = "1em";
    card.style.backgroundColor = "#FFFFFF";
    cardDeck.appendChild(card);
  });

  document.getElementById("appcards").appendChild(cardDeck);
}
