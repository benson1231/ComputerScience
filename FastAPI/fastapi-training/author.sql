CREATE DATABASE fastapi;
USE fastapi;
CREATE TABLE message(
	id BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    author VARCHAR(255) NOT NULL,
    content VARCHAR(255) NOT NULL,
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP
)
SELECT * FROM message;