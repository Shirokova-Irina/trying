DROP DATABASE LAB3;
CREATE DATABASE LAB3;
USE LAB3;

CREATE TABLE class(
    id_class INT NOT NULL PRIMARY KEY,
    id_subject INT NOT NULL,
    id_classroom INT,
    type NVARCHAR(30),
    id_date_class INT NOT NULL,
    id_lesson_time SMALLINT NOT NULL);

CREATE TABLE class_lecturer(
    id_class INT NOT NULL,
    id_lecturer INT);

CREATE TABLE lecturer(
    id_lecturer INT NOT NULL PRIMARY KEY,
    full_name NVARCHAR(70),
    post NVARCHAR(70),
    degree NVARCHAR(70));

CREATE TABLE date_class(
    id_date_class INT NOT NULL PRIMARY KEY,
    id_day_of_week SMALLINT,
    day DATE);

CREATE TABLE day_of_week(
    id_day_of_week SMALLINT NOT NULL PRIMARY KEY,
    name NVARCHAR(15));

CREATE TABLE class_groups(
    id_class INT NOT NULL,
    id_groups INT NOT NULL);

CREATE TABLE groups(
    id_groups INT NOT NULL PRIMARY KEY,
    id_faculty TINYINT NOT NULL,
    years_start INT,
    number INT,
    level_of_education NVARCHAR(20));

CREATE TABLE faculty(
    id_faculty TINYINT NOT NULL PRIMARY KEY,
    name NVARCHAR(70),
    description NVARCHAR(255));

CREATE TABLE lesson_time(
    id_lesson_time SMALLINT NOT NULL PRIMARY KEY,
    start_time TIME,
    end_time TIME);

CREATE TABLE classroom(
    id_classroom INT NOT NULL PRIMARY KEY,
    room_number INT,
    id_building SMALLINT NOT NULL);

CREATE TABLE building(
    id_building SMALLINT NOT NULL PRIMARY KEY,
    id_adress SMALLINT NOT NULL,
    name NVARCHAR(70),
    short_name NVARCHAR(30));

CREATE TABLE adress(
    id_adress SMALLINT NOT NULL PRIMARY KEY,
    city NVARCHAR(20),
    street NVARCHAR(50),
    number_of_building INT);

CREATE TABLE subject(
    id_subject INT NOT NULL PRIMARY KEY,
    name NVARCHAR(70),
    id_duty SMALLINT NOT NULL,
    id_type_check SMALLINT NOT NULL,
    col_hours SMALLINT,
    id_chair SMALLINT NOT NULL);

CREATE TABLE duty(
    id_duty SMALLINT NOT NULL PRIMARY KEY,
    description NVARCHAR(255));

CREATE TABLE type_check(
    id_type_check SMALLINT NOT NULL PRIMARY KEY,
    name NVARCHAR(40));

CREATE TABLE chair(
    id_chair SMALLINT NOT NULL PRIMARY KEY,
    name NVARCHAR(70),
    description NVARCHAR(1000));

ALTER TABLE class_lecturer ADD
    FOREIGN KEY (id_class)
    REFERENCES class (id_class) ON DELETE CASCADE,
    FOREIGN KEY(id_lecturer)
    REFERENCES lecturer (id_lecturer) ON DELETE SET NULL;

ALTER TABLE class_groups ADD
    FOREIGN KEY (id_class)
    REFERENCES class (id_class) ON DELETE CASCADE,
    FOREIGN KEY(id_groups)
    REFERENCES groups (id_groups);

ALTER TABLE class ADD
    FOREIGN KEY (id_subject)
    REFERENCES subject (id_subject) ON DELETE CASCADE,
    FOREIGN KEY(id_classroom)
    REFERENCES classroom (id_classroom) ON DELETE SET NULL,
    FOREIGN KEY(id_date_class)
    REFERENCES date_class (id_date_class),
    FOREIGN KEY(id_lesson_time)
    REFERENCES lesson_time (id_lesson_time);

ALTER TABLE date_class ADD
    FOREIGN KEY (id_day_of_week)
    REFERENCES day_of_week (id_day_of_week);

ALTER TABLE groups ADD
    FOREIGN KEY (id_faculty)
    REFERENCES faculty (id_faculty);

ALTER TABLE classroom ADD
    FOREIGN KEY (id_building)
    REFERENCES building (id_building) ;

ALTER TABLE building ADD
    FOREIGN KEY (id_adress)
    REFERENCES adress (id_adress);

ALTER TABLE subject ADD
    FOREIGN KEY (id_duty)
    REFERENCES duty (id_duty),
    FOREIGN KEY (id_type_check)
    REFERENCES type_check (id_type_check),
    FOREIGN KEY (id_chair)
    REFERENCES chair (id_chair);

INSERT INTO faculty VALUES(1,'ФРКТ','Физтех-школа радиотехники и компьютерных технологий');
INSERT INTO faculty VALUES(2,'ЛФИ','Физтех-школа физики и исследований им. Ландау');
INSERT INTO faculty VALUES(3,'ФАКТ','Физтех-школа аэрокосмических технологий');
INSERT INTO faculty VALUES(4,'ФЭФМ','Физтех-школа электроники, фотоники и молекулярной физики');
INSERT INTO faculty VALUES(5,'ФПМИ','Физтех-школа прикладной математики и информатики');
INSERT INTO faculty VALUES(6,'ФБМФ','Физтех-школа биологической и медицинской физики');
INSERT INTO faculty VALUES(7,'ИНБИКСТ','Институт нано-, био-, информационных, когнитивных и социогуманитарных наук и технологий');

