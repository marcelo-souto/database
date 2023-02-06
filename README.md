# 👨‍💻 Games Database
## Modelagem e banco de dados

<p>
  Projeto acadêmico de modelagem, construção e manipulação de um banco de dados em mySQL sobre jogos, junto com um website de apresentação interativo desenvolvido utilizando ReactJS
</p>

## :bar_chart: Modelo Conceitual:
<img src="https://user-images.githubusercontent.com/112868025/216838915-632fe802-4924-4508-b3c5-3c01a1a8e14f.png"/>

## :bar_chart: Modelo Lógico:
<img src="https://user-images.githubusercontent.com/112868025/216825386-09ba5625-a788-4e63-8f30-1ec72c313821.png" />

## :mag_right: Perguntas

<ol>
      <li>
        <p>Quais são os 10 jogos bem mais avaliados pelo o meta?</p>
        <p>Código realizado para a consulta:</p>
        <p>
          SELECT g.name as jogo, g.meta_score, p.name as plataforma, c.name as
          empresa FROM games g inner join platforms p on g.platform_id =
          p.platform_id inner join company c on c.company_id = p.company_id
          order by g.meta_score desc limit 10
        </p>
        <img src="https://user-images.githubusercontent.com/112870328/216965880-c7f60611-804e-494d-ab56-8ecda8a87c01.png" alt="">
        <p>Para visualizar os gráficos gerados pelas pesquisas, acesse este <a href="https://database-website-9mg3cu99e-marcelo-souto.vercel.app/">link</a></p>
      </li>
      <li>
        <p>Quais são os 10 jogos bem mais avaliados pelo o usuário?</p>
        <p>Código utilizado para a consulta:</p>
        <p>
          SELECT g.name as jogo, g.user_review, p.name as plataforma, c.name as
          empresa FROM games g inner join platforms p on g.platform_id =
          p.platform_id inner join company c on c.company_id = p.company_id
          order by g.user_review desc limit 10
        </p>
        <img src="https://user-images.githubusercontent.com/112870328/216965925-dfae9bc0-4646-4869-8749-82d88eb8323b.png" alt="">
        <p>Para visualizar os gráficos gerados pelas pesquisas, acesse este <a href="https://database-website-9mg3cu99e-marcelo-souto.vercel.app/">link</a></p>
      </li>
      <li>
        <p>Os 10 melhores jogos do ano de 1996</p>
        <p>Código utilizado para a consulta:</p>
        <p>
          SELECT g.name, g.release_year, g.user_review FROM games g where
          g.release_year = 1996 order BY g.user_review DESC
        </p>
        <img src="https://user-images.githubusercontent.com/112870328/216965962-2bc6f1d6-720f-496a-b4de-c7aa6f62bfd4.png" alt="">
        <p>Para visualizar os gráficos gerados pelas pesquisas, acesse este <a href="https://database-website-9mg3cu99e-marcelo-souto.vercel.app/">link</a></p>
      </li>
    </ol>
    
## :computer: Website de Apresentação

<p>Para visualizar as consultas ao banco e os dados criamos um website interativo para acompanhá-las.</p>
<a target="_blank" href="https://database-website-9mg3cu99e-marcelo-souto.vercel.app/"><img src="https://user-images.githubusercontent.com/100978478/217090211-14725dbe-819c-43c0-8e83-4ea636d110f3.svg" /></a>
<p>Para acessar o site, <a target="_blank" href="https://database-website-9mg3cu99e-marcelo-souto.vercel.app/">Clique aqui</a>.</p>

## 🙋‍♂️ Equipe
- <a href="https://github.com/marcelo-souto">@marcelo-souto</a>
- <a href="https://github.com/Matheus-Valviesse">@Matheus-Valviesse</a>
- <a href="https://github.com/yasmincr">@yasmincr</a>
- <a href="https://github.com/miihhernandez">@miihhernandez</a>
                           
## :wrench: Tecnologias e Ferramentas
<ul>
  <li>
  Banco de dados foi desenvolvido utlizando <a href="https://dev.mysql.com/doc/">MySQL Workbench</a> e <a href="https://www.phpmyadmin.net/docs/">PHPMyAdmin</a>
  </li>
  <li>
    Os dados do banco foram retirados do site <a href="https://www.kaggle.com/">Kaggle</a> e o banco utilizado pode ser encontrado neste <a href="https://www.kaggle.com/datasets/deepcontractor/top-video-games-19952021-metacritic">link</a>.
  </li>
  <li>
    A modelagem e o modelo conceitual foi feita utlizando <a href="https://www.diagrams.net/">Diagrams</a>.
  </li>
   <li>
     A página de apresentação do banco foi desenvolvida utilizando <a href="https://vitejs.dev/">Vite</a> e o framework <a href="https://reactjs.org/">ReactJS</a>.
  </li>
   <li>
     As informações do banco foram convertidas de CSV para JSON utlizando o website <a href="https://csvjson.com/">CSV to JSON</a>.
  </li>
   <li>
     A api foi criada utlizando a ferramenta <a href="https://github.com/typicode/json-server">Json Server</a> e foi hospedada no <a href="https://render.com/">Render</a>.
  </li>
   <li>
     Os gráficos contidos ao decorrer do website foram desenvolvidos utlizando a biblioteca <a href="https://www.chartjs.org/">Chart JS</a>.
  </li>
  <li>
    O componente de input utilizado na quarta seção do website vem da biblioteca <a href="https://react-select.com/home">react-select</a>.
  </li>
  <li>
    O projeto de ReactJS foi hospedado utilizando <a href="https://vercel.com/">Vercel</a>.
  </li>
<ul>

  



