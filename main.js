canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg"

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    rover_imgTag.onload = uploadcar1;
    rover_imgTag.src = car1_image;

    car2_imgTag = new Image();
    rover_imgTag.onload = uploadcar2;
    rover_imgTag.src = car2_image;
}

function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

function keydown() {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '38') 
{
       car1_up();
       console.log("up arrow key"); 
    }
    
    if (keyPressed == '40')
    {
        car1_down();
        console.log("down arrow key");
    }

    if (keyPressed == '39')
    {
        car1_right();
        console.log("right arrow key");
    }

    if (keyPressed == '37')
    {
        car1_left();
        console.log("left arrow key");
    }

    if (keyPressed == '87')
    {
        car2_w();
        console.log("key w");
    }

    if (keyPressed == '66')
    {
        car2_a();
        console.log("key a");
    }

    if (keyPressed == '83')
    {
        car2_s();
        console.log("key s");
    }

    if (keyPressed == '68')
    {
        car2_d();
        console.log("key d");
    }
}

function car1_up()
{
  if(car1_y >=0)
  {
      car1_y = car1_y - 10;
      console.log("When up arrow is pressed, X = " + car1_x + " | Y = " + car1_y);
      uploadbackground();
      uploadcar1();
      uploadcar2();
  }
}

function car1_down()
{
  if(car1_y >=0)
  {
      car1_y = car1_y + 10;
      console.log("When down arrow is pressed, X = " + car1_x + " | Y = " + car1_y);
      uploadbackground();
      uploadcar1();
      uploadcar2();
  }
}

function car1_left()
{
  if(car1_x >=0)
  {
      car1_x = car1_x - 10;
      console.log("When left arrow is pressed, X = " + car1_x + " | Y = " + car1_y);
      uploadbackground();
      uploadcar1();
      uploadcar2();
  }
}

function car1_right()
{
  if(car1_x >=0)
  {
      car1_x = car1_x + 10;
      console.log("When right arrow is pressed, X = " + car1_x + " | Y = " + car1_y);
      uploadbackground();
      uploadcar1();
      uploadcar2();
  }
}

function car2_w()
{
  if(car2_y >=0)
  {
      car2_y = car2_y - 10;
      console.log("When W letter is pressed, X = " + car2_x + " | Y = " + car2_y);
      uploadbackground();
      uploadcar1();
      uploadcar2();
  }
}

function car2_a()
{
  if(car2_y >=0)
  {
      car2_y = car2_y + 10;
      console.log("When A letter is pressed, X = " + car2_x + " | Y = " + car2_y);
      uploadbackground();
      uploadcar1();
      uploadcar2();
  }
}

function car2_s()
{
  if(car2_x >=0)
  {
      car2_x = car2_x - 10;
      console.log("When S letter is pressed, X = " + car2_x + " | Y = " + car2_y);
      uploadbackground();
      uploadcar1();
      uploadcar2();
  }
}

function car2_d()
{
  if(car2_y >=0)
  {
      car2_y = car2_y + 10;
      console.log("When D letter is pressed, X = " + car2_x + " | Y = " + car2_y);
      uploadbackground();
      uploadcar1();
      uploadcar2();
  }
}