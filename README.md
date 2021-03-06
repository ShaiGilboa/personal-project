# Not-Dixit!
<p>Welcome to an online version of <a href='https://boardgamegeek.com/boardgame/39856/dixit' alt='link to description'>Dixit!</a>.
This game was created in two weeks as a final project for Full-Stack Web Development Diploma with <a href='https://concordiabootcamps.ca/' alt='link to Concordia Bootcamps website'>Concordia Bootcamps</a>.</p>
<p>I got the idea for this project from a friend with whom I play this game. With social distancing, we were looking for something we could still do together</p>

---
## Info
<p>Here is a <a href='https://youtu.be/Q-a7bemopmA'>short video</a> explanation.</p>
<p>This version of the game is for 3-7 players, tou are welcome to try it <a href='https://final-project-77e67.web.app/' alt='link to game'>yourself!</a></p>
<p>Using Firebase Real-Time Database, with this game each user can create a game or join a game (with the game id). once logged in, the players can chat with one another, and when ready, they can start playing.</p>
<p>If at any point one is not sure what to do next, simply look to the Navbar for instruction, or read the full instruction in the dropdown menu on the top left.</p>
<p>Have Fun!</p>

---
## Screen Shots
<div display='flex' flexDirection='row'>
<img width='30%' src='./assets/welcomePage.png' alt='game image1'/>
<img width='30%' src='./assets/signInPage.png' alt='game image1'/>
<img width='30%' src='./assets/waitingPage.png' alt='game image1'/>
<img width='30%' src='./assets/waitingRoom2.png' alt='game image1'/>
<img width='30%' src='./assets/chat.png' alt='game image1'/>
<img width='30%' src='./assets/giveTitle.png' alt='game image1'/>
<img width='30%' src='./assets/choose1.png' alt='game image1'/>
<img width='30%' src='./assets/choose2.png' alt='game image1'/>
<img width='30%' src='./assets/matchTitle.png' alt='game image1'/>
<img width='30%' src='./assets/regularScores.png' alt='game image1'/>
<img width='30%' src='./assets/winner1.png' alt='game image1'/>
<img width='30%' src='./assets/startNewModal.png' alt='game image1'/>
<img width='30%' src='./assets/joinNewModal.png' alt='game image1'/>
<div>

---
## Installing
Note that a firebase RealTime Database will need to be set up and various API keys (see Technologies) will be required for full functionality.
1. Clone the repo.
2. In both client and server directory terminals, run commands ```$yarn install``` and  ```$yarn start```.
3. Login using Google Login.

------
## Technologies
Technologies utilized in this project include:
### Front End:
React, Redux, JavaScript, Styled Components 
### Back End:
Express.js, Node, Firebase Real-Time Database

---
## Key points in the process
- In order to get this game up and running, I had to learn the basics of Firebase Real-Time Database.
- State control for Ga,e. and Round, and Player with multiple players simultaneously.
- Firebase Auth.

### potential additions 
Starting this project I had (like many before me) many unrealistic goals. for now, these will be my future stretch goals.
 - Update user profile: image, name, preferred color, Win-Loss ratio.
 - Video feed while playing: the initial thought wsa to use WebRTC (or similar).
 - Customize decks: having the option to upload personal decks of cards.

---
## Contact

If you want to contact me you can reach me at <shizel@gmail.com>.