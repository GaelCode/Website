CREATE TABLE Accounts(
    username varchar2(15) PRIMARY KEY,
    passwordHash varchar2(200)
);

CREATE TABLE Games(
    idGame integer,
    username varchar2(15),
    nbreMots integer,
    dateGame DATE,
    PRIMARY KEY(idGame, username),
    FOREIGN KEY (username) REFERENCES Accounts(username) ON DELETE CASCADE
);

CREATE TABLE Words(
    idGame integer,
    username varchar2(15),
    mot varchar2(50),
    occurMot integer,
    FOREIGN KEY (idGame) REFERENCES Games(idGame) ON DELETE CASCADE,
    FOREIGN KEY (username) REFERENCES Games(username) ON DELETE CASCADE
);