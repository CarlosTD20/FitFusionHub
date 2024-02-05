DROP DATABASE IF EXISTS FitFusionHub;
CREATE DATABASE FitFusionHub;

USE FitFusionHub;


CREATE TABLE muscles
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name NVARCHAR(50) NOT NULL
);


CREATE TABLE exercises
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name NVARCHAR(50) NOT NULL,
    description NVARCHAR(300) NOT NULL,
    id_muscle INT,
    FOREIGN KEY (id_muscle) REFERENCES muscles(id)
);


CREATE TABLE routines
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name NVARCHAR(50) NOT NULL,
    description NVARCHAR(300) NOT NULL
);


CREATE TABLE exercises_routines
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_exercise INT,
    id_routine INT,
    FOREIGN KEY (id_exercise) REFERENCES exercises(id),
    FOREIGN KEY (id_routine) REFERENCES routines(id)
);

