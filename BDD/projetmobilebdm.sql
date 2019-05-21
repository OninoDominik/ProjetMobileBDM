-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mer. 20 mars 2019 à 10:33
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projetmobilebdm`
--

-- --------------------------------------------------------

--
-- Structure de la table `actor`
--

CREATE TABLE `actor` (
  `actorId` int(11) NOT NULL,
  `actorName` varchar(50) NOT NULL,
  `actorBio` text NOT NULL,
  `actorBirthdate` date DEFAULT NULL,
  `actorBirthplace` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `director`
--

CREATE TABLE `director` (
  `directorId` int(11) NOT NULL,
  `directorName` varchar(50) NOT NULL,
  `directorBio` text NOT NULL,
  `directorBirtdate` date NOT NULL,
  `directorBirthplace` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `movie`
--

CREATE TABLE `movie` (
  `movieId` int(11) NOT NULL,
  `movieTitle` varchar(50) NOT NULL,
  `movieSynopsis` text NOT NULL,
  `movieReleaseDate` date NOT NULL,
  `movieDuration` int(11) NOT NULL,
  `directorId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `music`
--

CREATE TABLE `music` (
  `musicId` int(11) NOT NULL,
  `musicTitle` varchar(50) NOT NULL,
  `musicRealaseDate` varchar(50) NOT NULL,
  `musicAlbum` varchar(50) NOT NULL,
  `singerId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `playinmovie`
--

CREATE TABLE `playinmovie` (
  `actorId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `playintvshow`
--

CREATE TABLE `playintvshow` (
  `actorId` int(11) NOT NULL,
  `showId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `singer`
--

CREATE TABLE `singer` (
  `singerId` int(11) NOT NULL,
  `singerName` varchar(50) NOT NULL,
  `singerBio` text NOT NULL,
  `singerBirthdate` date NOT NULL,
  `singerBirthplace` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `test`
--

CREATE TABLE `test` (
  `testId` int(11) NOT NULL,
  `testNom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `test`
--

INSERT INTO `test` (`testId`, `testNom`) VALUES
(1, 'dom'),
(2, 'ben'),
(3, 'murat');

-- --------------------------------------------------------

--
-- Structure de la table `tvshow`
--

CREATE TABLE `tvshow` (
  `showId` int(11) NOT NULL,
  `showTitle` varchar(50) NOT NULL,
  `showSynopsis` text NOT NULL,
  `showReleaseDate` date NOT NULL,
  `showEpisodeCount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `actor`
--
ALTER TABLE `actor`
  ADD PRIMARY KEY (`actorId`);

--
-- Index pour la table `director`
--
ALTER TABLE `director`
  ADD PRIMARY KEY (`directorId`);

--
-- Index pour la table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`movieId`),
  ADD UNIQUE KEY `Movie_Director_AK` (`directorId`);

--
-- Index pour la table `music`
--
ALTER TABLE `music`
  ADD PRIMARY KEY (`musicId`),
  ADD KEY `Music_Singer_FK` (`singerId`);

--
-- Index pour la table `playinmovie`
--
ALTER TABLE `playinmovie`
  ADD PRIMARY KEY (`actorId`,`movieId`),
  ADD KEY `PlayInMovie_Movie0_FK` (`movieId`);

--
-- Index pour la table `playintvshow`
--
ALTER TABLE `playintvshow`
  ADD PRIMARY KEY (`actorId`,`showId`),
  ADD KEY `PlayInTvShow_TvShow0_FK` (`showId`);

--
-- Index pour la table `singer`
--
ALTER TABLE `singer`
  ADD PRIMARY KEY (`singerId`);

--
-- Index pour la table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`testId`);

--
-- Index pour la table `tvshow`
--
ALTER TABLE `tvshow`
  ADD PRIMARY KEY (`showId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `actor`
--
ALTER TABLE `actor`
  MODIFY `actorId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `director`
--
ALTER TABLE `director`
  MODIFY `directorId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `movie`
--
ALTER TABLE `movie`
  MODIFY `movieId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `music`
--
ALTER TABLE `music`
  MODIFY `musicId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `singer`
--
ALTER TABLE `singer`
  MODIFY `singerId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `test`
--
ALTER TABLE `test`
  MODIFY `testId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `tvshow`
--
ALTER TABLE `tvshow`
  MODIFY `showId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `movie`
--
ALTER TABLE `movie`
  ADD CONSTRAINT `Movie_Director_FK` FOREIGN KEY (`directorId`) REFERENCES `director` (`directorId`);

--
-- Contraintes pour la table `music`
--
ALTER TABLE `music`
  ADD CONSTRAINT `Music_Singer_FK` FOREIGN KEY (`singerId`) REFERENCES `singer` (`singerId`);

--
-- Contraintes pour la table `playinmovie`
--
ALTER TABLE `playinmovie`
  ADD CONSTRAINT `PlayInMovie_Actor_FK` FOREIGN KEY (`actorId`) REFERENCES `actor` (`actorId`),
  ADD CONSTRAINT `PlayInMovie_Movie0_FK` FOREIGN KEY (`movieId`) REFERENCES `movie` (`movieId`);

--
-- Contraintes pour la table `playintvshow`
--
ALTER TABLE `playintvshow`
  ADD CONSTRAINT `PlayInTvShow_Actor_FK` FOREIGN KEY (`actorId`) REFERENCES `actor` (`actorId`),
  ADD CONSTRAINT `PlayInTvShow_TvShow0_FK` FOREIGN KEY (`showId`) REFERENCES `tvshow` (`showId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
