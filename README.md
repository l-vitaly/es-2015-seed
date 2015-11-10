# ES 2015 Seed

A quick start seed for web development with ECMAScript 2015 and AngularJS + Material Design.

# Development Installation (OS X)

Install Docker: [http://docs.docker.com/mac/started](http://docs.docker.com/mac/started)

Installation NodeJs:

``` console
brew install nodejs
```

Run commands:

``` console
git clone git@github.com:vlobchuk/es-2015-seed.git ./project-name
cd project-name
npm install 
./jspm install
docker-compose up -d
export GULP_SERVE_URL=http://you.docker.ip.address:16500
./gulp serve
```
# Base Href

To set the value of base href, use the environment variable BASE_HREF

Example: 

``` console
export BASE_HREF="/web-app/" && ./gulp build
```

# Build Bundle
 
To build the bundle, execute the command:

``` console
./gulp bundle
```

# Build development: 

``` console
./gulp build
```

# Live Reload

``` console
gulp
```

# Nginx Setup 

``` nginx
server {
    listen 80;
    root /var/www;
    index index.html;

    include mime.types;
}
```

# Tests

Run tests: 

``` console
npm test
```

## Galen Tests (Visual Test Driven Development)

To run test on SauceLabs make sure environment variables `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` are set.

#### Running on SauceLabs

`TEST_PREFIX=sl_ npm test`

#### Running Locally

`GALEN_DOMAIN=localhost npm test`

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
- Galen

# Author
 
Vitaly Lobchuk <vn.lobchuk@gmail.com>


Frontend&Backend Developer.

# License

MIT
