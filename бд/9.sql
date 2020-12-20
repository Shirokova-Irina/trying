USE LAB3;
-- На INSERT 
IF (OBJECT_ID('trig') IS NOT NULL)
	DROP TRIGGER trig
GO
CREATE TRIGGER trig
ON class
AFTER INSERT
AS
BEGIN
    DECLARE @class_type AS INT
    SET @class_type = 0;
    IF EXISTS(SELECT TOP(1) id_class FROM class
        WHERE class.id_subject = INSERTED.id_subject AND class.type = 'лекция')
    BEGIN
        @class_type = (SELECT TOP(1) id_class FROM class
            WHERE class.id_subject = INSERTED.id_subject AND class.type = 'лекция');
        UPDATE class_lecturer SET class_lecturer.id_class = INSERTED.id_class WHERE class_lecturer.id_class = @class_type;
        UPDATE class_groups SET class_groups.id_class = INSERTED.id_class WHERE class_groups.id_class = @class_type;
        DELETE FROM class WHERE id_class = @class_type;
    END
END
GO

IF (OBJECT_ID('trig_del') IS NOT NULL)
	DROP TRIGGER trig_del
GO
CREATE TRIGGER trig_del
ON class
INSTEAD OF DELETE
AS
BEGIN
    DELETE FROM class_lecrure WHERE class_lecturer.id_class = DELETED.id_class
    DELETE FROM class_groups WHERE class_groups.id_class = DELETED.id_class
END
GO

IF (OBJECT_ID('trig_update') IS NOT NULL)
	DROP TRIGGER trig_update
GO
CREATE TRIGGER trig_update
ON class
INSTEAD OF update
AS
IF UPDATE(id_class)
    BEGIN
        UPDATE class_lecturer SET class_lecturer.id_class = INSERTED.id_class WHERE class_lecturer.id_class = DELETED.id_class;
        UPDATE class_groups SET class_groups.id_class = INSERTED.id_class WHERE class_groups.id_class = DELETED.id_class;
    END
GO
