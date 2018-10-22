-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 13, 2018 at 07:44 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cafeeria`
--

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `data_date` date NOT NULL,
  `data_time` time NOT NULL,
  `username` varchar(20) NOT NULL,
  `orders` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `data_date`, `data_time`, `username`, `orders`) VALUES
(2, '0000-00-00', '00:00:00', 'pravesh', '[order list\n\n3* pongal ]'),
(3, '0000-00-00', '00:00:00', 'pravesh', '[order list\n\n2* pongal ]'),
(4, '2018-03-20', '12:49:43', 'pravesh', '[order list\n\n2* idly ]'),
(5, '2018-03-20', '12:58:35', 'pravesh', '[order list\n\n2* idly ]'),
(6, '2018-03-20', '13:00:41', 'pravesh', '[order list\n\n2* idly ]'),
(9, '2018-03-20', '13:10:59', 'praveen', '[order list\n\n5* pongal ]'),
(10, '2018-03-20', '13:43:43', 'pravesh', '[order list\n\n3 * puffs \n\n2 * vegRoll ]'),
(11, '2018-03-20', '13:45:39', 'pravesh', '[order list\n\n2 * puffs \n\n1 * vegRoll ]'),
(12, '2018-03-20', '13:48:05', 'pravesh', '[order list\n\n2* idly ]'),
(13, '2018-03-20', '13:49:22', 'pravesh', '[order list\n\n5 * vegRoll ]'),
(14, '2018-03-20', '13:51:08', 'pravesh', '[order list\n\n2 * puffs \n\n1 * vegRoll ]'),
(15, '2018-03-20', '13:59:41', 'praveen', 'order list\n\n1 * puffs \n\n1 * vegRoll'),
(16, '2018-03-20', '23:21:27', 'Pranav', 'order list\n\n2 * puffs'),
(17, '2018-07-05', '19:14:15', 'praveen', 'order list\n\n2* pongal'),
(22, '2018-07-05', '19:49:04', 'praveen', 'order list\n\n4 * puffs');

-- --------------------------------------------------------

--
-- Table structure for table `lunch`
--

CREATE TABLE `lunch` (
  `id` int(11) NOT NULL,
  `item` varchar(20) NOT NULL,
  `stock` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lunch`
--

INSERT INTO `lunch` (`id`, `item`, `stock`) VALUES
(1, 'idly', '0'),
(2, 'pongal', '0');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `ID` int(11) NOT NULL,
  `data_date` date NOT NULL,
  `data_time` time NOT NULL,
  `username` varchar(20) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `orderlist` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`ID`, `data_date`, `data_time`, `username`, `mobile`, `orderlist`) VALUES
