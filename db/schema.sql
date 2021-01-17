-- Sequelize only require to create database
DROP DATABASE IF EXISTS traveltracker_db;
CREATE DATABASE traveltracker_db;

-- Table only for mySQL
USE traveltracker_db;
CREATE TABLE holidays (
  id INT NOT NULL AUTO_INCREMENT,
  cityname VARCHAR(255) NOT NULL,
  review VARCHAR(255) NOT NULL,
  hotel VARCHAR(255),
  restaurant VARCHAR(255),
  picture VARCHAR(255,
  created_at DATETIME
  PRIMARY KEY(id)
);