INSERT INTO lesson_time VALUES(10,'09:00:00', '10:25:00');
INSERT INTO lesson_time VALUES(20,'10:45:00', '12:10:00');
INSERT INTO lesson_time VALUES(30,'12:20:00', '13:45:00');
INSERT INTO lesson_time VALUES(40,'13:55:00', '15:20:00');
INSERT INTO lesson_time VALUES(50,'15:30:00', '16:55:00');
INSERT INTO lesson_time VALUES(60,'17:05:00', '18:30:00');
INSERT INTO lesson_time VALUES(70,'18:35:00', '20:00:00');

INSERT INTO lecturer VALUES(100,'Петрович Александр Юрьевич', 'доцент', 'кандидат физико-математических наук');
INSERT INTO lecturer VALUES(101,'Агаханова Яна Сергеевна', 'доцент', 'кандидат физико-математических наук');
INSERT INTO lecturer VALUES(102,'Бурцев Алексей Анатольевич', 'доцент', 'кандидат физико-математических наук');
INSERT INTO lecturer VALUES(103,'Терёшин Дмитрий Александрович', 'доцент', 'кандидат педагогических наук');
INSERT INTO lecturer VALUES(104,'Лунина Мария Александровна', 'доцент', 'кандидат физико-математических наук');
INSERT INTO lecturer VALUES(105,'Подлипский Олег Константинович', 'доцент', 'кандидат физико-математических наук');
INSERT INTO lecturer VALUES(106,'Бесов Олег Владимирович ', 'профессор', 'доктор физико-математических наук');
INSERT INTO lecturer VALUES(107,'Горяйнов Виктор Владимирович', 'профессор', 'доктор физико-математических наук');
INSERT INTO lecturer VALUES(108,'Дымарский Яков Михайлович', 'профессор', 'доктор физико-математических наук');
INSERT INTO lecturer(id_lecturer, [full_name], post) VALUES(109,'Зухба Расим Даурович', 'старший преподаватель');
INSERT INTO lecturer(id_lecturer, [full_name], post) VALUES(110,'Стародубцев Дмитрий Евгеньевич', 'ассистент');
INSERT INTO lecturer VALUES(111,'Овчинкин Владимир Александрович', 'доцент', 'кандидат технических наук');
INSERT INTO lecturer VALUES(112,'Веревочкин Юрий Георгиевич', 'профессор', 'кандидат физико-математических наук');
INSERT INTO lecturer VALUES(113,'Ипатов Евгений Борисович', 'доцент', 'кандидат физико-математических наук');
INSERT INTO lecturer VALUES(114,'Аланакян Юрий Робертович', 'профессор', 'доктор физико-математических наук');
INSERT INTO lecturer VALUES(115,'Смирнова Ольга Ивановна', 'преподаватель', 'доктор физико-математических наук');
INSERT INTO lecturer VALUES(116,'Смирнова Ольга Ивановна', 'преподаватель', 'доктор физико-математических наук');
INSERT INTO lecturer VALUES(117,'Бабичев Сергей Леонидович', 'преподаватель', 'кандидат физико-математических наук');
INSERT INTO lecturer(id_lecturer, [full_name], post) VALUES(118,'Дербышева Татьяна Николаевна', 'преподаватель');
INSERT INTO lecturer(id_lecturer, [full_name], post) VALUES(119,'Скубачевский Антон Александрович', 'преподаватель');
INSERT INTO lecturer(id_lecturer, [full_name], post) VALUES(120,'Подлесных Дмитрий Артурович', 'преподаватель');
INSERT INTO lecturer(id_lecturer, [full_name], post) VALUES(121,'Абрамова Ксения Борисовна', 'преподаватель');
INSERT INTO lecturer(id_lecturer, [full_name], post) VALUES(122,'Кирилова Людмила Ивановна', 'преподаватель');
INSERT INTO lecturer(id_lecturer, [full_name], post) VALUES(123,'Курапова Мария Евгеньевна', 'преподаватель');
INSERT INTO lecturer(id_lecturer, [full_name], post) VALUES(124,'Анна Викторовна Маркова', 'преподаватель');
INSERT INTO lecturer(id_lecturer, [full_name], post) VALUES(125,'Бунин Анатолий Яковлевич', 'преподаватель');
INSERT INTO lecturer(id_lecturer, [full_name], post) VALUES(126,'Абдулгамидов Низами Абдулгамидович', 'старший преподаватель');
INSERT INTO lecturer(id_lecturer, [full_name], post) VALUES(127,'Вялый Михаил Николаевич', 'преподаватель');
INSERT INTO lecturer(id_lecturer, [full_name], post) VALUES(128,'Рубцов Александр Александрович', 'преподаватель');
INSERT INTO lecturer(id_lecturer, [full_name], post) VALUES(129,'Теймуразов Кирилл Борисович', 'преподаватель');

INSERT INTO type_check VALUES(1,'дифференцированный зачет');
INSERT INTO type_check VALUES(2,'недифференцированный зачет');
INSERT INTO type_check VALUES(3,'экзамен');

