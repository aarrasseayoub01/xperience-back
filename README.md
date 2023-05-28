Conecerning the database. I ran MySql as a container using the following commands:
- docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=ayoub -e MYSQL_DATABASE=review_app -e MYSQL_USER=ayoub -e MYSQL_PASSWORD=ayoub mysql/mysql-server:latest
- docker exec -it mysql bash
- Enter password:
- show databases;
- USE review_app
-  CREATE TABLE reviews (     id INT PRIMARY KEY,     appID VARCHAR(255),     appStoreName VARCHAR(255),     reviewDate DATETIME,     rating INT,     version VARCHAR(255),     countryName VARCHAR(255),     reviewHeading VARCHAR(255),
  reviewText VARCHAR(255),     reviewUserName VARCHAR(255) );
