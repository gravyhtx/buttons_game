# buttons_game

## INTRODUCTION

Welcome to the "Buttons Game"

This app is a prototype to demonstrate functionality for a project that's currently in production.

While this game may stylistically seem quite simple, this framework is being utilized as a foundation for something much larger. The filesystem is structured with MVC organization to be able to methodically add the additional coding without getting lost. All other in-game elements will be much easier to compile into this filesystem as they are added. 

Currently the CDN, Materialize, is being used only for some layout features, mostly just the waves effect on-click. There is also a native Javascript code ready for a battery charge detection that is being ommited for the purposes of demonstration as it may or may not be used in the final game.

Besides that, everything else has been custom designed for this project. While you can see my style in other projects, this is a demonstration of organization and problem solving as I will explain with the gameplay. This project also shows the other half of what I can do with all music and sound effect sample editing created solely by myself as well. The final version of this project will have a fully immersive story and an extensive soundtrack that will be available for download and streaming as well.


## GAMEPLAY

The game begins on clicking go. Hopefully the rest of the game will be as obvious as that so users will intuitively know how to play with or without instruction. That is the philosophy of the design and UI to come.

After the user clicks go a random button will light up and the user must click on them in as they light up. The goal is to complete the sequence before time runs out which is visually indicated by the elapsed timer and a progress bar. Simple enough.

However there will be obstacles to completing this task. Once the computer detects your presence, it will activate a self-defense protocol in which the user will then have a 1m 20s race to completion. You will be warned by this with a siren and the status will change from "Listening" to "UNAUTHORIZED USER DETECTED!". At this point the computer will show warning pop ups which must be closed to continue. After 20 seconds there will be another additional attempt to distract you as the buttons will all begin to randomly light up for a brief period. As time goes on these attacks are more likely to happen.


## CHALLENGES AND UPDATES

Several challenges have already been addressed in this process to make the game challenging yet fair. Since the attacks are random, some games are much more challenging than others.

This was solved by ensuring a pop up attack will happen within at least 10 seconds and will also not retrigger for another 2 seconds to avoid unintended frustrations. This made the second attack phase easier to develop. This event was made so that it will still grant you a point when the right button is pressed even when you can't see it. It was a difficult task to cycle through the buttons making it seem random without being random. Users do not percieve true randomness as random so some structure must be in place to improve this perception by adding some predictability.

A third attack phase is in production as well though it will only be decided if it is kept after it has been tested thoroughly. Actual pop ups are also being added instead of browser alerts as well. The primary function of this version is to serve as a foundation and visualization of the features needed for the MVP game. Much testing has been done and more will be done in this format, however the final game will be only available on mobile devices so once this phase is complete, much more design and tested is needed to complete the project.

Feel free to contact me for any input: godisgravy@gmail.com
