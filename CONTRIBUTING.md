# Como contribuir

1. Fork este projeto - Clique em  `Fork`

2. Crie uma nova branch para realizar suas alterações no repositório - Com o Git instalado, execute o comando abaixo no terminal. - [caso não tenha o Git, baixe aqui](https://git-scm.com/downloads) - 
    ```sh
    git checkout -b nome-da-branch
    ```

3. Inicie o projeto - Com Node instalado, rode o comando abaixo no terminal. - [caso não tenha o Node, baixe aqui](https://nodejs.org/en/) - 
    ```sh
    $ npm start
    ```

4. Adicione uma nova linha no arquivo `mulheres.json` com seus dados, conforme exemplo abaixo:

    ```json
    /* Exemplo de uma palestrante chamada Foo Bar */

    /* Abaixo desse exemplo deixamos dicas para preenchimento dos campos: 
       photo, redes sociais (linkedin, github, twitter, fb) e interests */

    {
      "name": "Foo Bar",
      "interests":
        [
          "UX Design",
          "Web Design",
          "Front-end",
          "Rails"
        ],
      "location": "São Paulo/SP",
      "photo": null,
      "email": "foobar@domain.com",
      "linkedin": "foobarname",
      "github": "foobarname",
      "twitter": "foobarname",
      "fb": "foo.bar"
    }
    ```

    ## Dicas para preenchimento do arquivo `mulheres.json`:

    - **Como adicionar uma foto?**  
      Para adicionar uma photo ao seu card, crie uma conta e faça upload do seu avatar no Gravatar - [acesse o site através desse link](https://en.gravatar.com/) - ou use a sua conta já existente.

    - **Como preencher os campos de redes sociais?**  
      Em *linkedin*, *github*, *twitter* e *fb*, usar apenas o username da url da rede social.
      > Exemplo:
        https://www.facebook.com/foo.bar >> "foo.bar"
        https://br.linkedin.com/in/foob >> "foob"
      
    - **Como preencher o campo "interests"?**  
        Evite adicionar muitas tags nesse campo. Dependendo da quantidade de caracteres cabem até 7 tags no card da página, mas o ideal seria usar *4* no *máximo*.
        ````JSON
          /* Exemplo */
          {
            "interests":
              [
                "UX Design",
                "Web Design",
                "Front-end",
                "Rails"
              ],
          }
        ````

    - **Como preencher os campos que não tenho dados para adicionar?**  
      Caso exista algum campo onde você não tenha um valor real para ser preenchido, ao mesmo pode ser adicionado o valor `null`. Veja o exemplo abaixo de uma palestrante que não possui conta no facebook e twitter:
      ```json
      {
        "twitter": null,
        "fb": null
      }
      ```

5. Commit suas alterações - Execute no terminal: 
    ```sh
    git commit -am 'Add Foo Bar'
    ```

6. Suba suas alterações para o repositório remoto:
    ```sh
    git push origin nome-da-branch
    ```

7. Envie um pull request para o repositório original. Após seu pull request ser aceito, seus dados estarão disponíveis no site 💜 

