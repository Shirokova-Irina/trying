---Количество групп на каждом факультете 
USE LAB3;
IF (object_id ('FACULTY_STATS') IS NOT NULL) DROP VIEW FACULTY_STATS
GO
CREATE VIEW FACULTY_STATS AS
(SELECT f.name AS 'Faculty_name', COUNT(g.id_groups) AS 'Col_groups' FROM faculty f
JOIN groups g ON g.id_faculty = f.id_faculty
GROUP BY f.name
)
GO
SELECT * FROM FACULTY_STATS
