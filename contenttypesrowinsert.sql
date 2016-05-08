/*
Navicat MariaDB Data Transfer

Source Server         : Mothership
Source Server Version : 100015
Source Host           : mothershipmaria.leoparddata.com:3306
Source Database       : contentstorm

Target Server Type    : MariaDB
Target Server Version : 100015
File Encoding         : 65001

Date: 2016-05-05 16:54:11
*/

SET FOREIGN_KEY_CHECKS=0;

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
-- Records of contenttypes
-- ----------------------------
INSERT INTO `contenttypes` VALUES ('1', 'Blog Entry');
INSERT INTO `contenttypes` VALUES ('2', 'Content Page');
INSERT INTO `contenttypes` VALUES ('3', 'JavaScript');
INSERT INTO `contenttypes` VALUES ('4', 'Css');
INSERT INTO `contenttypes` VALUES ('5', 'TypeScript');
INSERT INTO `contenttypes` VALUES ('6', 'Main Page Template');
INSERT INTO `contenttypes` VALUES ('7', 'Blob');
INSERT INTO `contenttypes` VALUES ('8', 'Video');
INSERT INTO `contenttypes` VALUES ('9', 'File');
INSERT INTO `contenttypes` VALUES ('10', 'Image');
