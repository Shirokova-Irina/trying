--выбрать название представлени¤, SQL-запрос, создающий это представление - дл¤ всех представлений, созданных назначенным пользователем базы данных

SELECT [VIEW].name as 'Название представления', query.[definition] AS 'Запрос'
FROM sys.views AS [VIEW]
JOIN sys.sql_modules AS query ON [VIEW].object_id = query.object_id
WHERE [VIEW].object_id IN (SELECT object_id 
					    FROM sys.objects AS ob
					    JOIN sys.schemas AS sch ON ob.schema_id = sch.schema_id
					    JOIN sys.database_principals AS pr ON sch.principal_id = pr.principal_id
					    WHERE pr.name = 'dbo')
AND [VIEW].object_id NOT IN (SELECT major_id FROM sys.extended_properties WHERE name = 'microsoft_database_tools_support');						
	
