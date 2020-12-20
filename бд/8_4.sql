--выбрать название внешнего ключа, имя таблицы, содержащей внешний ключ, имя таблицы, содержащей его родительский ключ - для всех внешних ключей, созданных назначенным пользователем базы данных

SELECT fk.name AS 'Имя внешнего ключа', ct.name AS 'Название таблицы, содержащей ключ', pt.name AS 'Родительская таблица'
FROM sys.tables AS pt
JOIN sys.foreign_keys AS fk ON pt.object_id = fk.referenced_object_id
JOIN sys.tables AS ct ON fk.parent_object_id = ct.object_id
WHERE pt.object_id IN (SELECT object_id 
					    FROM sys.objects AS ob
					    JOIN sys.schemas AS sch ON ob.schema_id = sch.schema_id
					    JOIN sys.database_principals AS pr ON sch.principal_id = pr.principal_id
					    WHERE pr.name = 'dbo')
AND pt.object_id NOT IN (SELECT major_id FROM sys.extended_properties WHERE name = 'microsoft_database_tools_support');
