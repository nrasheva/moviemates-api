# Moviemates API

The Moviemates API serves as the backend system for the [moviemates-website](https://github.com/nrasheva/moviemates-website), providing a set of endpoints to manage authentication, provide movie data and facilitate the social interactions among users.

## Technologies

![Node.js](https://img.shields.io/badge/Node.js-green?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-gray?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-orange?style=flat&logo=mongoose&logoColor=white)

## Features

- Authentication
- CRUD operations on comments
- Discover movies by genre
- Get movie details
- Manage watchlist

## Acknowledgements

- [The Movie Database (TMDB)](https://www.themoviedb.org)

## Run locally

Clone the project

```bash
git clone https://github.com/nrasheva/moviemates-api
```

Go to the project directory

```bash
cd moviemates-api
```

Install the dependencies

```bash
npm install
```

Start the server

```bash
npm run start
```

## Environment variables

This project uses [Dotenv Vault](https://www.dotenv.org/docs/security/vault) to securely store environment variables. You will need to add the following environmental variables to your .env file:

`MONGOOSE_URI`

`TMDB_API_KEY`

`TMDB_BASE_URL`

`TOKEN_SECRET`

## Feedback

If you have any feedback, please reach me at nadezhda.rasheva96@gmail.com

## License

[MIT](https://choosealicense.com/licenses/mit)
