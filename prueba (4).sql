-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-02-2022 a las 07:14:48
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
-- Estructura de tabla para la tabla `abilities`
--

CREATE TABLE `abilities` (
  `id` int(150) NOT NULL,
  `mail` text NOT NULL,
  `skill` text NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `abilities`
--

INSERT INTO `abilities` (`id`, `mail`, `skill`, `fecha`) VALUES
(1, 'patricio69@gmail.com', 'python ', '2022-02-06 21:18:25'),
(2, 'patricio69@gmail.com', 'kkkdk', '2022-02-06 21:20:16'),
(3, 'patricio69@gmail.com', 'html', '2022-02-06 21:20:43'),
(4, 'patricio69@gmail.com', 'programar', '2022-02-06 21:25:59'),
(5, 'jantonios44@hotmail.com', 'html', '2022-02-08 20:07:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `amigos`
--

CREATE TABLE `amigos` (
  `id` int(150) NOT NULL,
  `me` varchar(150) NOT NULL,
  `myFriends` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `amigos`
--

INSERT INTO `amigos` (`id`, `me`, `myFriends`) VALUES
(1, 'jantonios44@hotmail.com', 'calamardo69@mail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ayuda`
--

CREATE TABLE `ayuda` (
  `id` int(150) NOT NULL,
  `mail` varchar(150) NOT NULL,
  `titulo` text NOT NULL,
  `consulta` text NOT NULL,
  `problemas` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ayuda`
--

INSERT INTO `ayuda` (`id`, `mail`, `titulo`, `consulta`, `problemas`) VALUES
(1, 'bob68@gmail.com', 'ayuda por favor', 'no puedo abrir mis fotos', 'no veo mis fotos'),
(2, 'bob68@gmail.com', 'ayuda', 'no puedo cambiar mi foto de perfil', 'me pasa mucho'),
(4, 'jantonios44@hotmail.com', 'java', 'java', 'html'),
(5, 'patricio69@gmail.com', 'python ', 'programar', 'programar'),
(6, 'patricio69@gmail.com', 'kkkdk', 'html', 'kkkdk');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id` int(150) NOT NULL,
  `nombre_curso` text NOT NULL,
  `fecha_curso` date NOT NULL,
  `lugar_curso` text NOT NULL,
  `mail` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id`, `nombre_curso`, `fecha_curso`, `lugar_curso`, `mail`) VALUES
(1, 'jugar', '2022-02-01', 'jugar', 'bob68@gmail.com'),
(2, 'java', '2022-02-23', 'coding', 'bob68@gmail.com'),
(3, 'nadar', '2022-02-09', 'coding', 'bob68@gmail.com'),
(4, 'kkkdk', '2022-02-23', 'gdgdg', 'bob68@gmail.com'),
(5, 'python ', '2022-02-25', 'tecla', 'bob68@gmail.com'),
(6, 'nadar', '2022-02-24', 'gdgdg', 'bob68@gmail.com'),
(7, 'nadar', '2022-02-14', 'teclacoding', 'jantonios44@hotmail.com'),
(8, 'python ', '2022-02-08', 'tecla', 'jantonios44@hotmail.com'),
(9, 'python ', '2022-02-03', 'coding', 'patricio69@gmail.com'),
(10, 'html', '2022-02-25', 'tecla', 'patricio69@gmail.com'),
(11, 'html', '2022-02-01', 'teclacoding', 'patricio69@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `feedbackk`
--

CREATE TABLE `feedbackk` (
  `id` int(100) NOT NULL,
  `mail` varchar(150) NOT NULL,
  `author` varchar(150) NOT NULL,
  `name` varchar(150) NOT NULL,
  `feedback` varchar(150) NOT NULL,
  `commit` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `feedbackk`
--

INSERT INTO `feedbackk` (`id`, `mail`, `author`, `name`, `feedback`, `commit`) VALUES
(1, 'joseprinsisrael@gmail.com', 'jantonios44@hotmail.com', 'juan', 'no me gusta tu pagina', 'no me gusta y ya'),
(2, 'joseprinsisrael@gmail.com', 'jantonios44@hotmail.com', '', 'hdhjdjd', 'fjfkfjfj'),
(3, 'jantonios44@hotmail.com', 'bob68@gmail.com', 'antonio', 'me gustas tu pagina', ''),
(4, 'jantonios44@hotmail.com', 'bob68@gmail.com', 'juan', 'ddada', 'dada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `friends`
--

CREATE TABLE `friends` (
  `id` int(150) NOT NULL,
  `receptor` varchar(100) NOT NULL,
  `emisor` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `friends`
--

INSERT INTO `friends` (`id`, `receptor`, `emisor`, `status`) VALUES
(17, 'jantonios44@hotmail.com', 'arenita69@gmail.com', 'rechazado'),
(19, 'patricio69@gmail.com', 'jantonios44@hotmail.com', 'amigo'),
(21, 'patricio69@gmail.com', 'bob68@gmail.com', 'pendiente'),
(30, 'jantonios44@hotmail.com', 'bob68@gmail.com', 'rechazado'),
(31, 'joseprinsisrael@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(32, 'bob68@gmail.com', 'jantonios44@hotmail.com', 'amigo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(150) NOT NULL,
  `publications` text NOT NULL,
  `images_post` varchar(100) NOT NULL,
  `profile_post` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
('arenita69@gmail.com', 'arenita', 'mejilla', 'mejilla', 'Texas', 'Estados Unidos', '2022-02-24', 'cientifica', 'español', 'linkedin_arenita', 'cantar', '7d4cb851ef53b0fe809184cfd952c052', 'https://i.ibb.co/mSDHmFL/arenita.jpg'),
('bob68@gmail.com', 'bob esponja', 'pantalones cuadrados', 'pantalones cuadrados', 'fondo de bikini', 'fondo de bikini', '2022-01-18', 'chef', 'español', 'bob69', 'cocinar kangreburguers', 'c9f2852ef363076a96289768cb6b694c', 'https://i.ibb.co/WB9r7Ls/bobe.jpg'),
('calamardo69@mail.com', 'calamardo', 'tentaculos', 'tentaculos', 'fondo de bkini', 'fondo de bikini', '2022-01-20', 'clarinete', 'español', 'calamardo69', 'estar enojado', 'c9f2852ef363076a96289768cb6b694c', 'https://i.ibb.co/BNyTtpt/calamardo.jpg'),
('jantonios44@hotmail.com', 'Jose Antonio', 'Santos', 'Cruz', 'cdmx', 'mexico', '1995-12-06', 'universidad', 'español', 'antonio555', 'programar a altas horas de la noche con 10 tazas de cafe en la sangre', 'c9f2852ef363076a96289768cb6b694c', 'https://i.ibb.co/Ykqd8vN/nikola.jpg'),
('joseprinsisrael@gmail.com', 'José Israel', 'Lua', 'Ordaz', 'Jardines de Morelos', 'México', '2003-05-18', 'Preparatoria, curso de c#, curso de Desarrollo de videojuegos en unity', 'Español, Inglés', 'https://www.linkedin.com/in/jos%C3%A9-israel-lua-ordaz-491574224/', 'kjhuiohcuhjiohc', '013996bc3c1ec5fa72db0645e1cf3bdf', 'https://i.ibb.co/MC2g6md/padoru-rias.jpg'),
('patricio69@gmail.com', 'patricio', 'estrella', 'estrella', 'fondo de bkini', 'fondo de bikini', '2022-01-19', 'ninguno', 'español', 'patricio69', 'jugar', 'c9f2852ef363076a96289768cb6b694c', 'https://i.ibb.co/BqZL6Kh/pat.jpg'),
('sopeHumano@gmail.com', 'Sope', 'Frijol', 'Masa', 'Jardines de Morelos', 'México', '2000-05-18', 'FullStack', 'Español, Inglés', 'https://www.linkedin.com/in', 'huihbhjebfvbi', 'ba30c03cf13553fb73562114038846cc', 'https://i.ibb.co/gPn1Vym/sopes.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `abilities`
--
ALTER TABLE `abilities`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `amigos`
--
ALTER TABLE `amigos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ayuda`
--
ALTER TABLE `ayuda`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `feedbackk`
--
ALTER TABLE `feedbackk`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`mail`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `abilities`
--
ALTER TABLE `abilities`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `amigos`
--
ALTER TABLE `amigos`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ayuda`
--
ALTER TABLE `ayuda`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `feedbackk`
--
ALTER TABLE `feedbackk`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
