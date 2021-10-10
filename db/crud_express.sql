-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 10, 2021 at 06:07 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_express`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(225) NOT NULL,
  `last_name` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `organization` varchar(225) NOT NULL,
  `designation` varchar(225) NOT NULL,
  `salary` decimal(11,2) UNSIGNED DEFAULT 0.00,
  `status` tinyint(3) UNSIGNED DEFAULT 0,
  `is_deleted` tinyint(3) UNSIGNED DEFAULT 0,
  `created_at` datetime NOT NULL,
  `update_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`, `update_at`) VALUES
(1, 'Zakiri', 'Zulhilmi', 'zakirizulhilmi@gmail.com', '23456543', 'Shoppe Food', 'Front-End Engineer', '500000.00', 1, 0, '2021-10-09 21:49:26', '2021-10-09 21:49:26'),
(2, 'Fariz', 'Nur Masyhuri', 'fariznurmasyhuri@gmail.com', '12345678', 'Bukalapak', 'Back-End Engineer', '750000.00', 1, 0, '2021-10-09 21:50:31', '2021-10-09 21:50:31'),
(3, 'Deddy ', 'Corbuzier', 'deddysulap@gmail.com', '10987654', 'Tokopedia', 'Back-End Engineer', '750000.00', 1, 0, '2021-10-09 22:30:57', '2021-10-09 22:30:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
