--Только обязательные занятия осенью 2020. 
USE LAB3;
SELECT s.name FROM subject s
JOIN class c ON c.id_subject = s.id_subject
JOIN date_class dc ON dc.id_date_class = c.id_date_class
JOIN duty d ON d.id_duty = s.id_duty
JOIN class_groups cg ON cg.id_class = c.id_class
JOIN groups g ON g.id_groups = cg.id_groups
WHERE dc.day BETWEEN '20200901' AND '20201130' AND  d.description = 'обязательное посещение всех занятий' AND g.id_groups = 1905 GROUP BY s.name;
