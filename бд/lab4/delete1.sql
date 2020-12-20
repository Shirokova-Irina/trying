---Удаление предмета 'химия' (убрали из программы) 
USE LAB3;
DELETE FROM subject WHERE name = 'химия';

---Смена преподавателя Бурцева на Агаханову
UPDATE class_lecturer SET id_lecturer = (SELECT id_lecturer FROM lecturer WHERE full_name = 'Агаханова Яна Сергеевна')
WHERE id_lecturer = (SELECT id_lecturer FROM lecturer WHERE full_name = 'Бурцев Алексей Анатольевич')

--- Удаление аудитории из расписания
DELETE FROM classroom WHERE room_number = 516

--- Перенесли все пары с одного дня на другой
UPDATE class SET id_date_class = 13 WHERE id_date_class = (SELECT id_date_class FROM date_class WHERE day = '2020-10-17')

