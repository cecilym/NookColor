Titanium.Paint = Ti.Paint = require('ti.paint');

var win = Ti.UI.createWindow({ 
	backgroundColor: '#fff' 
	});

var paintView = Ti.Paint.createPaintView({
    top:0, 
    right:0, 
    bottom:50, 
    left:0,
    // strokeWidth (float), strokeColor (string), strokeAlpha (int, 0-255)
    strokeColor:'black', strokeAlpha:255, strokeWidth:10,
    eraseMode:false
	});

var buttonView = Ti.UI.createView({
    right:0, 
    bottom:0, 
    left:0,
    height:50,
    backgroundColor:'#d3d3d3'
	});

var buttonStrokeWidth = Ti.UI.createButton( { 
	right:10, 
	bottom:10, 
	height: 30, 
	width:200, 
	title:'Decrease Stroke Width' 
	});

buttonStrokeWidth.addEventListener('click', function(e) {
	paintView.strokeWidth = (paintView.strokeWidth === 10) ? 5 : 10;
	e.source.title = (paintView.strokeWidth === 10) ? 'Decrease Stroke Width' : 'Increase Stroke Width';
	});

var buttonStrokeColorBlack = Ti.UI.createButton( { 
	bottom:10, 
	left:10, 
	width:65, 
	height:30,
	borderRadius: 6,
	backgroundColor:'black',
	color: '#ffffff',
	title:'Black' 
	});
		
buttonStrokeColorBlack.addEventListener('click', function() { 
	paintView.strokeColor = 'black'; 
	});
	
var buttonStrokeColorRed = Ti.UI.createButton( { 
	bottom:10, 
	left:85,
	width:65,  
	height:30,
	borderRadius: 6,
	backgroundColor:'red',
	color: '#ffffff',	 
	title:'Red' 
	});
	
buttonStrokeColorRed.addEventListener('click', function() { 
	paintView.strokeColor = 'red'; 
	});

var buttonStrokeColorGreen = Ti.UI.createButton( { 
	bottom:10, 
	left:160, 
	width:65, 
	height:30,
	borderRadius: 6,
	backgroundColor:'green',
	color: '#ffffff',		 
	title:'Green' 
	});
	
buttonStrokeColorGreen.addEventListener('click', function() { 
	paintView.strokeColor = 'green'; 
	});

var buttonStrokeColorBlue = Ti.UI.createButton( { 
	bottom:10, 
	left:235, 
	width:65, 
	height:30, 
	borderRadius: 6,
	backgroundColor:'blue',
	color: '#ffffff',		
	title:'Blue' 
	});

buttonStrokeColorBlue.addEventListener('click', function() { 
	paintView.strokeColor = 'blue'; 
	});

var clear = Ti.UI.createButton( { 
	bottom:10, 
	left:310, 
	width:65, 
	height:30, 
	title:'Clear' 
	});
	
clear.addEventListener('click', function() { 
	paintView.clear(); 
	});

win.add(paintView);
win.add(buttonView);
win.add(buttonStrokeColorBlack);
win.add(buttonStrokeColorRed);
win.add(buttonStrokeColorGreen);
win.add(buttonStrokeColorBlue);
win.add(clear);
win.add(buttonStrokeWidth);
win.open();