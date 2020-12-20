--Выбрать преподавателей, у которых наибольшее количество пар осенью 2020г. 
USE LAB3;
SELECT TOP(1) l.full_name, COUNT(c.id_class) AS col_class FROM lecturer l
INNER JOIN class_lecturer cl ON cl.id_lecturer = l.id_lecturer
INNER JOIN class c ON c.id_class = cl.id_class
INNER JOIN date_class d ON d.id_date_class = c.id_date_class
WHERE d.day BETWEEN '20200901' AND '20201130' GROUP BY l.full_name ORDER BY col_class ;
