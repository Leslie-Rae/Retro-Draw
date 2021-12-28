

//Create the palette of colors to choose from
makePalette = () => {

  const PALETTE = [
    '#f94144',
    '#f3722c',
    '#f8961e',
    '#f9c74f',
    '#90be6d',
    '#43aa8b',
    '#277da1',
    '#5e60ce'
  ]
  for (let i = 0; i < PALETTE.length; i++) {
    const nextColor = PALETTE[i];
    let newButton = $('<button>' + '</button>')
    $(newButton).css('background-color', nextColor)
    $('.palette').append(newButton)
  }
  $('.palette button').first().addClass('active');
}
makePalette()



//create and add cells to the .grid using a for loop
makeGrid = () => {
  for (let i = 0; i < 64; i++) {
    $('.grid').append('<div class="cell"></div>')
    console.log(i)
  }
}
makeGrid()

//selects an active color from the palette
function onPaletteClick() {
  $('.active').removeClass()
  $(this).addClass('active')
}
$('.palette button').click(onPaletteClick)

//applies the active color to the selected grid cell, alternatively, removes the color when clicked twice
function onGridClick() {
  const activeColor = $('.active').css('background-color')

  if ($(this).css('background-color') === activeColor) {
    $(this).css('background-color', 'rgba(0, 0, 0, 0)')
  } else {
    $(this).css('background-color', activeColor)
  }
}
$('.grid .cell').click(onGridClick)

//clears all grid cells of color
function onClearClick() {
  $('.cell').css('background-color', "")
}
$('.controls .clear').click(onClearClick)

//fills all grid cells withh active color
function onFillAllClick() {
  let activeColor = $('.active').css('background-color')
  $('.cell').css('background-color', activeColor)
}
$('.controls .fill-all').click(onFillAllClick)

//checks to see if cell already has a color and applies active color to only the empty ones
function onFillEmptyClick() {
  let activeColor = $('.active').css('background-color')
  const elements = $('.cell')

  for (let i = 0; i < elements.length; i++) {
    let nextElement = $(elements[i]);
    if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
      $(nextElement).css('background-color', activeColor)
    }

  }
}
$('.controls .fill-empty').click(onFillEmptyClick)

//allows
function cursorPaint() {
  $(".cell").mouseover(function () {
    const activeColor = $('.active').css('background-color')
    $(this).css({ background: activeColor });
  });
}
$('.controls .paint').click(cursorPaint)

