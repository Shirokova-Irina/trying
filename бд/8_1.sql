--выбрать имена всех таблиц, созданных назначенным пользователем базы данных
SELECT name AS 'таблица' FROM sys.tables AS tab 
WHERE tab.object_id IN (SELECT object_id 
					    FROM sys.objects AS ob
					    JOIN sys.schemas AS sch ON ob.schema_id = sch.schema_id
					    JOIN sys.database_principals AS pr ON sch.principal_id = pr.principal_id
					    WHERE pr.name = 'dbo')
AND tab.object_id NOT IN (SELECT major_id FROM sys.extended_properties WHERE name = 'microsoft_database_tools_support');




