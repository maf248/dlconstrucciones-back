INSERT INTO services (title, image) VALUES
('Vivienda','timthumb1.png'),
('Antenas de Telecomunicaciones','timthumb2.png'),
('Piscinas','timthumb3.png');

INSERT INTO pictures (services_b_id, picture) VALUES
(3,'Vista-03.jpg'),
(3,'Vista-05.jpg'),
(3,'WhatsApp-Image-2019-03-23-at-11.43.31.jpeg'),
(3,'WhatsApp-Image-2019-03-23-at-11.43.32.jpeg'),
(3,'WhatsApp-Image-2019-03-23-at-11.43.49.jpeg'),
(3,'WhatsApp-Image-2019-03-23-at-11.43.50.jpeg'),
(3, 'WhatsApp-Image-2019-03-23-at-11.43.58.jpeg');

INSERT INTO types (title, image) VALUES
('Construcción','construccion.jfif'),
('Antenas de Telecomunicaciones','antena.jfif');

INSERT INTO jobs (types_id, image) VALUES
(1,'WhatsApp-Image-2019-01-31-at-20.13.05.jpeg'),
(1,'WhatsApp-Image-2019-01-31-at-20.13.06.jpeg'),
(1,'WhatsApp-Image-2019-01-31-at-20.13.17-1-.jpeg'),
(1,'WhatsApp-Image-2019-01-31-at-20.13.19.jpeg'),
(1,'WhatsApp-Image-2019-01-31-at-20.13.22-2-.jpeg'),
(1,'WhatsApp-Image-2019-01-31-at-20.18.49.jpeg'),
(1,'WhatsApp-Image-2019-01-31-at-20.19.00.jpeg'),
(1,'WhatsApp-Image-2019-01-31-at-20.19.01-1-.jpeg'),

(2,'WhatsApp-Image-2019-01-31-at-20.27.58.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.28.57.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.29.28.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.29.35.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.29.42.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.29.43.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.29.44.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.29.44-1-.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.29.45.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.29.47-1-.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.29.48.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.29.49.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.29.50.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.29.51.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.29.52.jpeg'),
(2,'WhatsApp-Image-2019-01-31-at-20.29.52-2-.jpeg');

INSERT INTO categories (title, image) VALUES
('Costa Esmeralda','costa-esmeralda.jfif');

INSERT INTO batches (categories_id, title, price, sold, description, image) VALUES
(1,'Residencial I - Lote 25',45000,'true','Terreno en Barrio Residencial 1, Lote Nro.25. 1000 m2.

Uno de los pocos q quedan (el valor promedio de los restantes es de USD 60000). Ya está desmalezado y con agrimensura hecha. Listo para construir ¡Sin deudas!
Escucho ofertas solo de contado. NO SE PERMUTA.','vendo-terreno-y-lote-costa-esmeralda-x-viaje-al-exterior-D_NQ_NP_800755-MLA28734561518_112018-F.jpg');

INSERT INTO contents (services_a_id, subtitle, text) VALUES
(1,'Adquisición de lotes','Te asesoramos en la compra del terreno que mejor se adapte a tu proyecto, tomando en cuenta presupuesto, ubicación, nivel del lote y aquellos detalles que pueden pasar inadvertidos para el ojo inexperto.'),
(1,'Proyecto de obra','Estamos con vos en cada etapa, desde la idea original hasta el día en que ingreses por primera vez a tu casa terminada. Podemos guiarte en el proceso de diseño y desarrollo de un espacio que se adapte a tus características familiares y a tu estilo de vida.'),
(1,'Ejecucion','Contamos con una completa gama de profesionales de la construcción, bien establecidos y de amplia experiencia. Nos ocupamos de todos los detalles, desde la construcción más tradicional hasta desarrollos eco-sustentables y tecnología domótica.'),
(1,'Direccion de obra','Desde el primer día vas a estar al tanto de los adelantos y el control de tu obra, con "updates"  semanales a través de tu e-mail o de Whatsapp.'),
(1,'Llave en mano','Limpieza, terminaciones, mobiliario... todo lo que necesites para poder disfrutar de tu nuevo hogar desde el día del estreno. DLN Construcciones es la solución a tu medida. No lo dudes más, contactanos.'),
(2,'Antenas de Telecomunicaciones',NULL),
(2,NULL,'Ejecución de Obra Civil en todo el país'),
(2,NULL,'Montaje de Estructuras'),
(2,NULL,'P.A.T.'),
(2,NULL,'Ensayos de Hormigón Armado');


INSERT INTO users (hash_id, first_name, last_name, email, password, dni, role) VALUES 
('$2a$10$1EHxHf5rQ.gyJ2xnJ55sFeHVnMlxbXReGoaFC1ID/dhumC8mGG8Ii','Tobias','Blaksley','tobias.blaksley@hotmail.com','$2a$10$nY9qIx.MJ4cXVG5csGpFFeQzQl4J2h0zhT.VndbdlnZOGzYjdbcmW',NULL,'master'),
('$2a$10$qpbUssE9j0VlJYCAlUeDweZLwvsKpHYOM9aJ7TjAAGyBLH.5xmmbu','Marcelo','Fanego','mafmaggot@gmail.com','$2a$10$MHA8vyzxjf4h8rg.WVSPEeXvh9ZX5Uv/a9s58zz70WrnOQdkNLMhW',35960622,'admin');

INSERT INTO projects (users_id, total, balance, description) VALUES
(1,1500,1500,'Este es un proyecto con descripción'),
(2,2500,2500,'Descripción de prueba');
