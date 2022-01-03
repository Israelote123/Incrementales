-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-01-2022 a las 21:49:38
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `register`
--

CREATE TABLE `register` (
  `mail` varchar(100) NOT NULL,
  `name` text NOT NULL,
  `middle_name` text NOT NULL,
  `last_name` text NOT NULL,
  `city` text NOT NULL,
  `country` text NOT NULL,
  `birth_date` date NOT NULL,
  `academic_level` text NOT NULL,
  `lenguages` text NOT NULL,
  `linkedIn` text NOT NULL,
  `hobbies` text NOT NULL,
  `password` varchar(32) NOT NULL,
  `profile_photo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `register`
--

INSERT INTO `register` (`mail`, `name`, `middle_name`, `last_name`, `city`, `country`, `birth_date`, `academic_level`, `lenguages`, `linkedIn`, `hobbies`, `password`, `profile_photo`) VALUES
('joseprinsisrael@gmail.com', 'José Israel', 'Lua', 'Ordaz', 'Jardines de Morelos', 'México', '2003-05-18', 'Preparatoria, curso de c#, curso de Desarrollo de videojuegos en unity', 'Español, Inglés', 'https://www.linkedin.com/in/jos%C3%A9-israel-lua-ordaz-491574224/', 'kjhuiohcuhjiohc', '013996bc3c1ec5fa72db0645e1cf3bdf', 'https://i.ibb.co/MC2g6md/padoru-rias.jpg'),
('sopeHumano@gmail.com', 'Sope', 'Frijol', 'Masa', 'Jardines de Morelos', 'México', '2000-05-18', 'FullStack', 'Español, Inglés', 'https://www.linkedin.com/in', 'huihbhjebfvbi', 'ba30c03cf13553fb73562114038846cc', 'https://i.ibb.co/gPn1Vym/sopes.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`mail`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
