##Unit 15 Assessement

Fork and clone this repo, and submit a pull request when you're done.

###Intermediate JavaScript (and a bit of AJAX)

Answer the conceptual questions on [this short Google Form](https://docs.google.com/forms/d/1STLaLWe8vPRbuLVytCccepwbIu4Rwol7jbtDGQ6-vxs/viewform) to the best of your ability.

###Debug A Game

I have invented the most mind-numbing game imaginable. You just click on squares to get points. Accordingly, a casino in Las Vegas is interested in buying the app from me but the have some security and design concerns. A player who knows the code base could cause all sorts of mischief messing around in the console. Refactor the app to solve the following problems:

1. As much of the functionality as possible needs to be out of the global namespace. For instance, a player should not be able to call `addRowToClickZone()` to add more space to the board.
2. There should be no calls to the model from the view.
3. There should be no DOM manipulation in the model. (Don't add a call to the view instead!)
4. Find somewhere secure to store the canonical score. (If a player edits the `#score` span in the console, it should reset on their next click.)
5. If you complete 1 to 4, implement a version of the game where the board size iterates up by 1 after every 100 points.
