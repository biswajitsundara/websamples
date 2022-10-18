/**
 * This will be application specific, make sure there are no duplicate properties
 */
 const appChipData = {
  "Passed": 10,
  "Failed": 4,
  "No Show": 5,
  "Leave": 1,
};


const chipColors = {
  "almond":'#EBD4C3',
  "babyBlue": '#8ED0F2',
  "pewterBlue": '#90BCBB',
  "aero": '#68C0D6',
  "pastalGrey": '#CCD3B1'     
}





/**
 * This will create an object combining appCardData & cardColors
 */
 async function getChipData() {
  let chipData = [];
  let i = 0;
  colorKeys = Object.keys(chipColors);

  return new Promise((resolve, reject) => {
    for (dataEle in appChipData) {
      chipData.push({
        chipLabel: dataEle,
        chipValue: appChipData[dataEle],
        color: chipColors[colorKeys[i]],
      });
      i++;
    }
    resolve(chipData);
  });
}

async function getChipItem(data) {
    return new Promise((resolve, reject) => {
      
        const span = document.createElement('span');
        span.classList.add('badge','badge-light');
        span.innerText = data.chipValue;

        const button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('chip-button')
        button.innerText = data.chipLabel.concat(" ");
        button.style.borderRadius = "1em";
        button.style.backgroundColor = data.color;
        button.style.boxShadow = "0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f";

        button.style.width = '200px';
        button.style.marginRight = '10px';


        button.appendChild(span);
        resolve(button);

    });
  }
  

async function getAppChips() {

    const chipDiv = document.getElementById('chipItems');

    const chipData = await getChipData();

    chipData.forEach(async(data) =>{
        const chipItem = await getChipItem(data);
        chipDiv.appendChild(chipItem);
    })

    document.getElementById('appChips').appendChild(chipDiv);
}
