--create table DDL (database definition language)
create table greetings(
    id integer PRIMARY KEY AUTOINCREMENT,
    language text,
    greeting text
);

--Database manipulation language (DML)

select * from greetings;

select count(*) from greetings;

insert into greetings (language, greeting) values('zulu', 'sawubona');
insert into greetings (language, greeting) values('xhosa', 'molo');
insert into greetings (language, greeting) values('tsonga', 'abusheni');

