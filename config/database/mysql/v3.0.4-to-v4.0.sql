CREATE TABLE IMAGE (
  id         INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name       VARCHAR(255) CHARACTER SET utf8 NOT NULL,
  user_id    INTEGER NOT NULL,
  extension  VARCHAR(5) NULL,
  FOREIGN KEY (mindmap_id) REFERENCES MINDMAP (id)
)
  CHARACTER SET utf8;