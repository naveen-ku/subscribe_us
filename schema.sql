CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    ceated_at TIMESTAMP DEFAULT NOW()
);
insert into users( email) values
('katie24@yahoo.com'), ('tsunade50@gmail.com');