const mostPopulatedCountries = document.getElementById(
  "most-populated-countries"
);
const mostSpokenLanguages = document.getElementById("most-spoken-languages");
const richestPeople = document.getElementById("richest-people");
const mostProgrammingLanguages = document.getElementById(
  "most-programming-languages"
);
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");

const mostPopulatedArr = [
  "China",
  "India",
  "United States",
  "Indonesia",
  "Pakistan",
  "Brazil",
  "Nigeria",
  "Bangladesh",
  "Rusia",
  "Mexico",
];

const mostSpokenLanguageArr = [
  "English",
  "Mandarin",
  "Hindi",
  "Spanish",
  "French",
  "Arabic",
  "Bengali",
  "Russian",
  "Portugese",
  "Indonesian",
];

const richestPeopleArr = [
  "Elon Musk",
  "Bernard Arnault",
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Larry Page",
  "Larry Ellison",
  "Sergey Brin",
  "Mark Zuckerberg",
  "Steve Ballmer",
];

const programmingLanguageArr = [
  "JavaScript",
  "Python",
  "C/C++",
  "JAVA",
  "R Language",
  "Kotlin",
  "C#",
  "PHP",
  "Go",
  "Scala",
];

// Store list items
const listItems1 = [];
const listItems2 = [];
const listItems3 = [];
const listItems4 = [];

let dragStartIndex;

//Create list item into DOM
const createList1 = () => {
  [...mostPopulatedArr]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((item, index) => {
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true"> 
      <p class="item-name">${item}</p>
      <i class="fas fa-grip-lines"></i>
    `;

      listItems1.push(listItem);

      mostPopulatedCountries.appendChild(listItem);
    });

  const swapItems = (fromIndex, toIndex) => {
    const item1 = listItems1[fromIndex].querySelector(".draggable");
    const item2 = listItems1[toIndex].querySelector(".draggable");

    listItems1[fromIndex].appendChild(item2);
    listItems1[toIndex].appendChild(item1);
  };

  addEventListeners(swapItems);

  const checkOrder = () => {
    listItems1.forEach((listItem, index) => {
      const itemName = listItem.querySelector(".draggable").innerText.trim();

      if (itemName !== mostPopulatedArr[index]) {
        listItem.classList.add("wrong");
      } else {
        listItem.classList.remove("wrong");
        listItem.classList.add("right");
      }
    });
  };

  check1.addEventListener("click", checkOrder);
};

const createList2 = () => {
  [...mostSpokenLanguageArr]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((item, index) => {
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
      <p class="item-name">${item}</p>
      <i class="fas fa-grip-lines"></i>
    `;

      listItems2.push(listItem);

      mostSpokenLanguages.appendChild(listItem);
    });

  const swapItems = (fromIndex, toIndex) => {
    const item1 = listItems2[fromIndex].querySelector(".draggable");
    const item2 = listItems2[toIndex].querySelector(".draggable");

    listItems2[fromIndex].appendChild(item2);
    listItems2[toIndex].appendChild(item1);
  };

  addEventListeners(swapItems);

  const checkOrder = () => {
    listItems2.forEach((listItem, index) => {
      const itemName = listItem.querySelector(".draggable").innerText.trim();

      if (itemName !== mostSpokenLanguageArr[index]) {
        listItem.classList.add("wrong");
      } else {
        listItem.classList.remove("wrong");
        listItem.classList.add("right");
      }
    });
  };

  check2.addEventListener("click", checkOrder);
};

const createList3 = () => {
  [...richestPeopleArr]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((item, index) => {
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
      <p class="item-name">${item}</p>
      <i class="fas fa-grip-lines"></i>
    `;

      listItems3.push(listItem);

      richestPeople.appendChild(listItem);
    });

  const swapItems = (fromIndex, toIndex) => {
    const item1 = listItems3[fromIndex].querySelector(".draggable");
    const item2 = listItems3[toIndex].querySelector(".draggable");

    listItems3[fromIndex].appendChild(item2);
    listItems3[toIndex].appendChild(item1);
  };

  addEventListeners(swapItems);

  const checkOrder = () => {
    listItems3.forEach((listItem, index) => {
      const itemName = listItem.querySelector(".draggable").innerText.trim();

      if (itemName !== richestPeopleArr[index]) {
        listItem.classList.add("wrong");
      } else {
        listItem.classList.remove("wrong");
        listItem.classList.add("right");
      }
    });
  };

  check3.addEventListener("click", checkOrder);
};

const createList4 = () => {
  [...programmingLanguageArr]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((item, index) => {
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
      <p class="item-name">${item}</p>
      <i class="fas fa-grip-lines"></i>
    `;

      listItems4.push(listItem);

      mostProgrammingLanguages.appendChild(listItem);
    });

  const swapItems = (fromIndex, toIndex) => {
    const item1 = listItems4[fromIndex].querySelector(".draggable");
    const item2 = listItems4[toIndex].querySelector(".draggable");

    listItems4[fromIndex].appendChild(item2);
    listItems4[toIndex].appendChild(item1);
  };

  addEventListeners(swapItems);

  const checkOrder = () => {
    listItems4.forEach((listItem, index) => {
      const itemName = listItem.querySelector(".draggable").innerText.trim();

      if (itemName !== programmingLanguageArr[index]) {
        listItem.classList.add("wrong");
      } else {
        listItem.classList.remove("wrong");
        listItem.classList.add("right");
      }
    });
  };

  check4.addEventListener("click", checkOrder);
};

//Add event listeners
const addEventListeners = (swapItemFunction) => {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      dragStartIndex = +draggable.closest("li").getAttribute("data-index");
    });
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    item.addEventListener("drop", () => {
      const dragEndIndex = item.getAttribute("data-index");
      swapItemFunction(dragStartIndex, dragEndIndex);
      item.classList.remove("over");
    });

    item.addEventListener("dragenter", () => {
      item.classList.add("over");
    });

    item.addEventListener("dragleave", () => {
      item.classList.remove("over");
    });
  });
};

createList1();
createList2();
createList3();
createList4();