INSERT INTO chair VALUES(1,'кафедра высшей метематики', 'Кафедра высшей математики была организована в 1947 году. Первым заведующим стал Борис Николаевич Делоне — видный советский математик, член-корреспондент АН СССР.  На кафедре ведется большой объем исследовательских работ в рамках грантов РФФИ, Гранта Президента РФ, Программ фундаментальных исследований РАН и других отечественных и зарубежных проектов. Это стимулирует постоянную работу по воспитанию и подготовке молодых математиков через аспирантуру МФТИ. Многие окончившие ее стали преподавателями кафедры.');
INSERT INTO chair(id_chair, [name]) VALUES(2,'кафедра общей физики');
INSERT INTO chair VALUES(3,'департамент иностранных языков', 'Департамент иностранных языков МФТИ ведет иноязычную подготовку бакалавров, магистров и аспирантов по четырем европейским языкам: английскому, немецкому, французскому и испанскому. Департамент организует учебный процесс одновременно для студентов пяти курсов и аспирантов первого года обучения всех факультетов. Обучение ведется по широкому спектру программ как на бюджетной, так и на внебюджетной основе.');
INSERT INTO chair VALUES(4,'департамент физической культуры и спорта', 'Кафедра была организована в 1950 году. На кафедре работают высококвалифицированные преподаватели, помогающие студентам проявить себя в мире спорта. Каждый студент выбирает специализацию, которой он будет заниматься. Также на кафедре существует множество секций. Ученики кафедры успешно выступают на многих спортивных мероприятиях.');
INSERT INTO chair(id_chair, [name]) VALUES(5,'кафедра информатики и вычислительной математики');
INSERT INTO chair(id_chair, [name]) VALUES(6,'кафедра дискретной математики');
INSERT INTO chair(id_chair, [name]) VALUES(7,'кафедра философии');
INSERT INTO chair(id_chair, [name]) VALUES(8,'кафедра общей химии');
INSERT INTO chair(id_chair, [name]) VALUES(9,'кафедра теоритической механики');
INSERT INTO chair(id_chair, [name]) VALUES(10,'кафедра радиотехники и телекомуникаций');
INSERT INTO chair(id_chair, [name]) VALUES(11,'кафедра математических основ управления');

INSERT INTO adress VALUES(1,'Долгопрудный', 'Институтский переулок', 9);
INSERT INTO adress VALUES(2,'Долгопрудный', 'Первомайская', 5);
INSERT INTO adress VALUES(3,'Долгопрудный', 'Первомайская', 3);
INSERT INTO adress VALUES(4,'Долгопрудный', 'Московские шоссе', 21);
INSERT INTO adress VALUES(5,'Долгопрудный', 'Научный переулок', 4);

INSERT INTO building VALUES(11, 1, 'ГК', 'Главный корпус');
INSERT INTO building VALUES(12, 2, 'НК', 'Новый корпус');
INSERT INTO building VALUES(13, 3, 'КПМ', 'Корпус прикладной математики');
INSERT INTO building VALUES(14, 4, 'СК', 'Спортивный комплекс');
INSERT INTO building VALUES(15, 5, 'УЛК1', 'Физтех.Цифра');

INSERT INTO classroom VALUES(221, 521, 11);
INSERT INTO classroom VALUES(222, 516, 11);
INSERT INTO classroom VALUES(223, 422, 11);
INSERT INTO classroom VALUES(224, 412, 11);
INSERT INTO classroom VALUES(225, 239, 12);
INSERT INTO classroom VALUES(226, 318, 12);
INSERT INTO classroom VALUES(227, 320, 12);
INSERT INTO classroom VALUES(228, 315, 12);
INSERT INTO classroom VALUES(229, 115, 13);
INSERT INTO classroom VALUES(230, 110, 13);
INSERT INTO classroom VALUES(231, 805, 13);
INSERT INTO classroom VALUES(232, 715, 13);
INSERT INTO classroom VALUES(233, 801, 13);
INSERT INTO classroom VALUES(234, 1, 14);
INSERT INTO classroom VALUES(235, 2, 14);
INSERT INTO classroom VALUES(236, 415, 15);
INSERT INTO classroom VALUES(237, 423, 15);

INSERT INTO duty VALUES(1, 'обязательное посещение всех занятий');
INSERT INTO duty VALUES(2, 'обязательное посещение семинаров, необязательное посещение лекций');
INSERT INTO duty VALUES(3, 'достаточно сходить на 25 занятий в семестре');
INSERT INTO duty VALUES(4, 'необязательное посещение');

INSERT INTO day_of_week VALUES(1, 'понедельник');
INSERT INTO day_of_week VALUES(2, 'вторник');
INSERT INTO day_of_week VALUES(3, 'среда');
INSERT INTO day_of_week VALUES(4, 'четверг');
INSERT INTO day_of_week VALUES(5, 'пятница');
INSERT INTO day_of_week VALUES(6, 'суббота');

INSERT INTO date_class VALUES(1, 5, '2020-09-02');
INSERT INTO date_class VALUES(2, 6, '2020-09-03');
INSERT INTO date_class VALUES(3, 2, '2020-09-06');
INSERT INTO date_class VALUES(4, 1, '2020-09-12');
INSERT INTO date_class VALUES(5, 4, '2020-09-15');
INSERT INTO date_class VALUES(6, 3, '2020-09-21');
INSERT INTO date_class VALUES(7, 6, '2020-09-24');
INSERT INTO date_class VALUES(8, 3, '2020-09-28');
INSERT INTO date_class VALUES(9, 1, '2020-10-03');
INSERT INTO date_class VALUES(10, 5, '2020-10-07');
INSERT INTO date_class VALUES(11, 4, '2020-10-13');
INSERT INTO date_class VALUES(12, 1, '2020-10-17');
INSERT INTO date_class VALUES(13, 6, '2020-10-22');
INSERT INTO date_class VALUES(14, 1, '2020-10-31');
INSERT INTO date_class VALUES(15, 5, '2020-11-11');
INSERT INTO date_class VALUES(16, 2, '2020-11-15');
INSERT INTO date_class VALUES(17, 6, '2020-11-19');
INSERT INTO date_class VALUES(18, 3, '2020-11-23');
INSERT INTO date_class VALUES(19, 4, '2020-12-01');
INSERT INTO date_class VALUES(20, 1, '2020-12-05');
INSERT INTO date_class VALUES(21, 3, '2020-12-07');
INSERT INTO date_class VALUES(22, 1, '2020-12-12');
INSERT INTO date_class VALUES(23, 4, '2020-12-15');
INSERT INTO date_class VALUES(25, 5, '2020-12-16');
INSERT INTO date_class VALUES(26, 3, '2021-02-08');
INSERT INTO date_class VALUES(27, 5, '2021-02-10');
INSERT INTO date_class VALUES(28, 4, '2021-02-16');
INSERT INTO date_class VALUES(29, 6, '2021-02-18');
INSERT INTO date_class VALUES(30, 5, '2021-02-24');
INSERT INTO date_class VALUES(31, 2, '2021-02-28');
INSERT INTO date_class VALUES(32, 4, '2021-03-02');
INSERT INTO date_class VALUES(33, 6, '2021-03-04');
INSERT INTO date_class VALUES(34, 2, '2021-03-07');
INSERT INTO date_class VALUES(35, 6, '2021-03-11');
INSERT INTO date_class VALUES(36, 4, '2021-03-16');
INSERT INTO date_class VALUES(37, 3, '2021-03-22');
INSERT INTO date_class VALUES(38, 6, '2021-03-25');
INSERT INTO date_class VALUES(39, 2, '2021-03-28');
INSERT INTO date_class VALUES(40, 5, '2021-03-31');

