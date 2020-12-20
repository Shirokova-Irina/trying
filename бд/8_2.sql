--выбрать имя таблицы, имя столбца таблицы, признак того, допускает ли данный столбец null-значения, название типа данных столбца таблицы, размер этого типа данных - для всех таблиц, созданных назначенным пользователем базы данных и всех их столбцов

SELECT tab.name AS 'Имя таблицы', col.name AS 'Имя столбца', col.is_nullable, [type].name AS 'Тип данных', col.max_length AS 'Размер'
FROM sys.tables AS tab
JOIN sys.columns AS col ON tab.object_id = col.object_id
JOIN sys.types AS [type] ON col.system_type_id = [type].system_type_id
WHERE tab.object_id IN (SELECT object_id 
					    FROM sys.objects AS ob
					    JOIN sys.schemas AS sch ON ob.schema_id = sch.schema_id
					    JOIN sys.database_principals AS pr ON sch.principal_id = pr.principal_id
					    WHERE pr.name = 'dbo')
AND tab.object_id NOT IN (SELECT major_id FROM sys.extended_properties WHERE name = 'microsoft_database_tools_support');			

