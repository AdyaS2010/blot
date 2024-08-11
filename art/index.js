/*
@title: A Fractal Foray into the Forest
@author: Adya
@snapshot: FractalTree.png
*/

// Set Dimensions
const width = 165;
const height = 160;
setDocDimensions(width, height);

// Store final lines, leaves, flowers, fruits, and background elements
const finalLines = [];
const finalLeaves = [];
const finalFlowers = [];
const finalFruits = [];
const finalBackground = [];

// Draw a branch
function branch(startX, startY, len, angle) {
  const endX = startX + len * Math.cos(angle);
  const endY = startY + len * Math.sin(angle);
  // Create a line
  const line = [
    [startX, startY],
    [endX, endY]
  ];
  // Add line to the final lines
  finalLines.push(line);
  if (len > 10) { // Increase the length threshold to reduce the number of elements
    // Draw 2 new branches
    const newAngle = (Math.random() - 0.5) * 0.2; // Add some randomness to the angle
    branch(endX, endY, len * 0.67, angle + Math.PI / 4 + newAngle); // Adjust the angles here
    branch(endX, endY, len * 0.67, angle - Math.PI / 4 + newAngle); // Here as well
  } else {
    // Add leaves, flowers, and fruits at the tips with spacing
    if (Math.random() > 0.7) {
      finalLeaves.push([endX, endY]);
    } else if (Math.random() > 0.5) {
      finalFlowers.push([endX, endY]);
    } else {
      finalFruits.push([endX, endY]);
    }
  }
}

// Draw the tree
branch(width / 2, height / 100, 50, Math.PI / 2); // Start the tree from the center of the canvas

// Add background elements
addBackgroundElements();

// Draw final lines, leaves, flowers, fruits, and background elements
drawBackground(finalBackground);
drawFinalLines(finalLines);
drawLeaves(finalLeaves);
drawFlowers(finalFlowers);
drawFruits(finalFruits);

function drawFinalLines(lines) {
  // Implement the drawing logic for lines
  drawLines(lines);
}

function drawLeaves(leaves) {
  // Implement the drawing logic for leaves
  leaves.forEach(leaf => {
    const leafShape = new bt.Turtle()
      .jump(leaf)
      .down()
      .forward(5)
      .right(120)
      .forward(5)
      .right(120)
      .forward(5)
      .lines();
    drawLines(leafShape);
  });
}

function drawFlowers(flowers) {
  // Implement the drawing logic for flowers
  flowers.forEach(flower => {
    const flowerShape = new bt.Turtle()
      .jump(flower)
      .down()
      .arc(360, 3)
      .right(45)
      .arc(360, 3)
      .right(45)
      .arc(360, 3)
      .right(45)
      .arc(360, 3)
      .lines();
    drawLines(flowerShape);
  });
}

function drawFruits(fruits) {
  // Implement the drawing logic for fruits
  fruits.forEach(fruit => {
    const fruitShape = new bt.Turtle()
      .jump(fruit)
      .down()
      .forward(4)
      .right(90)
      .forward(4)
      .right(90)
      .forward(4)
      .right(90)
      .forward(4)
      .lines();
    drawLines(fruitShape);
  });
}

function addBackgroundElements() {
  // Add sun
  const sun = new bt.Turtle()
    .jump([width - 17, height - 25])
    .down()
    .arc(360, 10)
    .lines();
  finalBackground.push(sun);

  // Add crescent moon
  const moon = new bt.Turtle()
    .jump([20, height - 36.27])
    .down()
    .arc(380, 10)
    .arc(180, 8)
    .lines();
  finalBackground.push(moon);

  // Add stars
  for (let i = 0; i < 5; i++) {
    const star = new bt.Turtle()
      .jump([20 + i * 20, height - 10])
      .down()
      .arc(360, 2)
      .lines();
    finalBackground.push(star);
  }

  // Add clouds
  for (let i = 0; i < 3; i++) {
    const cloud = new bt.Turtle()
      .jump([30 + i * 30, height - 20])
      .down()
      .arc(360, 5)
      .right(45)
      .arc(360, 5)
      .right(45)
      .arc(360, 5)
      .lines();
    finalBackground.push(cloud);
  }

  // On branches (part of tree)
  const birdPositions = [
    [width / 2 + 10, height / 2 + 20],
    [width / 2 - 15, height / 2 + 30],
    [width / 2 + 20, height / 2 + 40]
  ];
  birdPositions.forEach(pos => {
    const bird = new bt.Turtle()
      .jump(pos)
      .down()
      .forward(5)
      .right(120)
      .forward(5)
      .right(120)
      .forward(5)
      .lines();
    finalBackground.push(bird);
  });

  const butterflyPositions = [
    [width / 2 + 30, height / 2 + 50],
    [width / 2 - 25, height / 2 + 60],
    [width / 2 + 40, height / 2 + 70]
  ];
  butterflyPositions.forEach(pos => {
    const butterfly = new bt.Turtle()
      .jump(pos)
      .down()
      .arc(180, 5)
      .right(90)
      .arc(180, 5)
      .lines();
    finalBackground.push(butterfly);
  });

  // In background
  for (let i = 0; i < 3; i++) {
    const bush = new bt.Turtle()
      .jump([width / 2 - 20, 10])
      .down()
      .arc(360, 10)
      .right(45)
      .arc(360, 10)
      .right(45)
      .arc(360, 10)
      .lines();
    finalBackground.push(bush);
  }

  for (let i = 0; i < 4; i++) {
    const plant = new bt.Turtle()
      .jump([width / 2 + 20, 15])
      .down()
      .arc(360, 5)
      .right(45)
      .arc(360, 5)
      .lines();
    finalBackground.push(plant);
  }

  for (let i = 0; i < 6; i++) {
    const grass = new bt.Turtle()
      .jump([10 + i * 20, 5])
      .down()
      .forward(5)
      .right(45)
      .forward(5)
      .right(45)
      .forward(5)
      .lines();
    finalBackground.push(grass);
  }

  for (let i = 0; i < 2; i++) {
    const squirrel = new bt.Turtle()
      .jump([width / 2 + 10, height / 2 + 20])
      .down()
      // Draw the body
      .forward(5)
      .right(90)
      .forward(10)
      .right(90)
      .forward(5)
      .right(90)
      .forward(10)
      // Draw the head
      .jump([width / 2 + 10, height / 2 + 30])
      .down()
      .arc(360, 3)
      // Draw the tail
      .jump([width / 2 + 15, height / 2 + 20])
      .down()
      .arc(180, 5)
      .right(90)
      .arc(180, 5)
      .lines();
    finalBackground.push(squirrel);
  }
}

function drawBackground(background) {
  // Implement the drawing logic for background elements
  background.forEach(element => {
    drawLines(element);
  });
}
