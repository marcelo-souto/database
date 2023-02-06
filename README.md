## 💻 Games Database
# Modelagem e banco de dados

- No atual desafio para desenvolver um **banco de dados** sobre **jogos**, foram desenvolvidos modelos **conceitual**, **lógico** e o próprio **banco** no MySQL utilizando o [MySQL Workbench](https://dev.mysql.com/doc/) para esse processo.

#### modelo lógico:

![modelo lógico](https://user-images.githubusercontent.com/112868025/216825386-09ba5625-a788-4e63-8f30-1ec72c313821.png)


#### modelo conceitual:

![modelo conceitual](https://user-images.githubusercontent.com/112868025/216838915-632fe802-4924-4508-b3c5-3c01a1a8e14f.png)

Perguntas sobre as pesquisas realizadas no banco de dados:

1. Quais são os 10 jogos bem mais avaliados pelo o meta?
Código realizado para a consulta: SELECT g.name as jogo, g.meta_score, p.name as plataforma, c.name as empresa FROM games g inner join platforms p on g.platform_id = p.platform_id inner join company c on c.company_id = p.company_id order by g.meta_score desc limit 10!
![10 jogos bem mais avaliados pelo o meta](https://user-images.githubusercontent.com/112870328/216965880-c7f60611-804e-494d-ab56-8ecda8a87c01.png)



2. Quais são os 10 jogos bem mais avaliados pelo o usuário?
Código utilizado para a consulta: SELECT g.name as jogo, g.user_review, p.name as plataforma, c.name as empresa FROM games g inner join platforms p on g.platform_id = p.platform_id inner join company c on c.company_id = p.company_id order by g.user_review desc limit 10
![10 jogos bem mais avaliados pelo o usuário](https://user-images.githubusercontent.com/112870328/216965925-dfae9bc0-4646-4869-8749-82d88eb8323b.png)



3. Os 10 melhores jogos do ano de 1996 (em ordem decrescente):
Código utilizado para a consulta: 
SELECT g.name, g.release_year, g.user_review FROM games g where g.release_year = 1996 order BY g.user_review DESC
![10 melhores jogos do ano de 1996](https://user-images.githubusercontent.com/112870328/216965962-2bc6f1d6-720f-496a-b4de-c7aa6f62bfd4.png)
