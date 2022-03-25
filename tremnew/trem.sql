-- --------------------------------------------------------
-- Sunucu:                       127.0.0.1
-- Sunucu sürümü:                5.7.33 - MySQL Community Server (GPL)
-- Sunucu İşletim Sistemi:       Win64
-- HeidiSQL Sürüm:               11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- reactdb için veritabanı yapısı dökülüyor
CREATE DATABASE IF NOT EXISTS `reactdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `reactdb`;

-- tablo yapısı dökülüyor reactdb.customers
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT '0',
  `email` varchar(50) DEFAULT '0',
  `phone` varchar(50) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- reactdb.customers: ~21 rows (yaklaşık) tablosu için veriler indiriliyor
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
REPLACE INTO `customers` (`id`, `name`, `email`, `phone`) VALUES
	(13, 'Muhammet Aksay', 'aksay84@gmail.com', '05061388333'),
	(14, 'Muhammet Aksay', 'aksay84@gmail.com', '05061388333'),
	(15, 'Muhammet Aksay', 'teacher@test.com', '05061388345'),
	(16, 'Farrah Glover', 'jotewidawo@mailinator.com', '+1 (789) 381-2868'),
	(17, 'Chancellor Padilla', 'faxigymem@mailinator.com', '+1 (195) 415-4058'),
	(18, 'Merritt Leonard', 'piju@mailinator.com', '+1 (794) 518-3613'),
	(19, 'Barry Washington', 'tynogigiw@mailinator.com', '+1 (855) 631-3006'),
	(20, 'Alexis Estrada', 'gevesoca@mailinator.com', '+1 (932) 129-8376'),
	(21, 'Zephania French', 'jubunuto@mailinator.com', '+1 (902) 646-1227'),
	(22, 'Lavinia Butler', 'tututowi@mailinator.com', '+1 (326) 382-3613'),
	(23, 'Zenia Garza', 'canedogi@mailinator.com', '+1 (103) 667-1657'),
	(24, 'Colt Hancock', 'bygavajyg@mailinator.com', '+1 (542) 931-7866'),
	(25, 'Frances Mcintosh', 'hijowife@mailinator.com', '445583719955'),
	(26, 'Tatiana Rowland', 'gofiqupo@mailinator.com', '13614485902'),
	(27, 'Adrienne Mcbride', 'musomutac@mailinator.com', '13833096475'),
	(28, 'Sybil Jenkins', 'womolurygo@mailinator.com', '16743222401'),
	(29, 'Oliver Leonard', 'sebubabet@mailinator.com', '18633933395'),
	(30, 'Garth Bean', 'lyqyrodumy@mailinator.com', '14124468578'),
	(31, 'Brenda Acevedo', 'lizidon@mailinator.com', '19063045741'),
	(32, 'Rose Stewart', 'xuha@mailinator.com', '18767229501'),
	(33, 'Mariam Ellison', 'fuqi@mailinator.com', '2354384748293');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
