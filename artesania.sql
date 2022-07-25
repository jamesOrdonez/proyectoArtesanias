-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-07-2022 a las 23:48:46
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `artesania`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogo`
--

CREATE TABLE `catalogo` (
  `pk_id_catalogo` int(11) NOT NULL,
  `nombre_catalogo` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `catalogo`
--

INSERT INTO `catalogo` (`pk_id_catalogo`, `nombre_catalogo`) VALUES
(1, 'arcilla'),
(2, 'madera'),
(3, 'piedra');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `pk_codigo_compra` int(11) NOT NULL,
  `fecha_compra` date NOT NULL,
  `valor_compra` decimal(10,2) NOT NULL,
  `forma_pago` enum('efectivo','tarjeta','transaccion','') COLLATE utf8mb4_spanish2_ci NOT NULL,
  `abono` int(11) NOT NULL,
  `pendiente` int(11) NOT NULL,
  `fk_envio` int(11) NOT NULL,
  `fk_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`pk_codigo_compra`, `fecha_compra`, `valor_compra`, `forma_pago`, `abono`, `pendiente`, `fk_envio`, `fk_usuario`) VALUES
(1, '2022-07-17', '350000.00', 'transaccion', 350000, 0, 1, 2147483647);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_compra`
--

CREATE TABLE `detalle_compra` (
  `pk_id_detalle` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `fk_pdto` int(11) NOT NULL,
  `fk_compra` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `detalle_compra`
--

INSERT INTO `detalle_compra` (`pk_id_detalle`, `cantidad`, `precio_unitario`, `total`, `fk_pdto`, `fk_compra`) VALUES
(1, 10, 3000, 30000, 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `envio`
--

CREATE TABLE `envio` (
  `pk_codigo_env` int(11) NOT NULL,
  `estado_env` enum('sin realizar','en proceso','enviado','') COLLATE utf8mb4_spanish2_ci NOT NULL,
  `fecha_env` date NOT NULL,
  `destinatario_env` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `destino_env` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `observacion_env` varchar(150) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `envio`
--

INSERT INTO `envio` (`pk_codigo_env`, `estado_env`, `fecha_env`, `destinatario_env`, `destino_env`, `observacion_env`) VALUES
(1, 'en proceso', '2022-07-10', 'jose perez', 'san agustin calle 3 #56-27', 'producto enviado sin novedades');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personalizacion`
--

