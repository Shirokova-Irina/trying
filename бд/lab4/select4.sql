--Определить для каждой группы количество экзаменов и зачетов.  
USE LAB3;
SELECT DISTINCT g.id_groups, COUNT(DISTINCT c.id_subject) AS col FROM class c
LEFT JOIN class_groups cg ON cg.id_class = c.id_class
LEFT JOIN groups g ON g.id_groups = cg.id_groups
GROUP BY g.id_groups
