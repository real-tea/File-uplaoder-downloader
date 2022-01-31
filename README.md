To run this application, add your MongoDB connection details in `server/db/db.js` file.

To install MongoDB on your local machine, follow instructions from [here](https://levelup.gitconnected.com/how-to-install-mongodb-database-on-local-environment-19a8a76f1b92?source=friends_link&sk=416b443bad1f86b292e4b72602cf5c9b).

Start your MongoDB server as describe in the article by running `./mongod --dbpath=<path_to_mongodb-data_folder>` command from the terminal.

Open another terminal and execute the following commands in sequence from inside the project folder

```js
1. yarn install
2. cd server
3. yarn install
4. cd ..
5. yarn run start-app
```


## About Multer : 