INSERT INTO subject VALUES(1, 'математический анализ', 2, 3, 8, 1);
INSERT INTO subject VALUES(2, 'аналитическая геометрия', 2, 3, 4, 1);
INSERT INTO subject VALUES(3, 'линейная алгебра', 2, 3, 4, 1);
INSERT INTO subject VALUES(4, 'функциональный анализ', 1, 3, 4, 1);
INSERT INTO subject VALUES(5, 'общая физика', 2, 3, 6, 2);
INSERT INTO subject VALUES(6, 'лабораторный практикум по общей физике', 1, 1, 4, 2);
INSERT INTO subject VALUES(7, 'английский язык', 1, 1, 4, 3);
INSERT INTO subject VALUES(8, 'физическая культура', 3, 2, 4, 4);
INSERT INTO subject VALUES(9, 'программирование', 2, 1, 6, 5);
INSERT INTO subject VALUES(10, 'теория вероятностей', 2, 3, 4, 6);
INSERT INTO subject VALUES(11, 'радиотехника', 2, 1, 4, 10);
INSERT INTO subject VALUES(12, 'химия', 2, 1, 4, 8);
INSERT INTO subject VALUES(13, 'теория и реализация языков программирования', 2, 3, 4, 11);
INSERT INTO subject VALUES(14, 'аналитическая механика', 2, 3, 4, 9);
INSERT INTO subject VALUES(15, 'математическая логика', 2, 1, 4, 6);

INSERT INTO groups VALUES(1905, 1, 2019, 5, 'бакалавриат');
INSERT INTO groups VALUES(1903, 1, 2019, 3, 'бакалавриат');
INSERT INTO groups VALUES(1006, 1, 2020, 6, 'бакалавриат');
INSERT INTO groups VALUES(1007, 1, 2020, 7, 'бакалавриат');
INSERT INTO groups VALUES(1803, 1, 2018, 3, 'бакалавриат');
INSERT INTO groups VALUES(1705, 1, 2017, 5, 'бакалавриат');
INSERT INTO groups VALUES(1608, 1, 2016, 8, 'магистратура');
INSERT INTO groups VALUES(1601, 1, 2016, 1, 'магистратура');
INSERT INTO groups VALUES(1809, 1, 2018, 9, 'специалитет');
INSERT INTO groups VALUES(2906, 2, 2019, 6, 'бакалавриат');
INSERT INTO groups VALUES(2903, 2, 2019, 3, 'бакалавриат');
INSERT INTO groups VALUES(2006, 2, 2020, 6, 'бакалавриат');
INSERT INTO groups VALUES(2007, 2, 2020, 7, 'бакалавриат');
INSERT INTO groups VALUES(2803, 2, 2018, 3, 'бакалавриат');
INSERT INTO groups VALUES(2705, 2, 2017, 5, 'бакалавриат');
INSERT INTO groups VALUES(2602, 2, 2016, 2, 'магистратура');
INSERT INTO groups VALUES(2601, 2, 2016, 1, 'магистратура');
INSERT INTO groups VALUES(2501, 2, 2015, 1, 'магистратура');
INSERT INTO groups VALUES(2406, 2, 2014, 6, 'аспирантура');
INSERT INTO groups VALUES(2203, 2, 2012, 3, 'аспирантура');
INSERT INTO groups VALUES(2101, 2, 2011, 1, 'аспирантура');
INSERT INTO groups VALUES(3007, 3, 2020, 7, 'бакалавриат');
INSERT INTO groups VALUES(3803, 3, 2018, 3, 'бакалавриат');
INSERT INTO groups VALUES(3705, 3, 2017, 5, 'бакалавриат');
INSERT INTO groups VALUES(3602, 3, 2016, 2, 'бакалавриат');
INSERT INTO groups VALUES(3601, 3, 2016, 1, 'бакалавриат');
INSERT INTO groups VALUES(3501, 3, 2015, 1, 'магистратура');
INSERT INTO groups VALUES(3706, 3, 2017, 6, 'специалитет');
INSERT INTO groups VALUES(3503, 3, 2015, 3, 'спациалитет');
INSERT INTO groups VALUES(3201, 3, 2012, 1, 'аспирантура');
INSERT INTO groups VALUES(4906, 4, 2019, 6, 'бакалавриат');
INSERT INTO groups VALUES(4903, 4, 2019, 3, 'бакалавриат');
INSERT INTO groups VALUES(4006, 4, 2020, 6, 'бакалавриат');
INSERT INTO groups VALUES(4007, 4, 2020, 7, 'бакалавриат');
INSERT INTO groups VALUES(4803, 4, 2018, 3, 'бакалавриат');
INSERT INTO groups VALUES(4702, 4, 2017, 2, 'бакалавриат');
INSERT INTO groups VALUES(4602, 4, 2016, 2, 'магистратура');
INSERT INTO groups VALUES(4601, 4, 2016, 1, 'магистратура');
INSERT INTO groups VALUES(4508, 4, 2015, 8, 'магистратура');
INSERT INTO groups VALUES(4901, 4, 2019, 1, 'специалитет');
INSERT INTO groups VALUES(4203, 4, 2012, 3, 'аспирантура');
INSERT INTO groups VALUES(4101, 4, 2011, 1, 'аспирантура');
INSERT INTO groups VALUES(5906, 5, 2019, 6, 'бакалавриат');
INSERT INTO groups VALUES(5903, 5, 2019, 3, 'бакалавриат');
INSERT INTO groups VALUES(5006, 5, 2020, 6, 'бакалавриат');
INSERT INTO groups VALUES(5007, 5, 2020, 7, 'бакалавриат');
INSERT INTO groups VALUES(5803, 5, 2018, 3, 'бакалавриат');
INSERT INTO groups VALUES(5705, 5, 2017, 5, 'бакалавриат');
INSERT INTO groups VALUES(5702, 2, 2017, 2, 'бакалавриат');
INSERT INTO groups VALUES(5602, 5, 2016, 2, 'магистратура');
INSERT INTO groups VALUES(5601, 5, 2016, 1, 'магистратура');
INSERT INTO groups VALUES(5501, 5, 2015, 1, 'магистратура');
INSERT INTO groups VALUES(5406, 5, 2014, 6, 'аспирантура');
INSERT INTO groups VALUES(5203, 5, 2012, 3, 'аспирантура');
INSERT INTO groups VALUES(5101, 5, 2011, 1, 'аспирантура');
INSERT INTO groups VALUES(6006, 6, 2020, 6, 'бакалавриат');
INSERT INTO groups VALUES(6007, 6, 2020, 7, 'бакалавриат');
INSERT INTO groups VALUES(6803, 6, 2018, 3, 'бакалавриат');
INSERT INTO groups VALUES(6705, 6, 2017, 5, 'бакалавриат');
INSERT INTO groups VALUES(6608, 6, 2016, 8, 'магистратура');
INSERT INTO groups VALUES(6601, 6, 2016, 1, 'магистратура');
INSERT INTO groups VALUES(6809, 6, 2018, 9, 'специалитет');
INSERT INTO groups VALUES(7007, 7, 2020, 7, 'бакалавриат');
INSERT INTO groups VALUES(7803, 7, 2018, 3, 'бакалавриат');
INSERT INTO groups VALUES(7705, 7, 2017, 5, 'бакалавриат');
INSERT INTO groups VALUES(7608, 7, 2016, 8, 'магистратура');
INSERT INTO groups VALUES(7607, 7, 2015, 7, 'магистратура');

