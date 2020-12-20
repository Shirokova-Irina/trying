--у каких групп есть в сб 1 пара
USE LAB3;
SELECT g.id_groups FROM groups g
JOIN class_groups cg ON cg.id_groups = g.id_groups
JOIN class c ON c.id_class = cg.id_class
JOIN date_class d ON d.id_date_class = c.id_date_class
JOIN day_of_week dw ON dw.id_day_of_week = d.id_day_of_week
JOIN lesson_time t ON t.id_lesson_time = c.id_lesson_time
WHERE t.start_time = '09:00:00' AND  dw.name = 'суббота';
