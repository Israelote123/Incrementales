-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-02-2022 a las 19:34:12
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
(5, 'jantonios44@hotmail.com', 'html', '2022-02-08 20:07:11'),
(6, 'patricio69@gmail.com', 'programar', '2022-02-13 01:59:20');

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
(11, 'html', '2022-02-01', 'teclacoding', 'patricio69@gmail.com'),
(12, 'kkkk', '2022-02-02', 'llkjj', 'patricio69@gmail.com');

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
(36, 'arenita69@gmail.com', 'jantonios44@hotmail.com', 'amigo'),
(43, 'jantonios44@hotmail.com', 'calamardo69@mail.com', 'amigo'),
(44, 'bob68@gmail.com', 'calamardo69@mail.com', 'amigo'),
(45, 'calamardo69@mail.com', 'bob68@gmail.com', 'amigo'),
(46, 'arenita69@gmail.com', 'calamardo69@mail.com', 'pendiente'),
(47, 'bob68@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(57, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(58, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(59, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(60, 'undefined', 'undefined', 'undefined'),
(61, 'undefined', 'undefined', 'undefined'),
(62, 'undefined', 'undefined', 'undefined'),
(63, 'undefined', 'undefined', 'undefined'),
(64, 'undefined', 'undefined', 'undefined'),
(65, 'undefined', 'undefined', 'undefined'),
(66, 'undefined', 'undefined', 'undefined'),
(67, 'undefined', 'undefined', 'undefined'),
(68, 'undefined', 'undefined', 'undefined'),
(69, 'undefined', 'undefined', 'undefined'),
(70, 'undefined', 'undefined', 'undefined'),
(71, 'undefined', 'undefined', 'undefined'),
(72, 'undefined', 'undefined', 'undefined'),
(73, 'undefined', 'undefined', 'undefined'),
(74, 'undefined', 'undefined', 'undefined'),
(75, 'undefined', 'undefined', 'undefined'),
(76, 'undefined', 'undefined', 'undefined'),
(77, 'undefined', 'undefined', 'undefined'),
(78, 'undefined', 'undefined', 'undefined'),
(79, 'undefined', 'undefined', 'undefined'),
(80, 'undefined', 'undefined', 'undefined'),
(81, 'undefined', 'undefined', 'undefined'),
(82, 'undefined', 'undefined', 'undefined'),
(83, 'undefined', 'undefined', 'undefined'),
(84, 'undefined', 'undefined', 'undefined'),
(85, 'undefined', 'undefined', 'undefined'),
(86, 'undefined', 'undefined', 'undefined'),
(87, 'undefined', 'undefined', 'undefined'),
(88, 'undefined', 'undefined', 'undefined'),
(89, 'undefined', 'undefined', 'undefined'),
(90, 'undefined', 'undefined', 'undefined'),
(91, 'undefined', 'undefined', 'undefined'),
(92, 'undefined', 'undefined', 'undefined'),
(93, 'undefined', 'undefined', 'undefined'),
(94, 'undefined', 'undefined', 'undefined'),
(95, 'undefined', 'undefined', 'undefined'),
(96, 'undefined', 'undefined', 'undefined'),
(97, 'undefined', 'undefined', 'undefined'),
(98, 'undefined', 'undefined', 'undefined'),
(99, 'undefined', 'undefined', 'undefined'),
(100, 'undefined', 'undefined', 'undefined'),
(101, 'undefined', 'undefined', 'undefined'),
(102, 'undefined', 'undefined', 'undefined'),
(103, 'undefined', 'undefined', 'undefined'),
(104, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(105, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(106, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(107, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(108, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(109, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(110, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(111, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(112, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(113, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(114, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(115, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(116, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(117, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(118, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(119, 'arenita69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(120, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(121, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(122, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(123, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(124, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(125, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(126, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(127, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(128, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(129, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(130, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(131, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(132, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(133, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(134, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(135, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(136, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(137, 'arenita69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(138, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(139, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(140, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(141, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(142, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(143, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(144, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(145, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(146, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(147, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(148, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(149, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(150, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(151, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(152, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(153, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(154, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(155, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(156, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(157, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(158, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(159, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(160, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(161, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(162, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(163, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(164, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(165, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(166, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(167, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(168, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(169, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(170, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(171, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(172, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(173, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(174, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(175, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(176, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(177, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(178, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(179, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(180, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(181, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(182, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(183, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(184, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(185, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(186, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(187, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(188, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(189, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(190, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(191, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(192, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(193, 'arenita69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(194, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(195, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(196, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(197, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente'),
(198, 'calamardo69@mail.com', 'jantonios44@hotmail.com', 'pendiente'),
(199, 'antonio69@gmail.com', 'jantonios44@hotmail.com', 'pendiente');

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
-- Estructura de tabla para la tabla `publications`
--

CREATE TABLE `publications` (
  `id` int(150) NOT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `photos_post` varchar(200) DEFAULT NULL,
  `likes` int(200) DEFAULT NULL,
  `comments` int(200) DEFAULT NULL,
  `heart` int(200) DEFAULT NULL,
  `break_heart` int(200) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `publications`
--

INSERT INTO `publications` (`id`, `content`, `photos_post`, `likes`, `comments`, `heart`, `break_heart`, `mail`) VALUES
(1, 'quiero dormir', '', 0, 0, 0, 0, 'jantonios44@hotmail.com'),
(2, 'quiero saber', '', 0, 0, 0, 0, 'jantonios44@hotmail.com'),
(3, 'quiero construir', '', 0, 0, 0, 0, 'arenita69@gmail.com'),
(4, 'quiero comer', '', 0, 0, 0, 0, 'jantonios44@hotmail.com'),
(5, 'quiero echar jugar', '', 0, 0, 0, 0, 'jantonios44@hotmail.com'),
(6, 'quero cantar', '', 0, 0, 0, 0, 'jantonios44@hotmail.com'),
(7, 'hola,cara de bola', '', 0, 0, 0, 0, 'jantonios44@hotmail.com'),
(8, 'idate', '', 0, 0, 0, 0, 'jantonios44@hotmail.com'),
(9, 'arenita', '', 0, 0, 0, 0, 'arenita69@gmail.com'),
(10, 'ir a casa', '', 0, 0, 0, 0, 'arenita69@gmail.com'),
(11, '', '', 0, 0, 0, 0, 'arenita69@gmail.com'),
(12, 'quiero construir', 'https://i.ibb.co/GTqk9Xr/pedillos.jpg', 0, 0, 0, 0, 'arenita69@gmail.com'),
(13, '', 'https://i.ibb.co/GJmZ1T3/onix.jpg', 0, 0, 0, 0, 'arenita69@gmail.com'),
(14, 'quiero construir', '', 0, 0, 0, 0, 'arenita69@gmail.com'),
(15, 'ir a casa', 'https://i.ibb.co/RQHSYzZ/felicidad.jpg', 0, 0, 0, 0, 'arenita69@gmail.com'),
(16, 'quiero dormir', '', 0, 0, 0, 0, 'arenita69@gmail.com'),
(17, 'quiero dormir', '', 0, 0, 0, 0, 'arenita69@gmail.com'),
(18, 'hola,cara de bola', 'https://i.ibb.co/GTqk9Xr/pedillos.jpg', 0, 0, 0, 0, 'jantonios44@hotmail.com'),
(19, 'jjaj xd', 'https://i.ibb.co/k5K3Cww/adame.jpg', 0, 0, 0, 0, 'jantonios44@hotmail.com'),
(20, 'jajajajaja', 'https://i.ibb.co/VxGWRh4/onix.jpg', 0, 0, 0, 0, 'jantonios44@hotmail.com');

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
  `academic_level` text DEFAULT NULL,
  `lenguages` text DEFAULT NULL,
  `linkedIn` text DEFAULT NULL,
  `hobbies` text DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `profile_photo` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `register`
--

INSERT INTO `register` (`mail`, `name`, `middle_name`, `last_name`, `city`, `country`, `birth_date`, `academic_level`, `lenguages`, `linkedIn`, `hobbies`, `password`, `profile_photo`) VALUES
('antonio69@gmail.com', 'Jose Antonio', 'Santos', 'Cruz', 'cdmx', 'México', '2022-02-24', '', '', '', '', '7d4cb851ef53b0fe809184cfd952c052', 'https://i.ibb.co/gtcv2Ct/pedillos.jpg'),
('arenita69@gmail.com', 'arenita', 'mejilla', 'mejilla', 'Texas', 'Estados Unidos', '2022-02-24', 'cientifica', 'español', 'linkedin_arenita', 'cantar', '7d4cb851ef53b0fe809184cfd952c052', 'https://i.ibb.co/mSDHmFL/arenita.jpg'),
('bob68@gmail.com', 'bob esponja', 'pantalones cuadrados', 'pantalones cuadrados', 'fondo de bikini', 'fondo de bikini', '2022-01-18', 'chef', 'español', 'bob69', 'cocinar kangreburguers', 'c9f2852ef363076a96289768cb6b694c', 'https://i.ibb.co/WB9r7Ls/bobe.jpg'),
('calamardo69@mail.com', 'calamardo', 'tentaculos', 'tentaculos', 'fondo de bkini', 'fondo de bikini', '2022-01-20', 'clarinete', 'español', 'calamardo69', 'estar enojado', 'c9f2852ef363076a96289768cb6b694c', 'https://i.ibb.co/BNyTtpt/calamardo.jpg'),
('don69@gmail.com', 'don', 'kan', 'kan', 'Mexico', 'Mexico', '2022-02-24', 'mmmm', 'español', 'llll', 'kkkkk', 'd5a0c4b4e6d402ca06d89a71069eba0e', 'https://i.ibb.co/gtcv2Ct/pedillos.jpg'),
('jantonio69@gmail.com', 'Jose Antonio', 'Santos', 'Cruz', 'cdmx', 'México', '2022-02-02', '', '', '', '', '12efdff95be5de6c0445ae2638e0860f', 'https://i.ibb.co/gtcv2Ct/pedillos.jpg'),
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
-- Indices de la tabla `publications`
--
ALTER TABLE `publications`
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
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `feedbackk`
--
ALTER TABLE `feedbackk`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200;

--
-- AUTO_INCREMENT de la tabla `publications`
--
ALTER TABLE `publications`
  MODIFY `id` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
