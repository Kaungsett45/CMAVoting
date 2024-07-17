use Voting;

create table Votetoken (id int primary key,token varchar(300);)
create table participant (id int primary key,image varchar(300),name varchar(300),year varchar(200),category varchar(200),vote int);

alter table participant modify vote int default 0;

/*eg
insert into participant (image,name,year,category) values ("https://i.pinimg.com/564x/06/22/c7/0622c7b35454a3916004f7f3b56e52ad.jpg","YAoe yabn","3rd year" , "Queen");


insert into Votetoken  (votetoken) values ("pgJwCRIBva");
*/
select * from Votetoken;
select * from participant;

