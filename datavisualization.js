let table;

function preload() {
  table = loadTable('adoption_data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 600);
  background(255);

  let years = table.getColumn('Year');
  let adoptions = table.getColumn('Adoptions').map(Number);

  let maxAdoptions = max(adoptions);
  let margin = 50;
  let barWidth = (width - 2 * margin) / years.length;

  for (let i = 0; i < years.length; i++) {
    let x = margin + i * barWidth;
    let y = map(adoptions[i], 0, maxAdoptions, height - margin, margin);
    let barHeight = height - margin - y;

    fill(100, 150, 250);
    rect(x, y, barWidth - 5, barHeight);

    fill(0);
    textAlign(CENTER);
    text(years[i], x + (barWidth - 5) / 2, height - margin + 15);
    text(adoptions[i], x + (barWidth - 5) / 2, y - 5);
  }

  stroke(0);
  line(margin, margin, margin, height - margin);
  line(margin, height - margin, width - margin, height - margin);

  for (let i = 0; i <= maxAdoptions; i += maxAdoptions / 10) {
    let y = map(i, 0, maxAdoptions, height - margin, margin);
    noStroke();
    fill(0);
    textAlign(RIGHT);
    text(int(i), margin - 10, y);
    stroke(200);
    line(margin, y, width - margin, y);
  }
}
