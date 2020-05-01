set names utf8mb4;
set foreign_key_checks = 0;
create database if not exists node_sec_code;
use node_sec_code;

-- ----------------------------
-- table structure for msgs
-- ----------------------------
drop table if exists `msgs`;
create table `msgs`  (
  `id` int(11) not null auto_increment,
  `content` varchar(255) character set utf8 collate utf8_general_ci null default null,
  `extra` varchar(255) character set utf8 collate utf8_general_ci null default null,
  primary key (`id`) using btree
) engine = innodb auto_increment = 6 character set = utf8 collate = utf8_general_ci row_format = dynamic;

-- ----------------------------
-- records of msgs
-- ----------------------------
insert into `msgs` values (4, 'xssme', null);

-- ----------------------------
-- table structure for users
-- ----------------------------
drop table if exists `users`;
create table `users`  (
  `id` int(10) unsigned not null auto_increment,
  `username` varchar(255) character set utf8 collate utf8_general_ci null default null,
  `password` varchar(255) character set utf8 collate utf8_general_ci null default null,
  `tel` varchar(255) character set utf8 collate utf8_general_ci null default null,
  `idcard` varchar(255) character set utf8 collate utf8_general_ci null default null,
  `bankcard` varchar(255) character set utf8 collate utf8_general_ci null default null,
  primary key (`id`) using btree
) engine = innodb auto_increment = 2 character set = utf8 collate = utf8_general_ci row_format = dynamic;

-- ----------------------------
-- records of users
-- ----------------------------
insert into `users` values (1, 'admin', 'admin', '15242023333', '320102200201012737', '6225801982275058');
insert into `users` values (2, 'anemone', 'anemone', '18914868276', '120104200201018659', '4367426002175742614');

set foreign_key_checks = 1;
