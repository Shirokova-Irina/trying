USE LAB3

DROP USER user1
DROP LOGIN test
DROP ROLE role_user1;

---Создает имя входа для базы данных(даёт вход для конкретной базы данных)                           
CREATE LOGIN test
    WITH PASSWORD = 'Qwerty1.'
---Устанавливаем на какую базу данных создали имя входа                                              
ALTER LOGIN test
    WITH DEFAULT_DATABASE = LAB3
--Создаём юзера в данной бд                                                                        
CREATE USER user1 FOR LOGIN test
--Даём права на селект, инсёрт, апдейт для таблицы кафедра                                          
GRANT SELECT, INSERT, UPDATE ON chair to user1
--Даём права на селект, инсёрт для таблицы факультет                                                
GRANT SELECT, INSERT ON faculty to user1
--Даём права на селект для таблицы пары                                                             
GRANT SELECT ON class to user1
--Даём права на селект на колонки name, id_type_check, col_hours в таблице предметы                 
GRANT SELECT ON subject (name, id_type_check, col_hours) TO user1
--Даём права на апдейт для таблицы преподаватели для колонки degree                                 
GRANT UPDATE ON lecturer (degree) TO user1
--Даём права на селект для представления SUBJECT_STATS                                                
GRANT SELECT ON SUBJECT_STATS TO user1
--Даём права на селект для представления BUILDING_STATS                                             
GRANT SELECT ON BUILDING_STATS TO user1



--Создаём роль уровня базы данных                                                                   
CREATE ROLE role_user1
--Даём права на селект, апдейт роли в представлении 
GRANT SELECT, UPDATE ON LECTION3_STATS (name) TO role_user1
--Добавляем в роль пользователя
ALTER ROLE role_user1
    ADD MEMBER user1
--Соединяемся с базой через пользователя
EXECUTE AS USER = 'user1';


--ПРОВЕРКИ
---Проверка выборки из chair(Может делать)
SELECT * FROM chair;
---Проверка выборки из classroom(Нет прав)
SELECT * FROM classroom;
---Проверка insert в chair(Может делать)
INSERT INTO chair(id_chair, [name]) VALUES(12,'кафедра мемалогии');
---Проверка колонки name в subject(Может делать)
SELECT name FROM subject;
---Проверка колонки id_subject в subject(Нет прав)
SELECT id_subject FROM subject;
---Проверка update в lecturer(Может делать только для degree)
UPDATE lecturer SET degree = 'ректор' where id_lecturer = 128;
---Проверка выборки из SUBJECT_STATS(Может делать)
SELECT * FROM SUBJECT_STATS;
---Проверка выборки из BUILDING_STATS(Может делать)
SELECT * FROM BUILDING_STATS;
---Проверка update в LECTION3_STATS(Может делать для name)
UPDATE LECTION3_STATS SET name = 'qwerty' where full_name = 'Абдулгамидов Низами Абдулгамидович';
REVERT;
