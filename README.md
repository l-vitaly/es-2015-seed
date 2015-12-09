# ES 2015 Seed

A quick start seed for web development with ECMAScript 2015 and AngularJS + Material Design.

# Development Installation (OS X)

## Install Docker

[http://docs.docker.com/mac/started](http://docs.docker.com/mac/started)

## Installation NodeJS

``` console
brew install nodejs
```

## Install Application

``` console
git clone git@github.com:vlobchuk/es-2015-seed.git ./project-name
cd project-name
npm install 
./jspm install
```

## Run Application:

You can change the url for BrowserSync using the argument --url 
or change option in ./dev/gulp/options.js set browserSync.localUrl

``` console
docker-compose up -d
./gulp
```

# Build
 
## Build for environment

Avail environments:

- development
- staging
- production

Use argument --env for set environment:

``` console
./gulp build --env {environment}
```

## Live reload

``` console
gulp
```

# Deploy

Modify deployment script before run.

## Staging

``` console
./dev/deploy/staging.sh
```

## Production

``` console
./dev/deploy/production.sh
```

# Nginx Setup 

``` nginx
server {
  listen 80;
  root /var/www;
  index index.html;

  include mime.types;

  location ~ ^/dist/ {
    break;
  }

  location / {
    try_files $uri $uri/ /index.html =404;
  }
}
```

# Tests

Run tests: 

``` console
npm test
```

# Gulp Tasks

|Command|Desc|
|:--|:--|
|`gulp clean`|Deletes all files in the output path|
|`gulp serve` _(default)_|Launch with live reload|
|`gulp bundle`|Build for production|
|`gulp build`|Build for development|
|`gulp build-html`|Build html templates|
|`gulp build-sass`|Build SASS files|
|`gulp build-index`|Build main index.html file|
|`gulp build-static`|Build static bundle|
|`gulp copy-images`|Copy SASS images|
|`gulp copy-fonts`|Copy SASS fonts|
|`gulp copy-assets`|Copy vendors assets|
|`gulp lint`|Run ESLint [http://eslint.org](http://eslint.org)|

# Used Technologies and Components

- AngularJS
- Angular Animate
- Angular Cookies
- Angular Sanitize
- Angular Messages
- Angular Aria
- Angular UI Router 
- Angular Material
- SASS
- Gulp

# Author
 
Vitaly Lobchuk <vn.lobchuk@gmail.com>

Frontend&Backend Developer.

# License

MIT
