--- Количество пар в каждом определённом здании за сентябрь 2020 по субботам 
USE LAB3;
IF (object_id ('BUILDING_STATS') IS NOT NULL) DROP VIEW BUILDING_STATS
GO
CREATE VIEW BUILDING_STATS AS
(SELECT b.name AS 'Bulding_name', COUNT(c.id_class) AS 'Col_class' FROM building b
JOIN classroom cr ON cr.id_building = b.id_building
JOIN class c ON c.id_classroom = cr.id_classroom
JOIN date_class dc ON dc.id_date_class = c.id_date_class
WHERE dc.id_day_of_week = 6 AND dc.day BETWEEN '2020-09-01' AND '2020-09-30'
GROUP BY b.name
)
GO
SELECT * FROM BUILDING_STATS
