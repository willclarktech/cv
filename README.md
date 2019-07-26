# cv

This is my CV, written in React. Yes it’s kind of overkill to use React for a CV layout, but I’m used to thinking about layouts in a React-style way, and now it’s written it should be easy to update in the future. Also the vast majority of the React code I’ve written is in a private company repo, so this was a convenient project for demonstrating my capability.

See [here](http://willclark.tech/cv/) for an online version.

This project was created using [create-react-app](https://github.com/facebookincubator/create-react-app).

## Installation

```sh
git clone https://github.com/willclarktech/cv.git
cd cv
yarn
```

## Running the development application with example data

```sh
yarn start:example # or npm run start:example
```

Visit `localhost:3000`.

## Configuration

```sh
cp .env.example .env
```

1. Update `.env` variables, including contact details/social networks.
1. Update `src/content.js` with your own details.
1. Change styling variables in `src/styles/_variables.style.js`.

The size of the body is limited to an A4 page, so you will inevitably have to adjust the spacing a bit to fit your particular content.

## Development

```sh
yarn start # or npm run start
```

## Deployment

Update `homepage` in `package.json` if you want to deploy to GitHub Pages.

Deploy with sensitive data redacted/obfuscated:

```sh
yarn deploy # or npm run deploy
```
