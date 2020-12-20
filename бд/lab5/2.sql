--Группа, дата, время, название предмета, преподаватель, аудитория. (вид занятия - лекция) 
USE LAB3;
IF (object_id ('LECTION_STATS') IS NOT NULL) DROP VIEW LECTION_STATS
GO
CREATE VIEW LECTION_STATS AS
(SELECT g.number AS 'Group', dc.day AS 'Date', s.name AS 'Subject_name', lt.start_time AS 'Lession_time', l.full_name AS 'Lecturer', c2.room_number FROM class c
JOIN class_lecturer cl ON cl.id_class = c.id_class
JOIN lecturer l on l.id_lecturer = cl.id_lecturer
JOIN class_groups cg on c.id_class = cg.id_class
JOIN groups g on cg.id_groups = g.id_groups
JOIN date_class dc on c.id_date_class = dc.id_date_class
JOIN lesson_time lt on lt.id_lesson_time = c.id_lesson_time
JOIN classroom c2 on c.id_classroom = c2.id_classroom
JOIN subject s on c.id_subject = s.id_subject
WHERE c.type = 'лекция'
)
GO
SELECT * FROM LECTION_STATS
