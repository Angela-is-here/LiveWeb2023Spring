// check the connection with the server

var socket = io.connect();
			
socket.on('connect', function() {
  console.log("Connected" + socket.id);
});

//get mouseX and mouseY data
socket.on('mouse', function(mouseData){
  x = mouseData.x;
  y = mouseData.y;
})

//set the default colorand size of the brush
let color = '#FFF';
let radiusSize = 30;

//set the window-sized canvas with black background
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);

  	// Getting our buttons and the holder through the p5.js dom
	const color_picker = select('#pickcolor')
	const color_btn = select('#color-btn')
	const color_holder = select('#color-holder')
  const radius_picker = select('#pickradius')
	const radius_btn = select('#radius-btn')
  const re_btn = select('#resetCanvas-btn')

	// Adding a mousePressed listener to the button
	color_btn.mousePressed(() => {
		// Checking if the input is a valid hex color
		if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color_picker.value())) {
			color = color_picker.value()
			color_holder.style('background-color', color)
		}
		else {console.log('Enter a valid hex value')}
	})

//change rediusSize with the value of the redius picker input text
  radius_btn.mousePressed(() => {
    const sizeRad = parseInt(radius_picker.value())
    if (sizeRad > 0) {
      radiusSize = sizeRad
    }
    console.log(sizeRad);
   })

//reset canvas when reset button is pressed
   re_btn.mousePressed(() => {
    background(10);
    })
}


//we don't need to call sth on draw() function this time
function draw() {
}

//if a mouse is dragged, receive data from socket.io (position, radius and color) to update the data and draw an ellipse correspoinding with data.
function mouseDragged() {
  var data = {
    x : mouseX,
    y: mouseY,
    radiusSize: radiusSize,
    color: color,
  }
  
  socket.emit('mouse', data);
  if (socket.id)
  noStroke();
  fill(color);
  let x = mouseX;
  let y = mouseY;
  ellipse(x, y, radiusSize, radiusSize);
}

//reset all with bg color update
function resetAll() {
  background(10);
}
