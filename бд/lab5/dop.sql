USE LAB3;
IF (object_id ('LECTION3_STATS') IS NOT NULL) DROP VIEW LECTION3_STATS
GO
CREATE VIEW LECTION3_STATS AS
(SELECT s.name AS name, l.full_name AS full_name FROM class c
JOIN class_lecturer cl ON cl.id_class = c.id_class
JOIN lecturer l ON l.id_lecturer = cl.id_lecturer
JOIN subject s ON c.id_subject = s.id_subject
)
GO
SELECT * FROM LECTION3_STATS
