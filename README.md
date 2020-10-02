# VideoGame JS
This project consists of building a video game using JavaScript (ES6) and the Phaser game engine. An encapsulation in modules was carried out through Webpack. Player scores are tracked and sent to the Leaderboard API. And finally, the test of some units was carried out using Jest.

![screenshot](./Screenshot.png)

![screenshot](./Screenshot1.png)

![screenshot](./Screenshot2.png)

# Game Design Documentation

Shooter is a never ending single player game with increasing difficulty that you will never want to stop playing. Destroying enemy ships in the sky, but be careful they can crash you

## :video_game: How to play the game

1) In the title scene, the player will need to enter their username in the text box and then by clicking the play button the game will start.

2) The game begins with the player in the center of the left side of the screen and the enemy ships will appear on the right side.

3) The player at the beginning has 3 lives and 100 life points.

4) the player can move with the arrows and shoot with the space bar.

5) The player can pause the game by pressing the Enter key and pressing Enter again to return to the game.

6) The player must destroy the enemy ships to score. If the player lets enemy ships pass, he will lose health points. The player must also be careful not to collide with enemy ships or he will lose health points.

7) The game ends when the player has no life and health points.


## :package: Built With

- Javascript (ES6)
- Phaser
- Webpack
- Jest

## :mag: Live Demo

[Live Demo Link](https://videogame-js.netlify.app/)

## :computer: Getting Started

To get a local copy up and running follow these simple steps.


### Download

1) Clone the repository to your local machine

```sh
  $ git clone https://github.com/mcervantes71/VideoGame_JS.git
```

2) cd into the directory

```sh
  $ cd VideoGame_JS
```

### Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

### Usage

Install the dependencies in the local node_modules folder

```sh
  $ npm install
```

Build project and open web server running project

```sh
  $ npm start
```

Builds code bundle with production settings (minification, uglification, etc..)

```sh
  $ npm run build
```

## :ballot_box_with_check: Testing

Run testing cases and Jest will print messages depending on the result

```sh
  $ npm run test
```

## :busts_in_silhouette: Authors

👤 **Martin Cervantes**

- Linkedin: [Martin Cervantes](https://www.linkedin.com/in/cervantesmartin/)
- Twitter: [@M4rt1nC3rv4nt3s](https://twitter.com/M4rt1nC3rv4nt3s)
- Github: [@mcervantes71](https://github.com/mcervantes71)
- Gmail: [cervantes.martine](mailto:cervantes.martine@gmail.com)

## 🤝 Contributing

    Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](../../issues).

## :star2: Show your support

    Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](lic.url) licensed.
