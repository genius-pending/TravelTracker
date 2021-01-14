DROP DATABASE IF EXISTS traveltracker_db;
CREATE DATABASE traveltracker_db;

USE traveltracker_db;

CREATE TABLE holidays (
  id INT NOT NULL AUTO_INCREMENT,
  cityname VARCHAR(255) NOT NULL,
  hotel VARCHAR(255) NOT NULL,
  restaurant VARCHAR(255) NOT NULL,
  review VARCHAR(255) NOT NULL,
  picture VARCHAR(255)NOT NULL,
  PRIMARY KEY(id)
);