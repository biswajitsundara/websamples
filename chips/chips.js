const chipColors = {
  almond: "#EBD4C3",
  babyBlue: "#8ED0F2",
  pewterBlue: "#90BCBB",
  aero: "#68C0D6",
  pastalGrey: "#CCD3B1",
};

const chipData = [
  {
    chipLabel: "Passed",
    chipValue: "10",
    style: "warning",
  },
  {
    chipLabel: "Failed",
    chipValue: "10",
    style: "secondary",
  },
  {
    chipLabel: "No Show",
    chipValue: "10",
    style: "info",
  },
  {
    chipLabel: "Leave",
    chipValue: "10",
    style: "primary",
  },
];

async function getChipItem(data) {
  return new Promise((resolve, reject) => {
    const span = document.createElement("span");
    span.classList.add("badge", "badge-light");
    span.innerText = data.chipValue;

    const button = document.createElement("button");
    button.classList.add("btn", `btn-${data.style}`);
    button.classList.add("btn");
    button.innerText = data.chipLabel.concat(" ");

    button.style.width = "200px";
    button.style.marginRight = "10px";

    button.appendChild(span);
    resolve(button);
  });
}

async function getAppChips() {
  const chipDiv = document.getElementById("chipItems");
  chipData.forEach(async (data) => {
    const chipItem = await getChipItem(data);
    chipDiv.appendChild(chipItem);
  });

  document.getElementById("appChips").appendChild(chipDiv);
}
