-- Crear la tabla "marca"
CREATE TABLE marca (
    idMarca SMALLINT PRIMARY KEY,
    marca VARCHAR(50)
);

-- Insertar valores en la tabla "marca"
INSERT INTO marca (idMarca, marca)
VALUES
    (1, 'Marca A'),
    (2, 'Marca B'),
    (3, 'Marca C');


CREATE TABLE productos (
    idProducto INT AUTO_INCREMENT PRIMARY KEY,
    producto VARCHAR(50),
    idMarca SMALLINT,
    descripcion VARCHAR(100),
    precio_costo DECIMAL(8,2),
    precio_venta DECIMAL(8,2),
    existencia INT,
    FOREIGN KEY (idMarca) REFERENCES marca(idMarca)
);

-- Insertar valores en la tabla "productos" con "idProducto" autoincrementable
-- Insertar valores en la tabla "productos" con "idProducto" autoincrementable
INSERT INTO productos (producto, idMarca, descripcion, precio_costo, precio_venta, existencia)
VALUES
    ('Producto 1', 1, 'Descripción del Producto 1', 10.99, 19.99, 50),
    ('Producto 2', 2, 'Descripción del Producto 2', 8.50, 15.99, 30),
    ('Producto 3', 3, 'Descripción del Producto 3', 12.75, 24.99, 75);
