<p align="center">
  <a href="https://https://github.com/WillianBL99/valex-api">
    <img src="https://user-images.githubusercontent.com/65803142/178611095-2f5e8fbd-a23a-4ac8-8591-fffdf221f6e9.png" alt="readme-logo" width="180" >
  </a>

  <h3 align="center">
    Tamplate
  </h3>
</p>

## Usage

```bash
$ git clone https://https://github.com/WillianBL99/repository

$ cd valex-api

$ npm install

$ npm run dev
```

## API:
---
## Entites 
- [card](#credit_card-card) 


## :credit_card: Card
### POST /card/create
```
  - route to create a card
  - header: {'x-api-key': '$somekey'}
  - body: { 
      type: 'groceries' | 'restaurants' | 'transport' | 'education' | 'health',
      cpf: '$00011122233'
    }
  - status: 201
  - response data: 
```  
```json
    {}
```

[:outbox_tray:](#----valex-api--)

---
Desenvolvido por **Paulo Uilian Barros Lago**😊🧑🏻‍💻
