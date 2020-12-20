--выбрать название ограничения целостности (первичные и внешние ключи), имя таблицы, в которой оно находится, признак того, что это за ограничение ('PK' для первичного ключа и 'F' для внешнего) - для всех ограничений целостности, владеемых назначенным пользователем базы данных

SELECT con.name AS 'Ограничение', tab.name AS 'Имя таблицы', con.[type] AS 'Тип ограничния'
FROM sys.objects AS con
JOIN sys.tables AS tab ON con.parent_object_id = tab.object_id AND con.[type] = 'F' OR con.[type] = 'PK'
WHERE con.object_id IN (SELECT object_id 
					    FROM sys.objects AS ob
					    JOIN sys.schemas AS sch ON ob.schema_id = sch.schema_id
					    JOIN sys.database_principals AS pr ON sch.principal_id = pr.principal_id
					    WHERE pr.name = 'dbo')
AND con.object_id NOT IN (SELECT major_id FROM sys.extended_properties WHERE name = 'microsoft_database_tools_support');


