<a href="https://techtoday.azurewebsites.net"><p align="center">
<img height=90 src="https://raw.githubusercontent.com/bharadwajduggaraju/TechToday/master/TechToday.svg"/>

</p></a>
<p align="center">
  <strong>The source for Tech News and Jobs, Configured for You.</strong>
</p>
<p align="center">
  <a href="https://github.com/bharadwajduggaraju/TechToday/stargazers">
    <img src="https://img.shields.io/github/stars/bharadwajduggaraju/TechToday?style=for-the-badge" alt="stars" />
  </a>
  <a href="https://github.com/bharadwajduggaraju/TechToday/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/bharadwajduggaraju/TechToday?style=for-the-badge" alt="license" />
  </a>
</p>

<h3 align="center">
  <a href="https://techtoday.azurewebsites.net" target="blank" rel="noreferer">Website</a>
  <span> · </span>
  <a href="https://expo.io/@bharadwajd/projects/TechToday">App</a>
  <span> · </span>
  <a href="https://github.com/FotieMConstant/dogehouse-docs">Desktop (In Progress)</a>
</h3>

---

## Codebase

| Folder               |      Technologies    | Description    |
| :------------------- | :-------------------: |  :-------------------:   |
| [app](app)           |      React Native     | The Mobile App of TechToday   |
| [client](client)     |     React      |   The Website Client to TechToday
| [config](config)     | Mongoose, Dotenv | Connections to the DB and Secrets  |
| [designs](designs)   |  Figma    | Designs of TechToday    |
| [models](models)     |   Mongoose    | Schema of DB Entities    |
| [routes](routes)     |   ExpressJS    | API Routes    |
| [utils](utils)       |      Nodemailer       | Utility Functions    |
| [validation](validation)|      JOI , JWT      | The Validations for DB Entities and JWT's |


## About

#### TechToday was Created by Bharadwaj Duggaraju as a Side Project: It is a  Hub for News and Jobs, in a clean UI.

## Attributions & Sources

#### TechToday is dependent on two different API's besides its own primary API's. Data from these API's are fetched using 'node-fetch'
1. NYTimes News Feed API: A great source for getting up to date news in many categories
2. Adzuna Job Search API: An easy way to get jobs in many fields

## Running Locally on Your Machine 

### App

1. Clone the App Folder
2. Install node modules with ``` npm install ```
3. Run ```npm start``` to start Expo
4. Download the Expo App and Run it on your phone OR Run on web

### Website
1. Clone the Website Folder
2. Install node modules with ```npm install```
3. Run ```npm start``` to start the Site (Must also run the sever (below) for this to work)

### Server

1. Clone the Server Folder
2. Install node modules with  ```npm install```
3. Create an .env file in the config folder and Add: 
```env
DB_URI=MongoDBURI
TOKEN_SECRET=fillwithtokensecret
RESET_EMAIL=anemailforforgotpassword
RESET_PASSWORD=aresetpassword
NODE_ENV=development
NEWS_API_KEY=Nytimesnewsapi
JOBS_APPLICATION_KEY=adzunaapplicationkey
JOBS_API_KEY=adzunaapikey

```
## Issues

Leave an Issue in the [Issues](https://github.com/bharadwajduggaraju/techtoday/issues) tab

## License

MIT License.
