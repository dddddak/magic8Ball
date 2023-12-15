fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 5));
if (answer === 1) {
    text("This is", 180, 200);
    textSize(30);
    text("One", 170, 229); 
}
else if (answer === 2) {
    text("This is", 180, 200);
    fill(191, 232, 188);
    textSize(25);
    text("Two", 175, 229);
}
else if (answer === 3) {
    fill(54, 255, 131);
    textSize(25);
    text("This is", 167, 200);
    text("Three", 165, 229);
}
else if (answer === 4) {
    textSize(25);
    rotate(60);
    text("This is", 250, -80);
    text("Four", 260, -50);
}
else {
    text("This is", 176, 200);
    textSize(30);
    text("Error", 180, 229);

}

