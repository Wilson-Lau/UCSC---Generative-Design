//developed using code from https://p5js.org/examples/simulate-particle-system.html
let system;

function setup() {
  createCanvas(1000, 1000);
}


function draw() {
  textSize(32);
  text('Generated terrain and Settlements ',40, 25)
  textSize(12);
  text('I am interested in creating a tile based terrain generator. Perlin noise will play into this idea, as it would \nbe useful towards a creation of a more interesting environment.  I wish to develop this because already \nbuilding a tile based turn based game in my free time. The generated terrain will be used as a building block \ntowards a level. Procedural generation is often used with in the games industry, with recent titles like no mans \nsky, elite, and such taking it to the far end, by using the generation results as is. Other games, like Skyrim, uses \nthe generated result as a building block, which is the way I would like to use it.  ', 40, 40);

  text('An other concept I would like to explore is the game of life. I believe that the locations of the generated \nsettlements will be located near resources, and competing settlements around it. For instance, if a resource \nwere to be in the catchment area of a settlement, it should affect the growth of the settlement.The end result \nof this should be of help as an idea base for my maps. ', 40, 140);

  text('As stated above, this generation is for developers side, and as such is not created towards a public audience. \nYet for this project, one is required to describe the artistic merit of such creation, and I shall do so. \nThe experience should be clicking on a generation button, waiting and trying your best not to kill the webpage, \nthen viewing the results. I hope the results will be similar to maps in Advanced Wars, or Wargroove. The maps \nwill have rivers, and ways to by pass them.', 40, 220);

  text('This will be based upon asg2, and will use Perlin noise within the generation. I will also use a similar idea to \nthe game of life for the settlements, but just a tad more complicated. Additionally, I wish to include a \npathfinding verification method, like the ones used within the maze generator, as there has to be ground paths \nbetween settlements.', 40, 320  );
}
