# Planets_Angular_Express
Planets demo using Angular 1.6

External libraries used:

    Angular 1.6 for data-binding
    Bootstrap for layout and responsive design
    jQuery for the AJAX call to return the Planets json file (this in theory could be removed and native JS used instead)
    Font awseome to display open close icons
    Express is used to create the node server

Other info:

    The planets.json file through a restful api via the GET route localhost:3000/api/planets
    By using the Bootstrap layout markup responsive is in-built into the demo so it visually works across desktop, tablet & mobile. Re-sizing the browser window will demostrate this.
    The demo has been run in firefox, chrome, edge, Ie11...testing in ie11 using various modes works from 9 upwards.
    Angular files are located in js/app and for the purpoes of the demo are referenced as seperate script in index.html (i.e. no bundled script file is created)
    server.js contains the node express server code

To install:

Copy the Planets_Angular_Express folder within the zip file into a node server.

To run the demo:

    In the node command window make sure you are in the Planets_Angular_Express folder on the node server
    Type in node server which will start the server but doesn't automatically open the index.html file in the browser
    Once started enter the url http:\localhost:3001 to display the demo
