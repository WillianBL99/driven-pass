<p align="center">
  <a href="https://https://github.com/WillianBL99/valex-api">
    <img src="https://user-images.githubusercontent.com/65803142/178611095-2f5e8fbd-a23a-4ac8-8591-fffdf221f6e9.png" alt="readme-logo" width="180" >
  </a>

  <h2 align="center">
    DrivenPass
  </h2>
  <h3 align="center">
    An API to manage passwords for documents, websites and the like
  </h3>
</p>
<div align="center">
  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/JWT-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" height="30px"/>
  
</div>

## Table of contents
- [Usage](#usage)
- [Routes](#routes)
  - [Auth](#auth)
  - [Credentials](#auth)
  - [Secure notes](#auth)
  - [Cards](#auth)
  - [Wifis](#auth)
- [Automátic test](#automatic-test)

## Usage

```bash
$ git clone https://https://github.com/WillianBL99/repository

$ cd valex-api

$ npm install

$ npm start
```

## Routes
---
### [Authentication](#authentication) _`/auth`_
- [Register](#---register)
- [Sign In](#---sign-in)

### [Credentials](#credentials) _`/credentials`_
- [Create a credential](#---create-a-credential)
- [Search all credentials](#---search-all-credentials)
- [Search a credential](#---search-a-credential)
- [Delete a credential](#---delete-a-credential)


### [Secure notes](#credentials) _`/secure-note`_
- [Create a secure note](#---create-a-secure note)
- [Search all secure notes](#---search-all-secure notes)
- [Search a secure note](#---search-a-secure note)
- [Delete a secure note](#---delete-a-credential)


### [Cards](#credentials) _`/card`_
- [Create a card](#---create-a-card)
- [Search all cards](#---search-all-cards)
- [Search a card](#---search-a-card)
- [Delete a card](#---delete-a-credential)


### [Wifis](#credentials) _`/wi-fi`_
- [Create a wi-fi](#---create-a-wi-fi)
- [Search all wi-fi's](#---search-all-wi-fi's)
- [Search a wi-fi](#---search-a-wi-fi)
- [Delete a wi-fi](#---delete-a-credential)


## Authentication
### &nbsp; ‣ &nbsp; Register
##### &nbsp; &nbsp; POST _`/sign-up`_

### &nbsp; :page_facing_up: Request
#### &nbsp; &nbsp; Body
```json
{
  "email": "email@gmail.com",
  "password": "1234"
}
```

#### &nbsp; &nbsp; Header
```json

```

### &nbsp; :arrow_down: Response
```json

```

### &nbsp; ‣ &nbsp; Login
##### &nbsp; &nbsp; POST _`/sign-in`_

### &nbsp; :page_facing_up: Request
#### &nbsp; &nbsp; Body
```json
{
  "email": "email@gmail.com",
  "password": "1234"
}
```

#### &nbsp; &nbsp; Header
```json

```

### &nbsp; :arrow_down: Response
```json
{
  "token": "jwt token"
}
```


## Credential
### &nbsp; ‣ &nbsp; Create
##### &nbsp; &nbsp; POST _`/credential`_


### &nbsp; :page_facing_up: Request
#### &nbsp; &nbsp; Body
```json
{
  "label": "My card",
  "userName": "PAULO U LAGO",
  "url": "http://someurl.com",
  "password": "1234"
}
```

#### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```


### &nbsp; ‣ &nbsp; Search all credentials
##### &nbsp; &nbsp; GET _`/credential`_


### &nbsp; :page_facing_up: Request
#### &nbsp; &nbsp; Body
```json

```

#### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

### &nbsp; :arrow_down: Response
```json
[
  {
    "id": 2,
    "label": "Boyle baa349754ce2",
    "url": "https://sites.com/08337082-31ac-4e28-8a9c-b02c1aeb1c15",
    "userName": "Paulo Santos",
    "password": "112919112919",
    "userId": 1
  }
]
```


### &nbsp; ‣ &nbsp; Search a credential
##### &nbsp; &nbsp; GET _`/credential?id=1`_

### &nbsp; :page_facing_up: Request
#### &nbsp; &nbsp; Body
```json

```

#### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

### &nbsp; :arrow_down: Response
```json
{
    "id": 2,
    "label": "Boyle baa349754ce2",
    "url": "https://sites.com/08337082-31ac-4e28-8a9c-b02c1aeb1c15",
    "userName": "Paulo Santos",
    "password": "112919112919",
    "userId": 1
}
```

### &nbsp; ‣ &nbsp; Delete a credential
##### &nbsp; &nbsp; DELETE _`/credential/:id`_

### &nbsp; :page_facing_up: Request
#### &nbsp; &nbsp; Body
```json

```

#### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```


---


### &nbsp; :arrow_down: Response
| Status Code |      Description      |
| :---------: | :-------------------: |
|   **201**   |        Created        |
|   **400**   |    Missing headers    |
|   **401**   |     Missing token     |
|   **403**   |       Forbidden       | 
|   **409**   |       Conflict        |
|   **422**   |     Invalid Input     |
|   **500**   | Internal Server Error |

[:outbox_tray:](#----valex-api--)

---
Desenvolvido por **Paulo Uilian Barros Lago**😊🧑🏻‍💻
