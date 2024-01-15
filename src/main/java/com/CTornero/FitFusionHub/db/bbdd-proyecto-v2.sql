DROP DATABASE IF EXISTS FitFusionHub;
CREATE DATABASE FitFusionHub;

USE FitFusionHub;


CREATE TABLE Musculos
(
    id_musculo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre_musculo NVARCHAR(50) NOT NULL
);


CREATE TABLE Ejercicios
(
    id_ejercicio INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre NVARCHAR(50) NOT NULL,
    descripcion NVARCHAR(300) NOT NULL,
    id_musculo INT,
    FOREIGN KEY (id_musculo) REFERENCES Musculos(id_musculo)
);


CREATE TABLE Rutinas
(
    id_rutina INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre NVARCHAR(50) NOT NULL,
    descripcion NVARCHAR(300) NOT NULL
);


CREATE TABLE Ejercicios_Rutinas
(
    id_ejercicio INT,
    id_rutina INT,
    PRIMARY KEY (id_ejercicio, id_rutina),
    FOREIGN KEY (id_ejercicio) REFERENCES Ejercicios(id_ejercicio),
    FOREIGN KEY (id_rutina) REFERENCES Rutinas(id_rutina)
);

