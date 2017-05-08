## Conway.js ##
Conways Game of Life in HTML5/JavaScript
<h2>About</h2>
<h3>Inspiration</h3>
<p>This is a curiosity / learning experience project based on some work I did at University; <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a> in C++ using the Windows Graphics API. It was a fairly fun project and it allowed me to explorer new topics (mostly cellular automata) that I then went onto use in my <a href="http://dillanmann.co.uk/">Honours Project</a> in the form of Lindenmeyer Systems.
<br>
<br>
I'm a Games Programmer by education with a background in C++ and C# but work in Test Automation Software with, in particular, web-based software. This essentially meant that from time to time I have to work in web technologies (HTML, JavaScript, etc) and piqued my interest for getting more involved and learning it properly in my spare time and this fit in rather nicely as a 'hello world' project.
</p>
<h3> Usage </h3>
<p>
<ul>
<li>Click on the grid to switch a cells state between dead and alive.</li>
<li>Click the <b>'Simulate!'</b> button to start the simulation. Note that the grid cannot be interacted with whilst the simulation is running.</li>
<li>Click the <b>'Stop!'</b> button to stop the simulation and enable interaction.</li>
<li>Click the <b>'Clear!'</b> button to stop the simulation and enable interaction.</li>
<li>Select your own choice of 'Dead' and 'Alive' colours using the colour select boxes.</li>
</ul>
</p>
<h3>Rules</h3>
<p>Like any cellular automata system, Conway's Game of Life uses a set of rules to define how the simulations runs. This simulation uses the following rules:
<ul>
<li>If a cell is alive and has less than 2 neighbours who are also alive, it dies from <b>loneliness</b>.</li>
<li>If a cell is alive and has more than 3 neighbours who are also alive, it dies from <b>overcrowding</b>.</li>
<li>If a cell is alive and has exactly 2 or 3 neighbours who are also alive, it stays <b>alive</b>.</li>
<li>If a cell is dead and has exactly 3 neighbours who are alive, it becomes <b>alive</b> through <b>reproduction</b>.</li>
</ul>
</p>
Written with [StackEdit](https://stackedit.io/).
