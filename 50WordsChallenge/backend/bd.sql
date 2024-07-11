CREATE TABLE Accounts(
    username varchar(15) PRIMARY KEY,
    passwordHash varchar(200)
);

CREATE TABLE Games(
    idGame integer,
    username varchar(15),
    nbreMots integer,
    dateGame DATE,
    PRIMARY KEY(idGame, username),
    FOREIGN KEY (username) REFERENCES Accounts(username) ON DELETE CASCADE
);

CREATE TABLE Words(
    idGame integer,
    username varchar(15),
    mot varchar(50),
    occurMot integer,
    FOREIGN KEY (idGame) REFERENCES Games(idGame) ON DELETE CASCADE,
    FOREIGN KEY (username) REFERENCES Games(username) ON DELETE CASCADE,
    PRIMARY KEY (idGame, username)
);