(7, '2018-03-13', '00:00:00', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n,\n\"title\":\"1* idly cost20\"\n,\n\"title\":\"1 * puffs cost15\"\n,\n\"title\":\"1 * vegRoll cost20\"\n]'),
(8, '2018-03-13', '00:00:00', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(9, '2018-03-13', '00:00:00', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(10, '2018-03-13', '00:00:00', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(11, '2018-03-13', '00:00:00', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(12, '2018-03-13', '00:00:00', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(13, '2018-03-13', '00:00:00', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(14, '2018-03-13', '00:00:00', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(15, '2018-03-13', '00:00:00', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(16, '2018-03-14', '00:00:00', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(17, '2018-03-14', '00:00:00', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(18, '2018-03-14', '00:00:00', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(19, '2018-03-14', '00:00:00', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(20, '2018-03-14', '09:07:06', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(21, '2018-03-14', '09:07:46', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(22, '2018-03-14', '09:10:01', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(23, '2018-03-14', '09:18:27', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(24, '2018-03-14', '09:19:30', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(25, '2018-03-14', '09:27:22', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(26, '2018-03-14', '09:33:05', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(27, '2018-03-14', '09:34:43', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(28, '2018-03-14', '11:16:34', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(29, '2018-03-14', '11:18:22', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n,\n\"title\":\"1* pongal cost25\"\n]'),
(30, '2018-03-14', '11:19:49', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(31, '2018-03-14', '11:21:56', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(33, '2018-03-14', '11:48:57', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n,\n\"title\":\"1* idly cost20\"\n,\n\"title\":\"4* pongal cost100\"\n,\n\"title\":\"4 * puffs cost60\"\n,\n\"title\":\"2 * vegRoll cost40\"\n]'),
(34, '2018-03-14', '16:18:51', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(35, '2018-03-14', '16:24:11', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n,\n\"title\":\"1* idly cost20\"\n,\n\"title\":\"1* pongal cost25\"\n,\n\"title\":\"1 * puffs cost15\"\n,\n\"title\":\"1 * vegRoll cost20\"\n]'),
(37, '2018-03-14', '16:32:13', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n,\n\"title\":\"1* idly cost20\"\n]'),
(39, '2018-03-14', '16:40:48', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n,\n\"title\":\"2* idly cost40\"\n]'),
(40, '2018-03-14', '16:41:25', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n]'),
(56, '2018-03-16', '13:15:39', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n,\n\"title\":\"1* idly cost20\"\n]'),
(57, '2018-03-17', '11:00:46', 'praveen', '9176264119', '[\n\"title\":\"order list\",\"id\":1\n,\n\"title\":\"3* idly cost60\"\n,\n\"title\":\"4* pongal cost100\"\n,\n\"title\":\"3 * puffs cost45\"\n]'),
(60, '2018-03-20', '08:59:52', 'pravesh', '9087456123', '[order list,5 * puffs ]'),
(67, '2018-03-20', '09:45:43', 'praveen', '9176264119', '[order list\n\n3 * puffs ]'),
(69, '2018-03-20', '09:49:27', 'praveen', '9176264119', '[order list\n\n2 * puffs ]'),
(70, '2018-03-20', '09:49:49', 'praveen', '9176264119', '[order list\n\n1 * puffs ]'),
(74, '2018-03-20', '09:53:22', 'praveen', '9176264119', '[order list\n\n2 * puffs ]'),
(80, '2018-03-20', '10:31:50', 'praveen', '', '[order list\n\n3* pongal ]'),
(81, '2018-03-20', '10:32:12', 'praveen', '', '[order list\n\n3 * vegRoll ]'),
(82, '2018-03-20', '10:32:43', 'praveen', '', '[order list\n\n2* pongal ]'),
(84, '2018-03-20', '10:35:33', 'praveen', '', '[order list\n\n2 * vegRoll ]'),
(85, '2018-03-20', '10:38:37', 'praveen', '', '[order list\n\n3 * vegRoll ]'),
(94, '2018-03-20', '11:39:25', 'pravesh', '9087456123', '[order list\n\n2 * puffs ]'),
(95, '2018-03-20', '11:39:34', 'pravesh', '9087456123', '[order list\n\n2 * puffs ]'),
(96, '2018-03-20', '11:39:59', 'pravesh', '9087456123', '[order list\n\n2 * puffs ]'),
(97, '2018-03-20', '11:40:34', 'pravesh', '9087456123', '[order list\n\n3* idly ]');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `ID` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `balance` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`ID`, `username`, `mobile`, `password`, `balance`) VALUES
(1, 'praveen', '9176264119', '12345678', '1730'),
(2, 'shankar', '9176264118', '12345678', '200'),
(3, 'pravesh', '9087456123', '12345678', '110'),
(4, 'Pranav', '9176136685', '12345678', '270');

-- --------------------------------------------------------

--
-- Table structure for table `snacks`
--

CREATE TABLE `snacks` (
  `id` int(11) NOT NULL,
  `item` varchar(20) NOT NULL,
  `stock` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `snacks`
--

INSERT INTO `snacks` (`id`, `item`, `stock`) VALUES
(1, 'puffs', '11'),
(2, 'vegroll', '30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lunch`
--
ALTER TABLE `lunch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `snacks`
--
ALTER TABLE `snacks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `lunch`
--
ALTER TABLE `lunch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `snacks`
--
ALTER TABLE `snacks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
