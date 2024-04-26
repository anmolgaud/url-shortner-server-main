CREATE DATABASE IF NOT EXISTS easyurl;
USE easyurl;
CREATE USER 'dev_user'@'%' IDENTIFIED BY 'devmysql';
GRANT ALL PRIVILEGES ON easyurl.* TO 'dev_user'@'%';
FLUSH PRIVILEGES;