INSERT INTO class VALUES(1, 1, 221, 'семинар', 1, 10);
INSERT INTO class VALUES(2, 1, 221, 'семинар', 1, 30);
INSERT INTO class VALUES(3, 1, 221, 'семинар', 4, 40);
INSERT INTO class VALUES(4, 1, 222, 'семинар', 6, 20);
INSERT INTO class VALUES(5, 1, 223, 'семинар', 7, 10);
INSERT INTO class VALUES(6, 1, 223, 'семинар', 8, 60);
INSERT INTO class VALUES(7, 1, 223, 'семинар', 11, 10);
INSERT INTO class VALUES(8, 1, 223, 'семинар', 12, 30);
INSERT INTO class VALUES(9, 1, 224, 'семинар', 16, 10);
INSERT INTO class VALUES(10, 1, 224, 'семинар', 17, 60);
INSERT INTO class VALUES(11, 1, 221, 'семинар', 20, 20);
INSERT INTO class VALUES(12, 1, 221, 'семинар', 21, 50);
INSERT INTO class VALUES(13, 1, 222, 'семинар', 28, 60);
INSERT INTO class VALUES(14, 1, 236, 'семинар', 33, 30);
INSERT INTO class VALUES(15, 1, 236, 'семинар', 37, 10);
INSERT INTO class VALUES(16, 1, 237, 'семинар', 39, 20);
INSERT INTO class VALUES(17, 1, 225, 'лекция', 5, 20);
INSERT INTO class VALUES(18, 1, 225, 'лекция', 7, 50);
INSERT INTO class VALUES(19, 1, 229, 'лекция', 16, 70);
INSERT INTO class VALUES(20, 1, 229, 'лекция', 23, 10);
INSERT INTO class VALUES(21, 1, 229, 'лекция', 35, 20);
INSERT INTO class VALUES(22, 2, 224, 'семинар', 1, 10);
INSERT INTO class VALUES(23, 2, 223, 'семинар', 6, 70);
INSERT INTO class VALUES(24, 2, 222, 'семинар', 15, 30);
INSERT INTO class VALUES(25, 2, 223, 'семинар', 17, 10);
INSERT INTO class VALUES(26, 2, 221, 'семинар', 31, 10);
INSERT INTO class VALUES(27, 2, 229, 'лекция', 27, 40);
INSERT INTO class VALUES(28, 2, 225, 'лекция', 7, 10);
INSERT INTO class VALUES(29, 3, 221, 'семинар', 5, 10);
INSERT INTO class VALUES(30, 3, 223, 'семинар', 7, 60);
INSERT INTO class VALUES(31, 3, 223, 'семинар', 21, 30);
INSERT INTO class VALUES(32, 3, 221, 'семинар', 22, 10);
INSERT INTO class VALUES(33, 3, 222, 'семинар', 31, 70);
INSERT INTO class VALUES(34, 3, 229, 'лекция', 18, 10);
INSERT INTO class VALUES(35, 3, 225, 'лекция', 40, 20);
INSERT INTO class VALUES(36, 4, 221, 'семинар', 2, 10);
INSERT INTO class VALUES(37, 4, 224, 'семинар', 3, 60);
INSERT INTO class VALUES(38, 4, 223, 'семинар', 26, 30);
INSERT INTO class VALUES(39, 4, 224, 'семинар', 29, 10);
INSERT INTO class VALUES(40, 4, 222, 'семинар', 38, 70);
INSERT INTO class VALUES(41, 4, 225, 'лекция', 18, 10);
INSERT INTO class VALUES(42, 4, 229, 'лекция', 40, 20);
INSERT INTO class VALUES(43, 5, 224, 'семинар', 1, 10);
INSERT INTO class VALUES(44, 5, 224, 'семинар', 8, 70);
INSERT INTO class VALUES(45, 5, 221, 'семинар', 3, 10);
INSERT INTO class VALUES(46, 5, 222, 'семинар', 10, 20);
INSERT INTO class VALUES(47, 5, 221, 'семинар', 11, 30);
INSERT INTO class VALUES(48, 5, 223, 'семинар', 12, 50);
INSERT INTO class VALUES(49, 5, 223, 'семинар', 13, 10);
INSERT INTO class VALUES(50, 5, 223, 'семинар', 18, 30);
INSERT INTO class VALUES(51, 5, 222, 'семинар', 20, 40);
INSERT INTO class VALUES(52, 5, 224, 'семинар', 21, 10);
INSERT INTO class VALUES(53, 5, 221, 'семинар', 22, 20);
INSERT INTO class VALUES(54, 5, 221, 'семинар', 26, 20);
INSERT INTO class VALUES(55, 5, 222, 'семинар', 29, 60);
INSERT INTO class VALUES(56, 5, 236, 'семинар', 32, 30);
INSERT INTO class VALUES(57, 5, 236, 'семинар', 37, 50);
INSERT INTO class VALUES(58, 5, 237, 'семинар', 39, 70);
INSERT INTO class VALUES(59, 5, 229, 'лекция', 6, 20);
INSERT INTO class VALUES(60, 5, 225, 'лекция', 7, 50);
INSERT INTO class VALUES(61, 5, 229, 'лекция', 15, 40);
INSERT INTO class VALUES(62, 5, 225, 'лекция', 28, 20);
INSERT INTO class VALUES(63, 5, 229, 'лекция', 36, 10);
INSERT INTO class VALUES(64, 6, 221, 'лабораторные работы', 4, 10);
INSERT INTO class VALUES(65, 6, 222, 'лабораторные работы', 8, 20);
INSERT INTO class VALUES(66, 6, 222, 'лабораторные работы', 9, 30);
INSERT INTO class VALUES(67, 6, 222, 'лабораторные работы', 19, 70);
INSERT INTO class VALUES(68, 6, 223, 'лабораторные работы', 22, 70);
INSERT INTO class VALUES(69, 6, 224, 'лабораторные работы', 28, 50);
INSERT INTO class VALUES(70, 6, 224, 'лабораторные работы', 30, 20);
INSERT INTO class VALUES(71, 7, 225, 'семинар', 2, 10);
INSERT INTO class VALUES(72, 7, 225, 'семинар', 10, 70);
INSERT INTO class VALUES(73, 7, 226, 'семинар', 11, 30);
INSERT INTO class VALUES(74, 7, 226, 'семинар', 19, 10);
INSERT INTO class VALUES(75, 7, 227, 'семинар', 20, 10);
INSERT INTO class VALUES(76, 7, 228, 'семинар', 27, 10);
INSERT INTO class VALUES(77, 7, 228, 'семинар', 38, 10);
INSERT INTO class VALUES(78, 8, 234, 'семинар', 2, 10);
INSERT INTO class VALUES(79, 8, 234, 'семинар', 10, 70);
INSERT INTO class VALUES(80, 8, 234, 'семинар', 11, 30);
INSERT INTO class VALUES(81, 8, 234, 'семинар', 19, 10);
INSERT INTO class VALUES(82, 8, 235, 'семинар', 20, 10);
INSERT INTO class VALUES(83, 8, 235, 'семинар', 27, 10);
INSERT INTO class VALUES(84, 8, 235, 'семинар', 38, 10);
INSERT INTO class VALUES(85, 9, 221, 'семинар', 3, 10);
INSERT INTO class VALUES(86, 9, 221, 'семинар', 6, 30);
INSERT INTO class VALUES(87, 9, 221, 'семинар', 8, 40);
INSERT INTO class VALUES(88, 9, 222, 'семинар', 10, 10);
INSERT INTO class VALUES(89, 9, 223, 'семинар', 35, 10);
INSERT INTO class VALUES(90, 9, 223, 'семинар', 40, 60);
INSERT INTO class VALUES(91, 9, 223, 'семинар', 28, 10);
INSERT INTO class VALUES(92, 9, 223, 'семинар', 12, 30);
INSERT INTO class VALUES(93, 9, 224, 'семинар', 16, 10);
INSERT INTO class VALUES(94, 9, 224, 'семинар', 17, 70);
INSERT INTO class VALUES(95, 9, 221, 'семинар', 20, 20);
INSERT INTO class VALUES(96, 9, 225, 'лекция', 2, 20);
INSERT INTO class VALUES(97, 9, 229, 'лекция', 11, 20);
INSERT INTO class VALUES(98, 9, 229, 'лекция', 30, 70);
INSERT INTO class VALUES(99, 10, 221, 'семинар', 6, 10);
INSERT INTO class VALUES(100, 10, 224, 'семинар', 7, 40);
INSERT INTO class VALUES(101, 10, 223, 'семинар', 11, 30);
INSERT INTO class VALUES(102, 10, 224, 'семинар', 26, 60);
INSERT INTO class VALUES(103, 10, 222, 'семинар', 38, 30);
INSERT INTO class VALUES(104, 10, 225, 'лекция', 8, 10);
INSERT INTO class VALUES(105, 10, 229, 'лекция', 39, 20);
INSERT INTO class VALUES(106, 11, 221, 'лабораторные работы', 1, 10);
INSERT INTO class VALUES(107, 11, 224, 'лабораторные работы', 7, 10);
INSERT INTO class VALUES(108, 11, 221, 'лабораторные работы', 16, 70);
INSERT INTO class VALUES(109, 11, 223, 'лабораторные работы', 23, 60);
INSERT INTO class VALUES(110, 11, 222, 'лабораторные работы', 37, 10);
INSERT INTO class VALUES(111, 11, 225, 'лекция', 10, 70);
INSERT INTO class VALUES(112, 11, 229, 'лекция', 35, 50);
INSERT INTO class VALUES(113, 12, 221, 'семинар', 6, 30);
INSERT INTO class VALUES(115, 12, 224, 'семинар', 11, 40);
INSERT INTO class VALUES(116, 12, 221, 'семинар', 27, 50);
INSERT INTO class VALUES(117, 12, 224, 'семинар', 32, 60);
INSERT INTO class VALUES(118, 12, 225, 'лекция', 19, 70);
INSERT INTO class VALUES(119, 12, 229, 'лекция', 34, 50);
INSERT INTO class VALUES(120, 13, 222, 'семинар', 2, 10);
INSERT INTO class VALUES(121, 13, 224, 'семинар', 8, 40);
INSERT INTO class VALUES(122, 13, 223, 'семинар', 13, 30);
INSERT INTO class VALUES(123, 13, 221, 'семинар', 26, 20);
INSERT INTO class VALUES(124, 13, 222, 'семинар', 35, 50);
INSERT INTO class VALUES(125, 13, 225, 'лекция', 9, 70);
INSERT INTO class VALUES(126, 13, 229, 'лекция', 29, 20);
INSERT INTO class VALUES(127, 14, 222, 'семинар', 5, 10);
INSERT INTO class VALUES(128, 14, 224, 'семинар', 8, 40);
INSERT INTO class VALUES(129, 14, 223, 'семинар', 18, 10);
INSERT INTO class VALUES(130, 14, 221, 'семинар', 26, 20);
INSERT INTO class VALUES(131, 14, 222, 'семинар', 38, 50);
INSERT INTO class VALUES(132, 14, 229, 'лекция', 11, 70);
INSERT INTO class VALUES(133, 14, 225, 'лекция', 30, 20);
INSERT INTO class VALUES(134, 15, 222, 'семинар', 2, 10);
INSERT INTO class VALUES(135, 15, 224, 'семинар', 7, 70);
INSERT INTO class VALUES(136, 15, 223, 'семинар', 19, 10);
INSERT INTO class VALUES(137, 15, 221, 'семинар', 29, 30);
INSERT INTO class VALUES(138, 15, 222, 'семинар', 36, 50);
INSERT INTO class VALUES(139, 15, 229, 'лекция', 1, 50);
INSERT INTO class VALUES(140, 15, 225, 'лекция', 40, 20);

