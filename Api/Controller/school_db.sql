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
-- Table structure for table `Students`
--

DROP TABLE IF EXISTS `Students`;
CREATE TABLE IF NOT EXISTS `Students` (
  `StudentsId` varchar(200) NOT NULL COMMENT 'Students ID',
  `StudentsRegistrationNo` varchar(200) NOT NULL COMMENT 'Students Registration No',
  `StudentsName` varchar(200) DEFAULT NULL COMMENT 'Students Name',
  `StudentsRoll` varchar(200) DEFAULT NULL COMMENT 'Students Roll',
  `DateOfBirth` varchar(50) DEFAULT NULL COMMENT 'Date of Birth',
  `GurdianName`  varchar(200) DEFAULT NULL COMMENT 'Gurdian Name',
  `GurdianPhoneNo` varchar(200) DEFAULT NULL COMMENT 'Gurdian PhNo',
  `PhotoURL` varchar(100) NOT NULL COMMENT 'Photo URL',
  `status` int(2) NOT NULL COMMENT 'statsu 0  for active , 1 for inactive',
  `Address` varchar(200) DEFAULT NULL COMMENT 'Address',
  `Pin` varchar(10) DEFAULT NULL COMMENT 'pin',
   `createDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Date Time',
  `updateDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Update Date and Time',
  PRIMARY KEY (`StudentsId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Teachers`
--

DROP TABLE IF EXISTS `Teachers`;
CREATE TABLE IF NOT EXISTS `Teachers` (
  `TeacherId` varchar(200) NOT NULL COMMENT 'Teachers ID',
  `TeacherName` varchar(200) DEFAULT NULL COMMENT 'Teacher Name',
  `TeacherPhoneNo` varchar(200) DEFAULT NULL COMMENT 'Teacher PhNo',
  `DateOfBirth` varchar(50) DEFAULT NULL COMMENT 'Date of Birth',
  `Address` varchar(200) DEFAULT NULL COMMENT 'Address',
  `Pin` varchar(10) DEFAULT NULL COMMENT 'pin',
  `PhotoURL` varchar(100) NOT NULL COMMENT 'Photo URL',
  `status` int(2) NOT NULL COMMENT 'status 0  for active , 1 for inactive',
  `createDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Date Time',
  `updateDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Update Date and Time',
  PRIMARY KEY (`TeacherId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------
--
-- Table structure for table `Staff`
--

DROP TABLE IF EXISTS `Staff`;
CREATE TABLE IF NOT EXISTS `Staff` (
  `StaffId` varchar(200) NOT NULL COMMENT 'Staff ID',
  `StaffName` varchar(200) DEFAULT NULL COMMENT 'Staff Name',
  `StaffPhoneNo` varchar(200) DEFAULT NULL COMMENT 'Staff PhNo',
  `DateOfBirth` varchar(50) DEFAULT NULL COMMENT 'Date of Birth',
  `Address` varchar(200) DEFAULT NULL COMMENT 'Address',
  `Pin` varchar(10) DEFAULT NULL COMMENT 'pin',
  `PhotoURL` varchar(100) NOT NULL COMMENT 'Photo URL',
  `status` int(2) NOT NULL COMMENT 'status 0  for active , 1 for inactive',
  `createDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Date Time',
  `updateDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Update Date and Time',
  PRIMARY KEY (`StaffId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;