--Название предмета, количество лекций, семинаров, лабораторных занятий по нему. 
USE LAB3;
IF (object_id ('SUBJECT_STATS') IS NOT NULL) DROP VIEW SUBJECT_STATS
GO
CREATE VIEW SUBJECT_STATS AS
(SELECT s.name AS 'Subject_name',
(SELECT COUNT(*) FROM class c WHERE c.id_subject = s.id_subject AND c.type = 'лекция') AS 'Col_lection',
(SELECT COUNT(*) FROM class c WHERE c.id_subject = s.id_subject AND c.type = 'семинар') AS 'Col_sem',
(SELECT COUNT(*) FROM class c WHERE c.id_subject = s.id_subject AND c.type = 'лабораторные работы') AS 'Col_lab'
FROM subject s
)
GO
SELECT * FROM SUBJECT_STATS
