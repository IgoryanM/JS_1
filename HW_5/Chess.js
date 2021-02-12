'use strict'

const chessField = {
  rowCount: 10,
  colCount: 10,
  rowName: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  colName: [1, 2, 3, 4, 5, 6, 7, 8],
  containerElement: document.createElement('table'),
  cellElements: [],
  
  init() {
    document.body.appendChild(this.containerElement);
    for (let row = 0; row < this.rowCount; row++) {
      const trElem = document.createElement('tr');
      this.containerElement.appendChild(trElem);
      for (let col = 0; col < this.colCount; col++) {
                const cell = document.createElement('td');
                trElem.appendChild(cell);
                cell.textContent = ' ';
                this.cellElements.push(cell);
            }
        }
  },
  
  render() {
    let shift = 0;
    for (let index in this.cellElements) {
      if ((parseInt(index) + shift) % 2 != 0) {
        this.cellElements[index].style.backgroundColor = 'black';
        console.log(this.cellElements[index]);
      }
      if ((parseInt(index) + 1) % this.rowCount == 0 && index > 0) {
        shift++;
      }     
    }

    for (let index in this.cellElements) {
      let i = parseInt(index);
      if (i < 10) {
        this.cellElements[i].textContent = this.colName[i-1];
        this.cellElements[i + 90].textContent = this.colName[i-1];
        this.cellElements[i].style.backgroundColor = 'white';
        this.cellElements[i + 90].style.backgroundColor = 'white';
        this.cellElements[i].style.textAlign = 'center';
        this.cellElements[i + 90].style.textAlign = 'center';
      }

      if (i % 10 == 0) {
        this.cellElements[i].textContent = this.rowName[i / 10 - 1];
        this.cellElements[i + 9].textContent = this.rowName[i / 10 - 1];
        this.cellElements[i].style.backgroundColor = 'white';
        this.cellElements[i + 9].style.backgroundColor = 'white';
        this.cellElements[i].style.textAlign = 'center';
        this.cellElements[i + 9].style.textAlign = 'center';
      }
    }
  },

  run() {
    this.init();
    this.render();
  }
};

chessField.run();
