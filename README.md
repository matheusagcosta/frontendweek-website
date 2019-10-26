<p align="center">
  <img src="_src/assets/img/logo.svg" width="100">
</p>

# Front-end Week

Bring people together from the front-end development community to exchange knowledge, meet new people and improve ourselves in small tech meetings and Meetups.


[Access the website](http://frontendweek.com.br/)

This project uses:
- [harpjs](http://harpjs.com/)
- [Browsersync](https://www.browsersync.io/)

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [yarn](https://yarnpkg.com/)

```sh

# Clone this repository
git clone git@github.com:frontendweek/frontendweek-website.git
cd frontendweek-website.git

# install dependencies
$yarn or $npm install

```

After that, you should be good to go :)

### Folders/Files Structure

```sh
├── assets/
│   ├── css/
│   │   └── *.sass
│   ├── img/
│   ├── js/
│   │   ├── modules/
│   │   └── index.min.js
├── includes/
│   └── *.jade
├── index.jade
├── package.json
├── README.md
```
These structure will change during the project.


### Scripts

- `yarn dev`: starts the server with BrowserSync on localhost:3000/
- `yarn build`: compiles the files into the *docs* folder to get ready to deploy

## License

MIT License
