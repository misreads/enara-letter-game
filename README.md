# Letters game for Enara Health • Fullstack Interview
Implementation of the coding challenge proposed [here](https://github.com/baytelman/fullstack-interview).

In this implementation, the following points have been completed:
- Game board with clear button, word input and tile board, populated by tile components.
- Extra points as :
    - Validation on first letter selection
    - Validation to select only neighbour tiles to last tile selected
    - Solution is deployed to Github Pages
- Additional config for :
    - Select which board to use, modifing the .env config file
    - Add a 'clear board' button that shuffles and clears word from game

# About the project
The implementation is hosted [here](https://github.com/misreads/enara-letter-game) on Github.
Also, a **live demo** is deployed [here](https://misreads.github.io/enara-letter-game/).

This project was made using **CRA (create-react-app)**, and runs using **npm version 6.14.4** and **node version 14.0.0**.
Additional features can be activated modifying the **.env** file on the root of the project, using **true** or **false**.
# Installation
Before any attempt to run this project, make sure that you are on **npm version 6.14.4** and **node version 14.0.0**.
Then:

- Clone the [repository](https://github.com/misreads/enara-letter-game)
- Run 'npm i' to install dependencies
- Run 'npm start' to run the project (which will launch on 'localhost:3000')