CREATE TABLE `personalizacion` (
  `id_personalizacion` int(11) NOT NULL,
  `descripcion_personalizacion` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio_personalizacion` int(11) NOT NULL,
  `fk_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `pk_codigo_pdto` int(11) NOT NULL,
  `nombre_pdto` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `imagen` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `desc_pdto` varchar(250) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `valor_pdto` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `estado` enum('disponible','separado','agotado','') COLLATE utf8mb4_spanish2_ci NOT NULL,
  `proveedor` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `fk_catalogo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`pk_codigo_pdto`, `nombre_pdto`, `imagen`, `desc_pdto`, `valor_pdto`, `stock`, `estado`, `proveedor`, `fk_catalogo`) VALUES
(1, 'Olla', '', 'olla de barro grande medidas 160x80cm.', '120000.00', 12, 'disponible', 'Juliana Gomez', 1),
(2, 'vagilla', '', 'vagilla compuesta por dos platos grandes, dos platos pequeños y dos posillos.', '450000.00', 8, 'disponible', 'Juliana Gomez', 1),
(3, 'escultura propia de san agustin', '', 'escultura llamada doble yo, propia de la cultur ancestral de san agustin', '800000.00', 12, 'disponible', 'Juliana Gomez', 1),
(4, 'porcelana ', '', 'porcelana delgada por 14 unidades medidas 120x80cm.', '120000.00', 80, 'disponible', 'Juliana Gomez', 1),
(5, 'chaman', '', 'chaman propio de la cultura antigua agustiniana ', '60000.00', 8, 'disponible', 'Juan Velez', 3),
(7, 'mesa', '', 'mesa de roble medidas 120x80cm.', '850000.00', 15, 'disponible', 'Roberto Gomez', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `separado`
--

CREATE TABLE `separado` (
  `id_separado` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `abono` int(11) NOT NULL,
  `pendiente` int(11) NOT NULL,
  `fk_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `pk_identificacion` int(11) NOT NULL,
  `nombre_user` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono_user` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `tipo_usuario` enum('artesano','comprador','administrador','') COLLATE utf8mb4_spanish2_ci NOT NULL,
  `direccion_user` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `password` varchar(60) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`pk_identificacion`, `nombre_user`, `telefono_user`, `tipo_usuario`, `direccion_user`, `password`) VALUES
(45263, 'Juan Stiven Anacona', '3504879865', 'artesano', 'San Agustin calle 3 #34-17 barrio San Jose', 'ana1235'),
(1083865778, 'maria suaza', '3208753785', 'comprador', 'acevedo', '45mary'),
(1083865788, ' James Santiago', '3223562765', 'administrador', 'san agustin', '24santiago'),
(2147483647, 'juan perez', '3179857346', 'artesano', 'san agustin', '3tfrsc');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `catalogo`
--
ALTER TABLE `catalogo`
  ADD PRIMARY KEY (`pk_id_catalogo`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`pk_codigo_compra`),
  ADD KEY `procede` (`fk_envio`),
  ADD KEY `produce` (`fk_usuario`);

--
-- Indices de la tabla `detalle_compra`
--
ALTER TABLE `detalle_compra`
  ADD PRIMARY KEY (`pk_id_detalle`),
  ADD KEY `genera` (`fk_pdto`),
  ADD KEY `realiza` (`fk_compra`);

--
-- Indices de la tabla `envio`
--
ALTER TABLE `envio`
  ADD PRIMARY KEY (`pk_codigo_env`);

--
-- Indices de la tabla `personalizacion`
--
ALTER TABLE `personalizacion`
  ADD PRIMARY KEY (`id_personalizacion`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`pk_codigo_pdto`),
  ADD KEY `fk_catalogo` (`fk_catalogo`);

--
-- Indices de la tabla `separado`
--
ALTER TABLE `separado`
  ADD PRIMARY KEY (`id_separado`),
  ADD KEY `puede` (`fk_producto`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`pk_identificacion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `catalogo`
--
ALTER TABLE `catalogo`
  MODIFY `pk_id_catalogo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `pk_codigo_compra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `detalle_compra`
--
ALTER TABLE `detalle_compra`
  MODIFY `pk_id_detalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `envio`
--
ALTER TABLE `envio`
  MODIFY `pk_codigo_env` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `personalizacion`
--
ALTER TABLE `personalizacion`
  MODIFY `id_personalizacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `pk_codigo_pdto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `separado`
--
ALTER TABLE `separado`
  MODIFY `id_separado` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `procede` FOREIGN KEY (`fk_envio`) REFERENCES `envio` (`pk_codigo_env`),
  ADD CONSTRAINT `produce` FOREIGN KEY (`fk_usuario`) REFERENCES `usuario` (`pk_identificacion`);

--
-- Filtros para la tabla `detalle_compra`
--
ALTER TABLE `detalle_compra`
  ADD CONSTRAINT `genera` FOREIGN KEY (`fk_pdto`) REFERENCES `producto` (`pk_codigo_pdto`),
  ADD CONSTRAINT `realiza` FOREIGN KEY (`fk_compra`) REFERENCES `compra` (`pk_codigo_compra`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`fk_catalogo`) REFERENCES `catalogo` (`pk_id_catalogo`);

--
-- Filtros para la tabla `separado`
--
ALTER TABLE `separado`
  ADD CONSTRAINT `puede` FOREIGN KEY (`fk_producto`) REFERENCES `producto` (`pk_codigo_pdto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
