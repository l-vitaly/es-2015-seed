FROM nginx

RUN usermod -u 1000 www-data

RUN apt-get update

RUN apt-get install -y vim

RUN sed -i -e"s/sendfile on/sendfile off/" /etc/nginx/nginx.conf

ADD ./dev/docker/nginx/conf/prod.conf /etc/nginx/conf.d/default.conf

ADD ./dist /var/www/dist

ADD ./index.html /var/www/index.html

RUN chown -R www-data /var/www
