--Вывести расписание занятий преподавателя 'Аланакян Юрий Робертович' на ноябрь 2020г. 
USE LAB3;
SELECT s.name, dc.day, cr.room_number, lt.start_time, lt.end_time FROM class c
LEFT JOIN class_lecturer cl ON cl.id_class = c.id_class
LEFT JOIN lecturer l ON l.id_lecturer = cl.id_lecturer
LEFT JOIN subject s ON s.id_subject = c.id_subject
LEFT JOIN date_class dc ON dc.id_date_class = c.id_date_class
LEFT JOIN lesson_time lt ON lt.id_lesson_time = c.id_lesson_time
LEFT JOIN classroom cr ON cr.id_classroom = c.id_classroom
WHERE l.full_name = 'Аланакян Юрий Робертович' AND dc.day BETWEEN '20201101' AND '20201130' ORDER BY dc.day, lt.start_time;
