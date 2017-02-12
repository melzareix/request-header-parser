# Header Parser Microservice
```
User stories:
1) User Story: I can get the IP address, language and operating system for my browser.
```

### Example usage:

```
https://request-header-parserz.herokuapp.com/api/v1/whoami
```

### Example output:

```
{
    "ipaddress": "123.52.20.176",
    "language": "en-US",
    "software": "Macintosh; Intel Mac OS X 10_11_0"
}
```

# How to install
 - Install NodeJS and NPM
 
  [https://docs.npmjs.com/getting-started/installing-node](https://docs.npmjs.com/getting-started/installing-node)
  
- Clone the project

  ```
  git clone https://github.com/melzareix/request-header-parser.git request-header-parser
  ```
- Install Dependencies

  ```
  cd request-header-parser
  npm install
  ```
- Run the project

  ```
    npm start
  ```