INSERT INTO class_groups VALUES(1, 1905);
INSERT INTO class_groups VALUES(2, 1903);
INSERT INTO class_groups VALUES(3, 3601);
INSERT INTO class_groups VALUES(8, 4602);
INSERT INTO class_groups VALUES(9, 5906);
INSERT INTO class_groups VALUES(10, 4508);
INSERT INTO class_groups VALUES(11, 2906);
INSERT INTO class_groups VALUES(17, 1905);
INSERT INTO class_groups VALUES(17, 2903);
INSERT INTO class_groups VALUES(17, 3007);
INSERT INTO class_groups VALUES(17, 4007);
INSERT INTO class_groups VALUES(18, 2101);
INSERT INTO class_groups VALUES(18, 4803);
INSERT INTO class_groups VALUES(19, 4702);
INSERT INTO class_groups VALUES(19, 5803);
INSERT INTO class_groups VALUES(20, 5702);
INSERT INTO class_groups VALUES(21, 5203);
INSERT INTO class_groups VALUES(22, 6006);
INSERT INTO class_groups VALUES(23, 7608);
INSERT INTO class_groups VALUES(24, 5705);
INSERT INTO class_groups VALUES(25, 5501);
INSERT INTO class_groups VALUES(26, 6007);
INSERT INTO class_groups VALUES(27, 7803);
INSERT INTO class_groups VALUES(28, 4903);
INSERT INTO class_groups VALUES(29, 4702);
INSERT INTO class_groups VALUES(30, 1803);
INSERT INTO class_groups VALUES(31, 1809);
INSERT INTO class_groups VALUES(32, 2602);
INSERT INTO class_groups VALUES(32, 3706);
INSERT INTO class_groups VALUES(32, 4007);
INSERT INTO class_groups VALUES(33, 4906);
INSERT INTO class_groups VALUES(34, 5906);
INSERT INTO class_groups VALUES(34, 5702);
INSERT INTO class_groups VALUES(35, 6705);
INSERT INTO class_groups VALUES(36, 7705);
INSERT INTO class_groups VALUES(37, 7607);
INSERT INTO class_groups VALUES(40, 4006);
INSERT INTO class_groups VALUES(42, 4602);
INSERT INTO class_groups VALUES(43, 1905);
INSERT INTO class_groups VALUES(44, 4508);
INSERT INTO class_groups VALUES(45, 4903);
INSERT INTO class_groups VALUES(46, 3503);
INSERT INTO class_groups VALUES(48, 4803);
INSERT INTO class_groups VALUES(50, 2906);
INSERT INTO class_groups VALUES(51, 2007);
INSERT INTO class_groups VALUES(52, 4602);
INSERT INTO class_groups VALUES(53, 1803);
INSERT INTO class_groups VALUES(54, 1905);
INSERT INTO class_groups VALUES(59, 2906);
INSERT INTO class_groups VALUES(59, 2101);
INSERT INTO class_groups VALUES(59, 3503);
INSERT INTO class_groups VALUES(59, 4007);
INSERT INTO class_groups VALUES(70, 3601);
INSERT INTO class_groups VALUES(71, 1903);
INSERT INTO class_groups VALUES(75, 7607);
INSERT INTO class_groups VALUES(76, 6803);
INSERT INTO class_groups VALUES(83, 5705);
INSERT INTO class_groups VALUES(83, 5906);
INSERT INTO class_groups VALUES(83, 5501);
INSERT INTO class_groups VALUES(84, 4803);
INSERT INTO class_groups VALUES(85, 6803);
INSERT INTO class_groups VALUES(86, 1905);
INSERT INTO class_groups VALUES(96, 7705);
INSERT INTO class_groups VALUES(96, 3503);
INSERT INTO class_groups VALUES(97, 3201);
INSERT INTO class_groups VALUES(98, 1705);
INSERT INTO class_groups VALUES(99, 4901);
INSERT INTO class_groups VALUES(99, 5906);
INSERT INTO class_groups VALUES(99, 3501);
INSERT INTO class_groups VALUES(100, 3706);
INSERT INTO class_groups VALUES(105, 2705);
INSERT INTO class_groups VALUES(107, 1705);
INSERT INTO class_groups VALUES(108, 3007);
INSERT INTO class_groups VALUES(109, 3201);
INSERT INTO class_groups VALUES(120, 1809);
INSERT INTO class_groups VALUES(121, 2906);
INSERT INTO class_groups VALUES(126, 1905);
INSERT INTO class_groups VALUES(128, 5406);
INSERT INTO class_groups VALUES(128, 6608);
INSERT INTO class_groups VALUES(130, 4803);
INSERT INTO class_groups VALUES(131, 6705);
INSERT INTO class_groups VALUES(134, 2601);
INSERT INTO class_groups VALUES(135, 4906);
INSERT INTO class_groups VALUES(138, 2601);
INSERT INTO class_groups VALUES(139, 1803);
INSERT INTO class_groups VALUES(139, 3007);

