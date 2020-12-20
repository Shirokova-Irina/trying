--- Количество пар по дням, проведенные в аудитории 412
USE LAB3;
SELECT dc.day, COUNT(c.id_class) FROM class c
JOIN date_class dc ON dc.id_date_class = c.id_date_class
JOIN classroom cr ON cr.id_classroom = c.id_classroom
WHERE cr.room_number = 412
GROUP BY dc.day
