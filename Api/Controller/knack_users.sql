-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 05, 2018 at 06:51 AM
-- Server version: 5.7.19
-- PHP Version: 7.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `knack_users`
--

-- --------------------------------------------------------

--
-- Table structure for table `customerPayments`
--

DROP TABLE IF EXISTS `customerPayments`;
CREATE TABLE IF NOT EXISTS `businessinfo` (
  `paymentId` varchar(200) NOT NULL COMMENT 'Payment ID',
  `customerId` varchar(200) NOT NULL COMMENT 'Customer ID',
  `customerName` varchar(200) DEFAULT NULL COMMENT 'Customer Name',
  `paymentValue` varchar(200) DEFAULT NULL COMMENT 'Payment Value',
   `createDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Date Time',
  `updateDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Update Date and Time',
  PRIMARY KEY (`paymentId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `centers`
--

DROP TABLE IF EXISTS `customerDetails`;
CREATE TABLE IF NOT EXISTS `centers` (
  `customerId` varchar(150) NOT NULL COMMENT 'Center ID',
  `customerName` varchar(150) NOT NULL COMMENT 'Business ID',
  `Address` varchar(150) NOT NULL COMMENT 'Center Name',
  `Phone` varchar(200) NOT NULL COMMENT 'Area',
  `landmark` varchar(200) NOT NULL COMMENT 'Landmark',
  `pin` int(10) NOT NULL COMMENT 'Pincode',
  `city` varchar(150) NOT NULL COMMENT 'City Name',
  `contactNumber` varchar(100) NOT NULL COMMENT 'Contact Number',
  `createDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Date Time',
  `updateDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Update Date and Time',
  PRIMARY KEY (`customerId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

