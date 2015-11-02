# Nginx Setup 

``` nginx
server {
    listen 80;
    root /var/www;
    index index.html;

    include mime.types;
}
```
