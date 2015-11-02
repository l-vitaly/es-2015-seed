# Development Installation

Install Docker: [http://docs.docker.com/mac/started](http://docs.docker.com/mac/started)

Installation NodeJs (OS X):

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
