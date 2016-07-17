// Constants
var COLS = 26, ROWS = 26
// IDs
var EMPTY = 0, SNAKE = 1, FRUIT = 2
//Directions
var LEFT = 0, UP = 1, RIGHT = 2, DOWN = 3

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
  var randpos = empty [Math.floor(Math.random) * empty.length]
  grid.set(FRUIT, randpos.x, randpos.y)
}

// Game Objects
var canvas, ctx, keystate, frames

function main () {
  canvas = document.createElement('canvas')
  canvas.width = COLS * 20
  canvas.height = ROWS * 20
  ctx = canvas.getContext('2d')
  document.body.appendChild(canvas)

  frames = 0
  keystate = {}

  init()
  loop()
}
function init () {
  grid.init(EMPTY, COLS, ROWS)

  var sp = {
    x:Math.floor(COLS/2),
    y:ROWS-1
  }
  snake.init(DOWN, sp.x, sp.y)
  grid.set(SNAKE, sp.x, sp.y)

  setFood()
}
function loop () {
  update()
  draw()

  window.requestAnimationFrame(loop, canvas)
}
function update () {
  frames++
}
function draw () {
  var tw = canvas.width/grid.width
  var th = canvas.height/grid.height

    for (var x = 0; x < grid.width; x++) {
    for (var y = 0; y < grid.height; y++) {
      switch (grid.get(x, y)) {
        case EMPTY:
          ctx.fillStyle = '#fff'
          break;
        case SNAKE:
          ctx.fillStyle = '#0ff'
          break;
        case FRUIT:
          ctx.fillStyle = '#f00'
          break;
      }
      ctx.fillRect(x*tw, y*th, tw, th)
    }
  }
}

main()
