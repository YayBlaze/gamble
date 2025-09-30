 DROP TABLE IF EXISTS users;
 CREATE TABLE users (
	username varchar(15),
	password varchar(15),
	balance int,
	session_id varchar(255),
	session_expire long,
	allow_collect long,
	birth_time long,
	ip char(15),
	PRIMARY KEY (Username)
);
