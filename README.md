# Table Tennis - Solo Technical Challenge for Develop Me
Table Tennis Tournament - Solo Technical Challenge

Contents
- Installation
- Brief
- Approach
- Stretch Goals

# Installation

- Clone or download and run `npm install`

# App Design

- Available here: bit.ly/ttennistourndoc

# Project Brief
 
The core of the challenge is to create a tool which randomly creates pairings for a table tennis tournament bracket from a list of names collected from the user.
 
It's up to you how you implement this, with JavaScript, React, or PHP, as a web page, or as an app.
 
Some optional advanced features might include:
ability to record scores for each player, or mark which player won from each pairing, to create the next round of the tournament playoffs
continued rounds created until the final (last 2 players who have won all matches to date play each other, one marked as the winner)
Some suggestions
 
If your tool requires a particular environment to run (e.g. Node or PHP) then this should be documented with instructions provided (e.g. a Vagrantfile, package.json, gulpfile.js etc.). In short: I shouldn't struggle to get it working on my local machine, and you shouldn't assume I know how it is supposed to work.
 
You will want to show your experience and competence with Git by version managing your project from the start and providing a link to the repository on GitHub, remember to do regular commits with good commit messages. (Employers will like this!)
 
We're happy to discuss any ideas you have, but will not provide help or specific guidance for this task.
 
What to provide to us
 
You should upload your completed solution to your developme web space or elsewhere (GitHub Pages?), but also upload the source code as a ZIP file and any supporting documentation by the deadline.


# Approach

For this challenge I have chosen to use a combination of react and redux. 

If there is time, I will add a Laravel back-end with an API.

While not very lightweight and reliant on JavaScript, React does also allow for a seamless transition for the user between the five stages of the tournament described in the brief:

Name Entry --> Quarter Finals --> Semi-Finals --> Finals --> Winning Page.

Within each stage, there is both a shuffle of names and a pair creation required.


# The Journey

In the first instance, I created a basic todo list style app with functionality that allowed the user to add and delete players.

You can see this code in the BackupPlayerCode.js

To this basic structure I then added in a pairing function that shuffled players and created new pairs of players together.

These were stored in an array within react.

e.g.

Players

[ 
    playerName: Susie,  playerId: 203945

]

Pair

[
    [ playerName: Susie,  playerId: 203945 ],
    [ playerName: Duncan, playerId: 405967 ]
]

And a third array called allPairs.


allPairs

[
    [
        [ playerId: 203945, playerName: Susie ],
        [ playerId: 405967, playerName: Duncan ],
    ]
    [
        [ playerId: 874652, playerName: Jana ],
        [ playerId: 746495, playerName: Isabella ],
    ]
]

So far, so good. In conventional JavaScript, mapping over nested arrays, requires simply the key, in this case, the id, and the item in the array you want to retrieve.

These can then be rendered in the browser.

Unfortunately, in JSX, trying to access nested arrays throws a series of errors that appear to have no easily remedied solutions.

Among the solutions attempted:

i) Standard nested JS syntax.
ii) Splitting pair arrays, using concat and rejoining in new, non-nested arrays.
iii) Adding ids to pairs and using these as keys.
iv) Using functions instead of keys within maps.
v) Applying nested mapping functions to access items within arrays.
vi) Installing a reducer that accepts a case to shuffle on the creation of a player.
vii) Storing players and creating an entirely separate shuffle component.
viii) Transforming the app from class based components into functional components.
ix) Restructuring the app from a Quarter-Finals to Finals structure to a structure that simply catered for the MVP.

After 72 hours of attempts, I re-wrote the app twice with different versions of the shuffle functions, eventually realising that the shuffle would be better achieved by re-writing the application in vanilla JavaScript.

Every journey has its lessons and I was disappointed not to be able to find an elegant solution to the problem – the one major hurdle to an MVP.

Along the way, I did, however complete many of these other stretch goals, such as separating the app into components that I had wanted to do in the creation of this app.

I am not finished with this app and I want to continue to try new approaches and to teach myself more React until I can find an elegant, refactored solution.

Such as it is, you can visit the app at:
https://harrymandeveloper.github.io/tabletennistournamentmaker/#/


# Stretch Goals

Move App into components folder.
Change routing to alter headers depending on what page the user is on within the app.
Bronze play-off match.
Add a description of contents within CSS files.
