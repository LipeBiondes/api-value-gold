# <img src="https://img.shields.io/badge/API-Gold--Value-blue?style=for-the-badge&logo=node.js&logoColor=white" alt="API Gold Value"> api-value-gold

Welcome to the **API that fetches the current gold value** from the page [dolarhoje.com/ouro-hoje](https://dolarhoje.com/ouro-hoje/) and makes it available on the `GET` route `/gold/value`.

---

## 🌟 Description

This application is a simple API that leverages **web scraping** techniques to extract the **current gold value** from a trusted source and makes this information available through an easy-to-use **GET route**.

---

## 📥 Installation

To install the project dependencies, run the following command:

```bash
npm install
```

---

## 🚀 Usage

### Start the application:

```bash
npm start
```

### Start in development mode:

```bash
npm run dev
```

---

## 📦 Dependencies

- **axios**: ^1.7.7
- **cheerio**: ^1.0.0
- **cors**: ^2.8.5
- **express**: ^4.21.1

## 🛠 Dev Dependencies

- **dotenv**: ^16.4.5

---

## 🔗 API Route

### `GET /gold/value`

This route returns the **current value of gold** in **Brazilian Reais (R$)**. The response is a **JSON** object with a message and the extracted value.

#### Example Response:

```json
{
  "message": "O valor da grama do ouro hoje é R$ 300.00",
  "value": "300.00"
}
```

---

## 📝 `getValueOfGold` Function

The `getValueOfGold` function uses the **cheerio** library to scrape the page [dolarhoje.com/ouro-hoje](https://dolarhoje.com/ouro-hoje/), extract the current gold value, and return it in a simple format.

---

## 📜 License

This project is licensed under the **MIT License**. For more details, check the [LICENSE](LICENSE) file.

---

## 👨‍💻 Author

**Alefe**  
[LinkedIn](https://www.linkedin.com/in/alefe-filipe-biondes-magalh%C3%A3es-6591b8173/)

---

## 🌍 Hosting

This API is hosted at the following addresses:

- [Production](https://api-value-gold-production.up.railway.app/)
- [Render](https://api-value-gold.onrender.com/)

---

## 🛠️ How it Works

1. **The User makes a request to `/gold/value`.**
2. **The API scrapes the gold value** from [dolarhoje.com](https://dolarhoje.com/ouro-hoje/) using **cheerio**.
3. **The API responds with the current value of the gold** in Brazilian Reais (R$).

---

### 🚧 Contributing

Feel free to fork the repository, submit issues, and pull requests. If you want to contribute to this project, please follow these simple steps:

1. Fork the repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add your feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

---

## 💬 Support

If you need any help or want to discuss the project, feel free to open an issue or reach out to the author directly.

---
