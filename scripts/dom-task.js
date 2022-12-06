var table = document.getElementById("my-table");
var addButton = document.getElementById("my-add-button");
var repaintButton = document.getElementById("my-repaint-button");
var quotesMap = {
	"Consuetudo est altera natura": "Привычка - вторая натура",
	"Nota bene": "Заметьте хорошо",
	"Nulla calamitas sola": "Беда не приходит одна",
	"Per aspera ad astra": "Через тернии к звёздам"
};

addButton.addEventListener("click", function() {
	var count = Object.keys(quotesMap).length;
	if (count == 0) {
		alert("Фразы закончились");
		return;
	}
	var max = count - 1;
	var min = 0;
	var randomIndex = Math.floor(Math.random() * (max - min + 1) + min)
	var row = table.insertRow();
	if (table.rows.length % 2 == 0) {
		row.classList.add("even-tr")
	} else {
		row.classList.add("odd-tr")
	}
	var latinCell = row.insertCell(0);
	var russianCell = row.insertCell(1);
	var key = Object.keys(quotesMap)[randomIndex];
	latinCell.textContent = key;
	russianCell.textContent = Object.values(quotesMap)[randomIndex];;
	delete quotesMap[key];
});

repaintButton.addEventListener("click", function() {
	Array.from(table.rows).forEach((tr, row_ind) => {
		if (row_ind % 2 == 0) {
			tr.style.fontWeight = "bolder";
		}
	});
});