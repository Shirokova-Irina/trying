--Название кафедры, название предмета, количество преподавателей, с ними связанных. 
USE LAB3;
IF (object_id ('CHAIR_STATS') IS NOT NULL) DROP VIEW CHAIR_STATS
GO
CREATE VIEW CHAIR_STATS AS
(SELECT ch.name AS 'Chair', s.name AS 'Subject_name', COUNT(l.id_lecturer) AS 'Col' FROM class c
JOIN subject s on c.id_subject = s.id_subject
JOIN chair ch on s.id_chair = ch.id_chair
JOIN class_lecturer cl on c.id_class = cl.id_class
JOIN lecturer l on cl.id_lecturer = l.id_lecturer
GROUP BY s.name, ch.name
)
GO
SELECT * FROM CHAIR_STATS
