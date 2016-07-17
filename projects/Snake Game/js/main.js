const cols = 26, rows = 26;
const empty = 0, player = 1, fruit = 2

var grid = {
  width: null,
  height: null,
  _grid: null,

  // fill a cell (column, row) with d
  init: function (d, col, row) {
    this.width = col
    this.height = row
    this._grid = []

    for (var x = 0; x < col; x++) {
      for (var y = 0; y < row; y++) {
        this._grid[x].push(d)
      }
    }
  },
  // set value of cell at x, y,
  set: function (val, x, y) { },
  // get value of cell at x, y  
  get: function (x, y) { }
}

var snake = {
  direction: null,
  _queue: null,

  // clears queue and sets start point and direction
  init: function (d, x, y) { },
  // add element to queue  
  insert: function (x, y) { },
  // remove, then return first element in queue
  remove: function () { }

}

function setFood () {

}
function init () {

}
function main () {
  
}
function loop () {
  
}
function update () {
  
}
function draw () {

}

main()
// Snake Interface {
//   direction: where the head is,
//   last: the last element in a queue,

// Food Item {
//   setFood(): set food id at random free cell
// }
