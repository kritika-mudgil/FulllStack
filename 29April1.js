function my_fun() {
    // Get window dimensions
    // let h = window.innerHeight;
    // let w = window.innerWidth;
  
    // Log the dimensions
    // console.log(Height of window = ${h} and Width = ${w});
  
    // Open a new window
    myWindow=window.open("http://127.0.0.1:5500/assignment1.html");
  }
  function closeWin() {
    myWindow.close();   // Closes the new window
  }