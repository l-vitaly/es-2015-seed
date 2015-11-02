# Nginx Setup


## Dev: 

``` nginx
server {
    listen 80;
    root /var/www;
    index index.html;

    include mime.types;
}
```

## Prod: 

``` nginx
server {
    listen 80;
    root /var/www;
    index index.html;

    include mime.types;
}
```
