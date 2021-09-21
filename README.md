# Lobster Challenge one-page website

Every lobster should have a name. Would you agree?

This single page website's intent is to promote one of the first toy smartcontract created on the Cardano blockchain.

More details can be gathered here:

https://github.com/input-output-hk/lobster-challenge.

## Frontend (lobster-app)

Frontend is a react app, see [README](./lobsster-app/README.md).

Configuration is via `.env` files.
* `REACT_APP_API_URL` is a get URL for polling
* `REACT_APP_API_POLL_DELAY` defines poll interval in ms (default: 3000)

## Backend (lobster-api)

Backend is a vanilla node express app.

Configuration is via config file (in `./config` folder by default, override via `NODE_CONFIG_DIR` env var).

* `default.json` is used by default
* override env-specific files as `development.json` or `production.json` (specify environment via  `NODE_ENV` env var)

## Deployment

* clone the repo
* build app
```
cd lobster-app
npm run build
```
* serve api
```
cd ../lobster-api
NODE_ENV=production npm run start
```
