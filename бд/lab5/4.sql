--Группа, предмет, преподаватель, вид проверки. 
USE LAB3;
IF (object_id ('LECTION2_STATS') IS NOT NULL) DROP VIEW LECTION2_STATS
GO
CREATE VIEW LECTION2_STATS AS
(SELECT g.number AS 'Group', s.name AS 'Subject_name', l.full_name AS 'Lecturer', tc.name AS 'Type_check' FROM class c
JOIN class_lecturer cl ON cl.id_class = c.id_class
JOIN lecturer l on l.id_lecturer = cl.id_lecturer
JOIN class_groups cg on c.id_class = cg.id_class
JOIN groups g on cg.id_groups = g.id_groups
JOIN subject s on c.id_subject = s.id_subject
JOIN type_check tc on s.id_type_check = tc.id_type_check
)
GO
SELECT * FROM LECTION2_STATS
