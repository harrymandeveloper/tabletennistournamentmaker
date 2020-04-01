# Table Tennis - Solo Technical Challenge for Develop Me
Table Tennis Tournament - Solo Technical Challenge

Contents
- Installation
- Brief
- Approach
- Stretch Goals

# Installation

- Clone or download and run `npm install`



# Project Brief
 
The core of the challenge is to create a tool which randomly creates pairings for a table tennis tournament bracket from a list of names collected from the user.
 
It's up to you how you implement this, with JavaScript, React, or PHP, as a web page, or as an app.
 
Some optional advanced features might include:
ability to record scores for each player, or mark which player won from each pairing, to create the next round of the tournament playoffs
continued rounds created until the final (last 2 players who have won all matches to date play each other, one marked as the winner)
Some suggestions
 
The employers will be looking at your code, so I would strongly suggest you look to demonstrate clear thinking, good quality code and use of comments.
 
You should document what you have done and why, to demonstrate your thinking.
 
If your tool requires a particular environment to run (e.g. Node or PHP) then this should be documented with instructions provided (e.g. a Vagrantfile, package.json, gulpfile.js etc.). In short: I shouldn't struggle to get it working on my local machine, and you shouldn't assume I know how it is supposed to work.
 
You will want to show your experience and competence with Git by version managing your project from the start and providing a link to the repository on GitHub, remember to do regular commits with good commit messages. (Employers will like this!)
 
We're happy to discuss any ideas you have, but will not provide help or specific guidance for this task.
 
What to provide to us
 
You should upload your completed solution to your developme web space or elsewhere (GitHub Pages?), but also upload the source code as a ZIP file and any supporting documentation by the deadline.


# Approach

For this challenge I have chosen to use a combination of react and redux. If there is time, I will add a Laravel back-end with an API.

While not very lightweight and reliant on JavaScript, React does also allow for a seamless transition for the user between five states: 
Name Entry --> Quarter Finals --> Semi-Finals --> Finals --> Winning Page.

# Stretch Goals

Change routing to alter headers depending on what page the user is on within the app.
