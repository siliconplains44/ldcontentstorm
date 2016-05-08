/*
Navicat MariaDB Data Transfer

Source Server         : Mothership
Source Server Version : 100015
Source Host           : mothershipmaria.leoparddata.com:3306
Source Database       : cscoquest

Target Server Type    : MariaDB
Target Server Version : 100015
File Encoding         : 65001

Date: 2016-05-05 16:58:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blogentries
-- ----------------------------
DROP TABLE IF EXISTS `blogentries`;
CREATE TABLE `blogentries` (
  `BlogEntryID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `BlogID` bigint(20) DEFAULT NULL,
  `ContentID` bigint(20) DEFAULT NULL,
  `PublishDate` datetime DEFAULT NULL,
  `AuthorSecurityUserID` bigint(20) DEFAULT NULL,
  `IsVisible` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`BlogEntryID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for blogs
-- ----------------------------
DROP TABLE IF EXISTS `blogs`;
CREATE TABLE `blogs` (
  `BlogID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `WebApplicationID` bigint(20) DEFAULT NULL,
  `Name` varchar(512) DEFAULT NULL,
  `Description` varchar(1024) DEFAULT NULL,
  `Created` datetime DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT NULL,
  `OwnerSecurityUserID` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`BlogID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for content
-- ----------------------------
DROP TABLE IF EXISTS `content`;
CREATE TABLE `content` (
  `ContentID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ContentTypeID` bigint(20) NOT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Path` varchar(1024) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Description` varchar(2048) DEFAULT NULL,
  `WebApplicationID` bigint(20) NOT NULL,
  `ContentBlob` longblob,
  `ContentText` longtext,
  `RequireSession` tinyint(1) NOT NULL,
  `Created` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ContentID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPRESSED KEY_BLOCK_SIZE=16;

-- ----------------------------
-- Table structure for contentdependencies
-- ----------------------------
DROP TABLE IF EXISTS `contentdependencies`;
CREATE TABLE `contentdependencies` (
  `ContentDependencyID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ContentID` bigint(20) DEFAULT NULL,
  `DependsOnContentID` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ContentDependencyID`),
  KEY `contentid` (`ContentID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for contenttypes
-- ----------------------------
DROP TABLE IF EXISTS `contenttypes`;
CREATE TABLE `contenttypes` (
  `ContentTypeID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ContentTypeID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for securityusers
-- ----------------------------
DROP TABLE IF EXISTS `securityusers`;
CREATE TABLE `securityusers` (
  `SecurityUserID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ExternalSecurityUserID` bigint(20) DEFAULT NULL,
  `Username` varchar(255) DEFAULT NULL,
  `Password` varchar(512) DEFAULT NULL,
  `WebApplicationID` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`SecurityUserID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for webapplications
-- ----------------------------
DROP TABLE IF EXISTS `webapplications`;
CREATE TABLE `webapplications` (
  `WebApplicationID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Description` varchar(2048) DEFAULT NULL,
  `IsAvailable` tinyint(1) DEFAULT NULL,
  `Created` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`WebApplicationID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
