document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("textInput");
  const btnSetBackColor = document.getElementById("btn");
  const btnAddColorToList = document.getElementById("btnA");
  const btnAddFooter = document.getElementById("btnB");
  const tableList = document.getElementsByClassName("satu");
  const footerRow = document.getElementById("footerrow");

  const merahText = document.querySelector(".satu tr:nth-child(1) td");
  const biruText = document.querySelector(".satu tr:nth-child(2) td");
  const kuning = document.querySelector(".satu tr:nth-child(3) td");
  const ungu = document.querySelector(".satu tr:nth-child(4) td");
  const pink = document.querySelector(".satu tr:nth-child(5) td");

  function clearBackGround() {
    merahText.style.backgroundColor = "transparent";
    biruText.style.backgroundColor = "transparent";
    kuning.style.backgroundColor = "transparent";
    ungu.style.backgroundColor = "transparent";
    pink.style.backgroundColor = "transparent";
  }

  btnSetBackColor.addEventListener("click", function () {
    const inputText = textInput.value;

    clearBackGround();

    if (inputText.toLowerCase() === "merah") {
      merahText.style.backgroundColor = "red";
    } else if (inputText.toLowerCase() === "biru") {
      biruText.style.backgroundColor = "blue";
    } else if (inputText.toLowerCase() === "kuning") {
      kuning.style.backgroundColor = "yellow";
    } else if (inputText.toLowerCase() === "ungu") {
      ungu.style.backgroundColor = "purple";
    } else if (inputText.toLowerCase() === "pink") {
      pink.style.backgroundColor = "pink";
    }
  });

  btnAddColorToList.addEventListener("click", function () {
    const inputText = textInput.value;
    clearBackGround();
    if (inputText) {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      td.textContent = inputText;
      td.style.backgroundColor = inputText.toLowerCase();
      tr.appendChild(td);
      tableList[0].appendChild(tr);
    }
  });

  btnAddFooter.addEventListener("click", function () {
    footerRow.style.display = "block";
  });
});
