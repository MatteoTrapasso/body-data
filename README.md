# body-data
app created to calculate and monitor the corporeal parameters, in particular the BMI

app link: 
```
https://body-data.herokuapp.com/body-data
```

# the project consists of:
- NGRX
- auth0 authentication
- nestjs api connected to a mongodb database 
- PrimeNG Theme Designer


# to start:

- ###Nestjs api

  - clone repository body-data-crud:
    ```
    https://github.com/MatteoTrapasso/body-data-crud
    ```
- ###AUTH0

  - register to auth0.com
  
  - follow the first part of this tutorial to create your auth0 application
    ```
    https://github.com/jucasoft/corso-angular-ngrx/blob/main/AUTH0.md
    ```
  - replace the parameters related to auth0 with those of the application you created

- ###MongoDB

  - register to:
    ```    
    https://account.mongodb.com/account/login
    ```
- create a DB
  - replace the parameters related to MongoDB in 'src/app.module.ts' with those of the DB you created


# run:

body-data-crud:
```
npm install

build

start:dev
```

body-data:
```
npm install

build

start:dev
```
