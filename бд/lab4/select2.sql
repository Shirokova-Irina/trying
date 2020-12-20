--Определить возможные "накладки" у преподавателей в расписании. 
USE LAB3;
SELECT DISTINCT c1.id_class AS first_class, c2.id_class AS second_class, l1.full_name FROM class c1
JOIN date_class dc1 ON dc1.id_date_class = c1.id_date_class
JOIN date_class dc2 ON dc1.day = dc2.day
JOIN class c2 ON dc2.id_date_class = c2.id_date_class
JOIN class_lecturer cl1 ON cl1.id_class = c1.id_class
JOIN lecturer l1 ON l1.id_lecturer = cl1.id_lecturer
JOIN class_lecturer cl2 ON cl2.id_class = c2.id_class
JOIN lecturer l2 ON l2.id_lecturer = cl2.id_lecturer
JOIN lesson_time lt1 ON lt1.id_lesson_time = c1.id_lesson_time
JOIN lesson_time lt2 ON lt2.id_lesson_time = c2.id_lesson_time
WHERE cl1.id_lecturer = cl2.id_lecturer AND c1.id_class != c2.id_class AND c1.id_date_class = c2.id_date_class AND ((lt1.start_time >= lt2.start_time AND lt1.start_time <= lt2.end_time) OR (lt1.end_time >= lt2.start_time AND lt1.end_time <= lt2.end_time))
