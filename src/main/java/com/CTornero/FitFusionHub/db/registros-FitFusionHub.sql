INSERT INTO muscles (name) VALUES
('Pecho'),
('Espalda'),
('Pierna'),
('Bíceps'),
('Tríceps'),
('Hombro');

INSERT INTO routines (name, description) VALUES
('Día de Pecho', 'Día enfocado a trabajar el pecho.'),
('Día de Espalda', 'Día enfocado a trabajar la espalda.'),
('Día de Pierna', 'Día enfocado a trabajar la pierna.'),
('Día de Brazo (Bíceps y Tríceps)', 'Día enfocado a trabajar el bíceps y el tríceps'),
('Día de Hombro', 'Día enfocado a trabajar el hombro completo.'),
('Día de Push', 'Día enfocado en empujes.'),
('Día de Pull', 'Día enfocado en tirones.'),
('Día de Leg', 'Día enfocado en la pierna.');

INSERT INTO exercises (name, description, id_muscle) VALUES
('Press de banca', 'Descripción del Press de Banca', 1),
('Press inclinado', 'Descripción del Press Inclinado', 1),
('Pull-ups', 'Descripción de Pull-ups', 2),
('Peso muerto', 'Descripción del Peso Muerto', 2),
('Sentadilla', 'Descripción de la Sentadilla', 3),
('Prensa femoral', 'Descripción de Prensa Femoral', 3),
('Curl femoral tumbado', 'Descripción de Curl Femoral Tumbado', 3),
('Curl femoral de pie', 'Descripción de Curl Femoral de Pie', 3),
('Sentadilla sumo', 'Descripción de Sentadilla Sumo', 3),
('Peso muerto piernas rígidas', 'Descripción de Peso Muerto Piernas Rígidas', 3),
('Zancadas', 'Descripción de las Zancadas', 3),
('Curl de bíceps con barra', 'Descripción del Curl de Bíceps con Barra', 4),
('Curl con mancuernas', 'Descripción del Curl con Mancuernas', 4),
('Tríceps en polea', 'Descripción de Tríceps en Polea', 5),
('Fondos en máquina', 'Descripción de Fondos en Máquina', 5),
('Press militar', 'Descripción del Press Militar', 6),
('Elevaciones laterales', 'Descripción de las Elevaciones Laterales', 6),
('Press de pecho inclinado', 'Descripción del Press de Pecho Inclinado', 1),
('Remo con barra', 'Descripción de Remo con Barra', 2),
('Prensa de piernas', 'Descripción de la Prensa de Piernas', 3),
('Curl martillo', 'Descripción del Curl Martillo', 4),
('Face pulls', 'Descripción de Face Pulls', 6),
('Fondos en paralelas', 'Descripción de Fondos en Paralelas', 5),
('Pulldown en polea', 'Descripción de Pulldown en Polea', 2),
('Sentadilla frontal', 'Descripción de la Sentadilla Frontal', 3),
('Curl concentrado', 'Descripción del Curl Concentrado', 4),
('Press arnold', 'Descripción del Press Arnold', 6),
('Pull-ups en V', 'Descripción de Pull-ups en V', 2),
('Extensiones de cuádriceps', 'Descripción de Extensiones de Cuádriceps', 3),
('Curl de bíceps con barra', 'Descripción del Curl de Bíceps con Barra', 4),
('Elevaciones traseras', 'Descripción de las Elevaciones Traseras', 6),
('Press de banca declinado', 'Descripción del Press de Banca Declinado', 1),
('Remo con barra T', 'Descripción de Remo con Barra T', 2),
('Prensa hack', 'Descripción de la Prensa Hack', 3),
('Curl 21', 'Descripción del Curl 21', 4),
('Press frontal con barra', 'Descripción del Press Frontal con Barra', 6),
('Pull-ups cerrados', 'Descripción de Pull-ups Cerrados', 2),
('Sentadilla búlgara', 'Descripción de la Sentadilla Búlgara', 3),
('Curl con barra Z', 'Descripción del Curl con Barra Z', 4),
('Press con mancuernas', 'Descripción del Press con Mancuernas', 6),
('Pulldown en polea alta', 'Descripción de Pulldown en Polea Alta', 2),
('Fondos en máquina declinados', 'Descripción de Fondos en Máquina Declinados', 5),
('Press de banca con mancuernas', 'Descripción del Press de Banca con Mancuernas', 1),
('Remo en máquina', 'Descripción de Remo en Máquina', 2),
('Sentadilla sumo', 'Descripción de la Sentadilla Sumo', 3),
('Curl 21 invertido', 'Descripción del Curl 21 Invertido', 4),
('Press militar con barra', 'Descripción del Press Militar con Barra', 6),
('Pull-ups amplios', 'Descripción de Pull-ups Amplios', 2),
('Extensiones de cuádriceps en máquina', 'Descripción de Extensiones de Cuádriceps en Máquina', 3),
('Curl martillo con mancuernas', 'Descripción del Curl Martillo con Mancuernas', 4),
('Elevaciones laterales con cable', 'Descripción de las Elevaciones Laterales con Cable', 6),
('Aperturas en polea', 'Descripción de Aperturas en Polea', 1),
('Pulldown trasero en polea', 'Descripción de Pulldown Trasero en Polea', 2),
('Sentadilla búlgara con mancuernas', 'Descripción de la Sentadilla Búlgara con Mancuernas', 3),
('Curl concentrado con mancuerna', 'Descripción del Curl Concentrado con Mancuerna', 4),
('Press frontal con cable', 'Descripción del Press Frontal con Cable', 6),
('Flys en máquina', 'Descripción de Flys en Máquina', 1);


INSERT INTO exercises_routines (id_exercise, id_routine) VALUES
(1, 1), (2, 1), (13, 1), (38,1);


INSERT INTO exercises_routines (id_exercise, id_routine) VALUES
(3, 2), (14, 2), (39, 2), (43, 2);


INSERT INTO exercises_routines (id_exercise, id_routine) VALUES
(5, 3), (15, 3), (53, 3), (7, 3), (8, 3), (44, 3);


INSERT INTO exercises_routines (id_exercise, id_routine) VALUES
(11, 4), (20, 4), (25, 4), (13, 4), (22, 4), (41, 4);


INSERT INTO exercises_routines (id_exercise, id_routine) VALUES
(15, 5), (16, 5), (21, 5), (35, 5);


INSERT INTO exercises_routines (id_exercise, id_routine) VALUES
(1, 6), (2, 6), (11, 6), (20, 6);


INSERT INTO exercises_routines (id_exercise, id_routine) VALUES
(39, 7), (43, 7), (22, 7), (41, 7); 


INSERT INTO exercises_routines (id_exercise, id_routine) VALUES
(5, 8), (15, 8), (53, 8), (7, 8), (8, 8), (44, 8);
