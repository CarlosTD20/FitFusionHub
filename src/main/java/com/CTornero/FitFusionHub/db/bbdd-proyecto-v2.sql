DROP DATABASE IF EXISTS FitFusionHub;
CREATE DATABASE FitFusionHub;

USE FitFusionHub;


CREATE TABLE Musculos
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre NVARCHAR(50) NOT NULL
);


CREATE TABLE Ejercicios
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre NVARCHAR(50) NOT NULL,
    descripcion NVARCHAR(300) NOT NULL,
    id_musculo INT,
    FOREIGN KEY (id_musculo) REFERENCES Musculos(id)
);


CREATE TABLE Rutinas
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre NVARCHAR(50) NOT NULL,
    descripcion NVARCHAR(300) NOT NULL
);


CREATE TABLE Ejercicios_Rutinas
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_ejercicio INT,
    id_rutina INT,
    FOREIGN KEY (id_ejercicio) REFERENCES Ejercicios(id),
    FOREIGN KEY (id_rutina) REFERENCES Rutinas(id)
);

