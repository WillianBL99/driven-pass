<p align="center">
  <a href="https://https://github.com/WillianBL99/driven-pass">
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
  - [Authentication](#authentication)
  - [Credentials](#credentials)
  - [Secure notes](#secure-notes)
  - [Cards](#cards)
  - [Wifis](#wifis)
- [Automátic test](#automatic-test)
- [Used status code](#used-status-code)

## Usage
### There are two possible ways to use this API. The first is to consume the api through the url: [`https://driven-pass.herokuapp.com/`](https://driven-pass.herokuapp.com/) and the second is to import the code and put it to run on your machine with the following commands:
```bash
# Install all dependencies
$ git clone https://https://github.com/WillianBL99/driven-pass

$ cd driven-pass

$ npm install

# Perform database migration with prism
$ npx prisma migrate dev

# Start the server
$ npm start
```
### You can still preview the data in the database easily using the command:
```bash
$ npx prisma studio
```

## Routes
---
### [Authentication](#authentication) _`/auth`_
- [Register](#---register)
- [Login](#---login)

### [Credentials](#credentials) _`/credentials`_
- [Create a credential](#---create-a-credential)
- [Search all credentials](#---search-all-credentials)
- [Search a credential](#---search-a-credential)
- [Delete a credential](#---delete-a-credential)


### [Secure notes](#secure-notes) _`/secure-note`_
- [Create a secure note](#---create-a-secure-note)
- [Search all secure notes](#---search-all-secure-notes)
- [Search a secure note](#---search-a-secure-note)
- [Delete a secure note](#---delete-a-secure-note)


### [Cards](#cards) _`/card`_
- [Create a card](#---create-a-card)
- [Search all cards](#---search-all-cards)
- [Search a card](#---search-a-card)
- [Delete a card](#---delete-a-card)


### [Wifis](#wifis) _`/wi-fi`_
- [Create a wi-fi](#---create-a-wifi)
- [Search all wi-fi's](#---search-all-wi-fis)
- [Search a wi-fi](#---search-a-wi-fi)
- [Delete a wi-fi](#---delete-a-wi-fi)

---

## Authentication
### &nbsp; ‣ &nbsp; Register
#### &nbsp; &nbsp; POST _`/sign-up`_

#### &nbsp; Request:
##### &nbsp; &nbsp; Body
```json
{
  "email": "email@gmail.com",
  "password": "1234"
}
```

##### &nbsp; &nbsp; Header
```json

```

#### &nbsp; Response:
```json

```

### &nbsp; ‣ &nbsp; Login
#### &nbsp; &nbsp; POST _`/sign-in`_

#### &nbsp; Request:
##### &nbsp; &nbsp; Body
```json
{
  "email": "email@gmail.com",
  "password": "1234"
}
```

##### &nbsp; &nbsp; Header
```json

```

#### &nbsp; Response:
```json
{
  "token": "jwt token"
}
```


## Credentials
### &nbsp; ‣ &nbsp; Create a credential
#### &nbsp; &nbsp; POST _`/credential`_
#### &nbsp; Request:
##### &nbsp; &nbsp; Body
```json
{
  "label": "My card",
  "userName": "PAULO U LAGO",
  "url": "http://someurl.com",
  "password": "1234"
}
```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json

```

### &nbsp; ‣ &nbsp; Search all credentials
#### &nbsp; &nbsp; GET _`/credential`_
#### &nbsp; Request:
##### &nbsp; &nbsp; Body
```json

```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
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
#### &nbsp; &nbsp; GET _`/credential?id=1`_
#### &nbsp; Request
##### &nbsp; &nbsp; Body
```json

```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
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
#### &nbsp; &nbsp; DELETE _`/credential/:id`_
#### &nbsp; Request:
##### &nbsp; &nbsp; Body
```json

```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
204
```

## Secure notes
### &nbsp; ‣ &nbsp; Create a secure note
#### &nbsp; &nbsp; POST _`/secure-note`_
#### &nbsp; Request:
##### &nbsp; &nbsp; Body
```json
{
  "title": "Boyle baa349754ce2",
  "bodyNote": "Cooper 8838fd663d78 Cooper 8838fd663d78 Cooper 8838fd663d78 Cooper"
}
```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json

```

### &nbsp; ‣ &nbsp; Search all secure-notes
#### &nbsp; &nbsp; GET _`/secure-note`_
#### &nbsp; Request:
##### &nbsp; &nbsp; Body
```json

```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
[
  {
    "id": 2,
    "title": "Boyle baa349754ce2",
    "bodyNote": "Cooper 8838fd663d78 Cooper 8838fd663d78 Cooper 8838fd663d78  Cooper 8838fd663d78",
    "userId": 1
  }
]
```


### &nbsp; ‣ &nbsp; Search a secure-note
#### &nbsp; &nbsp; GET _`/secure-note?id=1`_
#### &nbsp; Request
##### &nbsp; &nbsp; Body
```json

```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
{
  "id": 2,
  "title": "Boyle baa349754ce2",
  "bodyNote": "Cooper 8838fd663d78 Cooper 8838fd663d78 Cooper 8838fd663d78 Cooper 8838fd663d78 Cooper 8838fd663d78",
  "userId": 1
}
```

### &nbsp; ‣ &nbsp; Delete a secure note
#### &nbsp; &nbsp; DELETE _`/secure-note/:id`_
#### &nbsp; Request:
##### &nbsp; &nbsp; Body
```json

```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
204
```

## Cards
### &nbsp; ‣ &nbsp; Create a card
#### &nbsp; &nbsp; POST _`/card`_
#### &nbsp; Request:
##### &nbsp; &nbsp; Body
```json
{
    "number": "9317931793174",
    "holderName": "Joanna B Pinheiro",
    "secureCode": "837",
    "expirationDate": "10/49",
    "isVirtual": true,
    "password": "644850",
    "type": "both",
    "lable": "Boyle baa349754ce2"
  }
```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json

```

### &nbsp; ‣ &nbsp; Search all cards
#### &nbsp; &nbsp; GET _`/card`_
#### &nbsp; Request:
##### &nbsp; &nbsp; Body
```json

```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
[
  {
    "id": 2,
    "number": "9317931793174",
    "holderName": "Joanna B Pinheiro",
    "secureCode": "837",
    "expirationDate": "10/49",
    "isVirtual": true,
    "password": "644850",
    "type": "both",
    "userId": 1,
    "lable": "Boyle baa349754ce2"
  }
]
```

### &nbsp; ‣ &nbsp; Search a card
#### &nbsp; &nbsp; GET _`/card?id=1`_
#### &nbsp; Request
##### &nbsp; &nbsp; Body
```json

```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
{
  "id": 2,
  "number": "9317931793174",
  "holderName": "Joanna B Pinheiro",
  "secureCode": "837",
  "expirationDate": "10/49",
  "isVirtual": true,
  "password": "644850",
  "type": "both",
  "userId": 1,
  "lable": "Boyle baa349754ce2"
}
```

### &nbsp; ‣ &nbsp; Delete a card
#### &nbsp; &nbsp; DELETE _`/card/:id`_
#### &nbsp; Request:
##### &nbsp; &nbsp; Body
```json

```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
204
```

## Wifis
### &nbsp; ‣ &nbsp; Create a wifi
#### &nbsp; &nbsp; POST _`/wi-fi`_
#### &nbsp; Request:
##### &nbsp; &nbsp; Body
```json
{
  "name": "Conn ec76c754426e",
  "password": "233534",
  "lable": "Boyle baa349754ce2"
}
```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json

```

### &nbsp; ‣ &nbsp; Search all wi-fi's
#### &nbsp; &nbsp; GET _`/wi-fi`_
#### &nbsp; Request:
##### &nbsp; &nbsp; Body
```json

```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
[
  {
    "id": 3,
    "name": "Conn ec76c754426e",
    "password": "233534",
    "lable": "Boyle baa349754ce2",
    "userId": 1
  }
]
```

### &nbsp; ‣ &nbsp; Search a wi-fi
#### &nbsp; &nbsp; GET _`/wi-fi?id=1`_
#### &nbsp; Request
##### &nbsp; &nbsp; Body
```json

```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
{
  "id": 3,
  "name": "Conn ec76c754426e",
  "password": "233534",
  "lable": "Boyle baa349754ce2",
  "userId": 1
}
```

### &nbsp; ‣ &nbsp; Delete a wi-fi
#### &nbsp; &nbsp; DELETE _`/wi-fi/:id`_
#### &nbsp; Request:
##### &nbsp; &nbsp; Body
```json

```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
204
```

---

## Automatic test
### This API has a json for automatic testing with [Thunder Client](https://github.com/rangav/thunder-client-support). And for your use, you will need to perform the following steps.
1. Import json file [`thunder-collection_driven-pass.json`](https://github.com/WillianBL99/driven-pass/blob/main/thunder-collection_driven-pass.json) into Thunder Client collection. [Lear to do](https://github.com/rangav/thunder-client-support#how-to-import-collection)
2. Import json file [`thunder-environment_driven-pass.json`](https://github.com/WillianBL99/driven-pass/blob/main/thunder-environment_driven-pass.json) into Thunder Client environment. [Lear to do](https://github.com/rangav/thunder-client-support#import-env)
3. Uncomment `'/test'` endpoint in [`src/routes/index.ts`](https://github.com/WillianBL99/driven-pass/blob/main/src/routes/index.ts) file. 
```javascript
router.post("/test", (req: Request, res: Response) => {
  res.send(req.body);
});
```
4. Create and set the environment variables correctly in the `.env` file. See the example in the `.exempleenv` file.
5. Start the server with the command `npm start` and [run all](https://github.com/rangav/thunder-client-support#keyboard-shortcuts) tests from the collection created in Thunder Client.

---

## Used status code
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

[:outbox_tray:](#table-of-contents)

---

Desenvolvido por **Paulo Uilian Barros Lago**😊🧑🏻‍💻
