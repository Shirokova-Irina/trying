CREATE TABLE `lecturer` (
`id` int NOT NULL AUTO_INCREMENT,
`full_name` varchar(70) NOT NULL,
`chair_id` smallint NOT NULL,
`post` varchar(70) NOT NULL,
`degree` varchar(70) NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE `curricula` (
`id` int NOT NULL AUTO_INCREMENT,
`name` varchar(70) NOT NULL,
`duty` smallint NOT NULL,
`type_check` smallint NOT NULL,
`col_hours` int NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE `class` (
`id` int NOT NULL AUTO_INCREMENT,
`lecturer_id` int NOT NULL,
`curricula_id` int NOT NULL,
`classroom` varchar(15) NOT NULL,
`group_id` int NOT NULL,
`type` varchar(15) NOT NULL,
`date` DATE NOT NULL,
`time` TIME NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE `type_check` (
`id` smallint NOT NULL AUTO_INCREMENT,
`name` varchar(40) NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE `duty` (
`id` smallint NOT NULL AUTO_INCREMENT,
`description` varchar(255) NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE `groups` (
`id` int NOT NULL AUTO_INCREMENT,
`chair_id` smallint NOT NULL,
`class_number` tinyint NOT NULL,
`name` varchar(15) NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE `chair` (
`id` smallint NOT NULL AUTO_INCREMENT,
`faculty_id` tinyint NOT NULL,
`name` varchar(70) NOT NULL,
`description` varchar(255) NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE `faculty` (
`id` tinyint NOT NULL AUTO_INCREMENT,
`name` varchar(70) NOT NULL,
`description` varchar(255) NOT NULL,
PRIMARY KEY (`id`)
);

ALTER TABLE `lecturer` ADD CONSTRAINT `lecturer_fk0` FOREIGN KEY (`chair_id`) REFERENCES `chair`(`id`);

ALTER TABLE `curricula` ADD CONSTRAINT `curricula_fk0` FOREIGN KEY (`duty`) REFERENCES `duty`(`id`);

ALTER TABLE `curricula` ADD CONSTRAINT `curricula_fk1` FOREIGN KEY (`type_check`) REFERENCES `type_check`(`id`);

ALTER TABLE `class` ADD CONSTRAINT `class_fk0` FOREIGN KEY (`lecturer_id`) REFERENCES `lecturer`(`id`);

ALTER TABLE `class` ADD CONSTRAINT `class_fk1` FOREIGN KEY (`curricula_id`) REFERENCES `curricula`(`id`);

ALTER TABLE `class` ADD CONSTRAINT `class_fk2` FOREIGN KEY (`group_id`) REFERENCES `groups`(`id`);

ALTER TABLE `groups` ADD CONSTRAINT `groups_fk0` FOREIGN KEY (`chair_id`) REFERENCES `chair`(`id`);

ALTER TABLE `chair` ADD CONSTRAINT `chair_fk0` FOREIGN KEY (`faculty_id`) REFERENCES `faculty`(`id`);
