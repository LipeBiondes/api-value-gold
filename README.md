# api-value-gold

API que pega o valor do ouro da página [dolarhoje.com/ouro-hoje](https://dolarhoje.com/ouro-hoje/) e retorna na rota GET `/gold/value`.

## Descrição

Esta aplicação é uma API simples que utiliza web scraping para obter o valor atual do ouro de um site e disponibiliza essa informação através de uma rota GET.

## Instalação

Para instalar as dependências do projeto, execute:

```bash
npm install
```

## Uso

Para iniciar a aplicação, execute:

```bash
npm start
```

## Dependências

- **cors**: ^2.8.5
- **express**: ^4.21.1
- **express-rate-limit**: ^7.4.1
- **puppeteer**: ^23.7.0

## Dev Dependências

- **dotenv**: ^16.4.5

## Rota da API

### GET `/gold/value`

Esta rota retorna o valor atual do ouro em reais (R$). A resposta é um JSON com a mensagem e o valor.

#### Exemplo de Resposta

```json
{
  "message": "O valor da grama do ouro hoje é R$ 300.00",
  "value": "300.00"
}
```

## Função `getValueOfGold`

A função `getValueOfGold` utiliza a biblioteca `puppeteer` para acessar a página [dolarhoje.com/ouro-hoje](https://dolarhoje.com/ouro-hoje/), extrair o valor do ouro e retornar esse valor.

## Informações do robots.txt

O site dolarhoje.com permite o acesso ao seu sitemap e algumas restrições de acesso conforme o arquivo `robots.txt`:

```
Sitemap: https://dolarhoje.com/sitemap.xml

User-agent: *
Disallow: *cotacao.txt$
Disallow: */cotacao.txt$
Disallow: /politica.html
Disallow: /politicas/

# endereços dinamicos
Disallow: */*?*

User-agent: ia_archiver
Disallow: /*
```

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Alefe
