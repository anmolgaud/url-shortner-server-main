
# URL Shortner Service with Load Balancer
![system architecture](https://github.com/anmolgaud/url-shortner-server-main/blob/master/images/system-architecture.png?raw=true)

By default the service listens on port 8080
but can be configured in docker compose file.

There are three api-end points available
- /ping - check if the servers are up and running
- /api/create-short-url - create the short url
  - Json - ```{"long_url": "www.google.com" }```
- /api/:short-url - Get value of long url that short url is mapped to

## Installation
1. Install Docker
2. Clone this repository to your local sytem
3. Go "scripts" folder ``` cd ./scripts/ ```
4. Run ```docker compose up -d```


## Configurations
### Server Environment Variables
- PORT - The port you want to run the url-shortner-server
- DB_HOST - Hostname of mysql database
- DB_PORT - Port of mysql database (by default 3306)
- DB_USERNAME - Username for authentication
- DB_PASSWORD - Password for authentication

### MySQL DB Configurations
You can edit the init.sql file present in ./scripts for configuring new username and password for easyurl database
```
CREATE USER '<username>'@'%' IDENTIFIED BY '<password>';
GRANT ALL PRIVILEGES ON easyurl.* TO '<username>'@'%';
```

### LoadBalancer Configurations
You can change the port mapping of LoadBalancer
```
 ports:
      - "<your custom port>:8080" 
```

### Notes
- Make sure DB_USERNAME and DB_PASSWORD are same as <username> and <password> used in init.sql file
- If configuring the PORT environment variable accomodate the same port in /scripts/nginx.conf
```
upstream backendserver {
    server backend-1:<PORT>;
    server backend-2:<PORT>;
  }
```
## Demo
- /api/create-short-url 
  - ![create short url demo](https://github.com/anmolgaud/url-shortner-server-main/blob/master/images/create-short-url.gif?raw=true)
- /api/ping
  - ![ping](https://github.com/anmolgaud/url-shortner-server-main/blob/master/images/ping-2.gif?raw=true)

