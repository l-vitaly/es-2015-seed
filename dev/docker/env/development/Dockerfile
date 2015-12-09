FROM nginx

RUN usermod -u 1000 www-data

RUN apt-get update

RUN apt-get install -y vim

RUN sed -i -e"s/sendfile on/sendfile off/" /etc/nginx/nginx.conf
