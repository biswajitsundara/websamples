const dropDownData = [
  {
    text: "Hello World",
    link: "#",
  },
  {
    text: "Hello India",
    link: "#",
  },
  {
    text: "Hello Bangalore",
    link: "#",
  },
];

async function getDropDownButton(dropdownText) {
  return new Promise((resolve, reject) => {
    const ddbutton = document.createElement("button");
    ddbutton.classList.add("btn", "btn-secondary", "dropdown-toggle");
    ddbutton.setAttribute("type", "button");
    ddbutton.setAttribute("data-toggle", "dropdown");
    ddbutton.innerText = dropdownText;
    resolve(ddbutton);
  });
}

async function getDropDownItem(data) {
  return new Promise((resolve, reject) => {
    const dropdownMenuItem = document.createElement("a");
    dropdownMenuItem.classList.add("dropdown-item");
    dropdownMenuItem.setAttribute("href", data.link);
    dropdownMenuItem.innerText = data.text;
    resolve(dropdownMenuItem);
  });
}
async function getDropDown() {
  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");

  const dropdownMenu = document.createElement("div");
  dropdownMenu.classList.add("dropdown-menu");

  dropDownData.forEach(async (data) => {
    const menuItem = await getDropDownItem(data);
    dropdownMenu.appendChild(menuItem);
  });

  const ddButton = await getDropDownButton("Select Greetings");
  dropdown.appendChild(ddButton);
  dropdown.appendChild(dropdownMenu);
  document.getElementById("dropdownrow").appendChild(dropdown);
}
