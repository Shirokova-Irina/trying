--- Название предмета, количество пар, проведённых за ноябрь 2020 
USE LAB3;
IF (object_id ('SUB_STATS') IS NOT NULL) DROP VIEW SUB_STATS
GO
CREATE VIEW SUB_STATS AS
(SELECT s.name AS "Subject_name", COUNT(c.id_class) AS "Col_class" FROM class c
JOIN date_class dc ON dc.id_date_class = c.id_date_class
JOIN subject s ON s.id_subject = c.id_subject
WHERE dc.day BETWEEN '2020-11-01' AND '2020-11-30'
GROUP BY s.name
ORDER BY COUNT(c.id_class)
)
GO
SELECT * FROM SUB_STATS
