FROM corbinu/docker-nginx-php

RUN usermod -u 1000 www-data

RUN apt-get install -y vim

RUN apt-get install -y php5-mongo

RUN sed -i -e"s/sendfile on/sendfile off/" /etc/nginx/nginx.conf

ADD ./dev/docker/nginx/conf/prod.conf /etc/nginx/sites-enabled/site

ADD ./dist /var/www/dist
ADD ./index.html /var/www/index.html
