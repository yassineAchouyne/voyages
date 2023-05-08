-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 08 mai 2023 à 09:27
-- Version du serveur : 8.0.31
-- Version de PHP : 8.1.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `voyages`
--

-- --------------------------------------------------------

--
-- Structure de la table `buses`
--

DROP TABLE IF EXISTS `buses`;
CREATE TABLE IF NOT EXISTS `buses` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `libelle` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lieuDebart` int NOT NULL,
  `lieuArrive` int NOT NULL,
  `dateDebart` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateArrive` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `statut` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `capacite` int NOT NULL,
  `prix` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `buses`
--

INSERT INTO `buses` (`id`, `libelle`, `lieuDebart`, `lieuArrive`, `dateDebart`, `dateArrive`, `image`, `statut`, `capacite`, `prix`, `created_at`, `updated_at`) VALUES
(12, 'CTM - ستيام', 26, 6, '16:30', '20:00', 'photos/Aqe4HwPD28ZKAQ85FvJQIfRXL3tclp1JmAv6iUEo.jpg', 'autorout', 10, 115.00, '2023-05-08 07:14:06', '2023-05-08 07:45:33'),
(13, 'PULLMAN DU SUD - بولمان الجنوب', 26, 6, '02:20', '06:00', 'photos/GJjSibmcPKPF4RziXH3bojlJaWimrLLkdDlCg4uo.jpg', 'ordinaire', 8, 80.00, '2023-05-08 07:15:51', '2023-05-08 07:15:51'),
(11, 'CTM - ستيام', 26, 6, '12:15', '04:30', 'photos/L2AxNpAQMW2NLeU3ZfvYKnTl66ug5ZF9jTuyIJNg.jpg', 'autorout', 10, 115.00, '2023-05-08 07:12:44', '2023-05-08 07:16:19'),
(14, 'TCHEKS TOUR INTER - الشقوري', 26, 6, '04:00', '07:45', 'photos/noHNgmh2ORoyvCATV5Cy15XzOdaLZYhgOhwNdsT8.jpg', 'ordinaire', 7, 80.00, '2023-05-08 07:17:27', '2023-05-08 07:17:27'),
(15, 'LIBRA TOURS - الكشاف السريع', 26, 6, '04:00', '07:00', 'photos/zLZ0SLiPVGiRrS6uH3a8CSIoRTRo9mhCl2ynDc3E.jpg', 'autorout', 5, 80.00, '2023-05-08 07:19:51', '2023-05-08 07:19:51'),
(16, 'VOYAGES ARRAHMAN - أسفار الرحمان', 26, 6, '11:15', '14:15', 'photos/1sBtgknOcSZFrQCqvf0UUCQMaGL3jXLcsS9aZuD3.jpg', 'autorout', 5, 79.00, '2023-05-08 07:21:06', '2023-05-08 07:21:06');

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_04_27_092152_create_buses_table', 2),
(6, '2023_05_08_092118_create_offres_table', 3);

-- --------------------------------------------------------

--
-- Structure de la table `offres`
--

DROP TABLE IF EXISTS `offres`;
CREATE TABLE IF NOT EXISTS `offres` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `photo` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remise` int NOT NULL,
  `codePromo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0',
  `ville` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `tel`, `email`, `email_verified_at`, `password`, `isAdmin`, `ville`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Achouyne', 'Yassine', '+212620858128', 'yachouyne@gmail.com', NULL, '$2y$10$yYVl2XZS1CF98.m2hzQXyeLc18ZwotLlxa3khx5NDUKJcXdTW5iuq', 0, NULL, NULL, '2023-04-27 08:07:50', '2023-04-27 08:07:50'),
(2, 'Achouyne', 'Yassine', '+212620858128', 'yachouyne2@gmail.com', NULL, '$2y$10$dPOpfzDRbMwu8MknedopseUFWJoKT7ukuiMiKFsCGds5zEeJU/c9y', 0, NULL, NULL, '2023-04-30 12:20:49', '2023-04-30 12:20:49');

-- --------------------------------------------------------

--
-- Structure de la table `villes`
--

DROP TABLE IF EXISTS `villes`;
CREATE TABLE IF NOT EXISTS `villes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `villes`
--

INSERT INTO `villes` (`id`, `nom`) VALUES
(1, 'Agadir'),
(2, 'Al Hoceima'),
(3, 'Azemmour'),
(4, 'Beni Mellal'),
(5, 'Boujdour'),
(6, 'Casablanca'),
(7, 'Chefchaouen'),
(8, 'Dakhla'),
(9, 'El Jadida'),
(10, 'Errachidia'),
(11, 'Essaouira'),
(12, 'Fès'),
(13, 'Guelmim'),
(14, 'Ifrane'),
(15, 'Kénitra'),
(16, 'Khouribga'),
(17, 'Laâyoune'),
(18, 'Larache'),
(19, 'Marrakech'),
(20, 'Meknès'),
(21, 'Mohammédia'),
(22, 'Nador'),
(23, 'Ouarzazate'),
(24, 'Oujda'),
(25, 'Rabat'),
(26, 'Safi'),
(27, 'Salé'),
(28, 'Sefrou'),
(29, 'Settat'),
(30, 'Sidi Ifni'),
(31, 'Tanger'),
(32, 'Tan-Tan'),
(33, 'Taza'),
(34, 'Tétouan'),
(35, 'Tiznit');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