INSERT INTO class_lecturer VALUES(1, 100);
INSERT INTO class_lecturer VALUES(2, 101);
INSERT INTO class_lecturer VALUES(3, 106);
INSERT INTO class_lecturer VALUES(8, 105);
INSERT INTO class_lecturer VALUES(9, 105);
INSERT INTO class_lecturer VALUES(10, 129);
INSERT INTO class_lecturer VALUES(11, 120);
INSERT INTO class_lecturer VALUES(17, 116);
INSERT INTO class_lecturer VALUES(89, 119);
INSERT INTO class_lecturer VALUES(113, 102);
INSERT INTO class_lecturer VALUES(126, 103);
INSERT INTO class_lecturer VALUES(18, 104);
INSERT INTO class_lecturer VALUES(18, 107);
INSERT INTO class_lecturer VALUES(19, 107);
INSERT INTO class_lecturer VALUES(19, 108);
INSERT INTO class_lecturer VALUES(20, 109);
INSERT INTO class_lecturer VALUES(21, 110);
INSERT INTO class_lecturer VALUES(22, 111);
INSERT INTO class_lecturer VALUES(23, 112);
INSERT INTO class_lecturer VALUES(24, 113);
INSERT INTO class_lecturer VALUES(25, 114);
INSERT INTO class_lecturer VALUES(26, 115);
INSERT INTO class_lecturer VALUES(27, 117);
INSERT INTO class_lecturer VALUES(28, 117);
INSERT INTO class_lecturer VALUES(29, 118);
INSERT INTO class_lecturer VALUES(30, 121);
INSERT INTO class_lecturer VALUES(31, 122);
INSERT INTO class_lecturer VALUES(32, 123);
INSERT INTO class_lecturer VALUES(32, 124);
INSERT INTO class_lecturer VALUES(32, 125);
INSERT INTO class_lecturer VALUES(33, 126);
INSERT INTO class_lecturer VALUES(34, 127);
INSERT INTO class_lecturer VALUES(34, 128);
INSERT INTO class_lecturer VALUES(35, 128);
INSERT INTO class_lecturer VALUES(36, 112);
INSERT INTO class_lecturer VALUES(37, 107);
INSERT INTO class_lecturer VALUES(40, 118);
INSERT INTO class_lecturer VALUES(42, 129);
INSERT INTO class_lecturer VALUES(53, 115);
INSERT INTO class_lecturer VALUES(59, 113);
INSERT INTO class_lecturer VALUES(62, 101);
INSERT INTO class_lecturer VALUES(83, 100);
INSERT INTO class_lecturer VALUES(91, 121);
INSERT INTO class_lecturer VALUES(95, 108);
INSERT INTO class_lecturer VALUES(97, 104);
INSERT INTO class_lecturer VALUES(100, 128);
INSERT INTO class_lecturer VALUES(103, 115);
INSERT INTO class_lecturer VALUES(111, 118);
INSERT INTO class_lecturer VALUES(115, 119);
INSERT INTO class_lecturer VALUES(118, 123);
INSERT INTO class_lecturer VALUES(120, 127);
INSERT INTO class_lecturer VALUES(139, 129);


