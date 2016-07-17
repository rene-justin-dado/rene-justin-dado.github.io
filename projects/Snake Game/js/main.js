const cols = 26, rows = 26;
const EMPTY = 0, SNAKE = 1, FRUIT = 2

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
  set: function (val, x, y) {
    this._grid[x][y] = val
  },
  // get value of cell at x, y
  get: function (x, y) {
    return this._grid[x][y]
  }
}

var snake = {
  direction: null,
  last: null,
  _queue: null,

  // clears queue and sets start point and direction
  init: function (d, x, y) {
    this.direction = d
    this.insert (x, y)
  },

  // add element to queue
  insert: function (x, y) {
    this._queue.unshift({
      x:x,
      y:y
    })
    this.last = this._queue[0]
  },

  // remove, then return first element in queue
  remove: function () {
    return this._queue.pop()
  }

}

function setFood () {
  var empty = []
  for (var x = 0; x < grid.width; x++) {
    for (var y = 0; y < grid.height; y++) {
      if (grid.get(x, y) === EMPTY) {
        empty.push({
          x:x,
          y:y
        })
      }
    }
  }
  var randpos = empty [Math.floor(Math.random)*empty.length]
  grid.set(FRUIT, randpos.x, randpos.y)
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
