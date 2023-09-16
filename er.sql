-- Crear la tabla tipos_sangre
CREATE TABLE tipos_sangre (
    id_tipo_sangre INT AUTO_INCREMENT PRIMARY KEY,
    sangre VARCHAR(50)
);

-- Insertar datos ficticios en la tabla tipos_sangre
INSERT INTO tipos_sangre (sangre) VALUES
    ('A+'),
    ('A-'),
    ('B+'),
    ('B-'),
    ('O+'),
    ('O-'),
    ('AB+'),
    ('AB-');

-- Crear la tabla estudiantes
CREATE TABLE estudiantes (
    id_estudiante INT AUTO_INCREMENT PRIMARY KEY,
    carne VARCHAR(20),
    nombres VARCHAR(100),
    apellidos VARCHAR(100),
    direccion VARCHAR(200),
    telefono VARCHAR(20),
    correo_electronico VARCHAR(100),
    id_tipo_sangre INT,
    fecha_nacimiento DATE,
    FOREIGN KEY (id_tipo_sangre) REFERENCES tipos_sangre(id_tipo_sangre)
);

-- Insertar datos ficticios en la tabla estudiantes
INSERT INTO estudiantes (carne, nombres, apellidos, direccion, telefono, correo_electronico, id_tipo_sangre, fecha_nacimiento) VALUES
    ('2023001', 'Juan', 'Pérez', 'Calle 123, Ciudad', '123-456-7890', 'juan@example.com', 1, '1995-05-15'),
    ('2023002', 'María', 'López', 'Avenida 456, Pueblo', '987-654-3210', 'maria@example.com', 2, '1998-08-22'),
    ('2023003', 'Carlos', 'González', 'Calle 789, Villa', '555-123-4567', 'carlos@example.com', 3, '1997-03-10');