# onedrobe

### An essential fashion app that helps user make rational consumption by collecting and comparing all the brands in one place.

##### A full stack app using Node.js, Express.js, React.js, Firebase authentication (demo at the bottom)

![image](https://user-images.githubusercontent.com/59567530/85420309-059e8d00-b541-11ea-96dd-48f651c77d88.png)


01. Overview
The "onedrobe" will guide the users to make a rational consumption by allowing them to search any fashion products from more than 50 brands with just one click. The "onedrobe" not only facilitates online shopping experience, but also assists the offline shopping by searching through other brands in real time.

02. Problem
Now we live in a world where the fashion industry has significant impact, where consumers express themselves through fashion, and where we spend more and more money on fashion products. Since then, shopping has been settled down as a culture of our spending habits.
However, the process of shopping is not always as exciting as we expect. Whether shopping online or offline, we compare a lot of similar products based on our own criteria - price, quality, brand, fashion tastes or user reviews. And we sometimes end up finding similar products at a lower price, but after purchase. Especially during the COVID-19 pandemic lock-down, it takes longer to get into the shops due to the line-up and it exposes ourselves to potential danger.
The idea of “onedrobe” came from this experience. What if we can compare similar products ofvarious brands on one website? What if we know what we want to try-out and save time and money?

03. User Profile
- consumers
    Any consumer shopping for apparels can use this application to search through various products and compare all brands for better decisions. It will help them narrow down to the perfect clothing of their choice. When they search for any type of apparels, the website will provide you with the result of all the relevant categories. In order for the users to access easily, the whole UI should be simple and straightforward, including filtering and sort by features.
- Business Owners (Fashion brands)
    Business owners are also beneficiaries as they can use this application as a marketing platform. If the consumers can compare their products with other brands, it could be a good opportunity to emphasize their strengths.

04. Site Map
![sitemap](https://user-images.githubusercontent.com/59567530/85421254-392de700-b542-11ea-97f8-92eeeaecb36e.png)

05. Functionality
- Front-End
    - Firebase authentication using Google, Facebok, or e-mail address
    - Router for the main header, and nested router for sub-header in 'search' page
    - Using axios GET, list of products, brands and style logs were generated from back-end and displayed on front-end
    - Using component lifecycle and axios POST/DELETE, products/brands can be saved in and deleted from favourites/bookmarks page
    - In '#stylelog' page, users can post the logs as well as comments

- Back-End
    - Various routes for /products, /brands, /logs, /favourites, /bookmarks
    - GET, GET/:id, POST, POST/:id, DELETE

06. Demo

- Sign-in page
![image](https://user-images.githubusercontent.com/59567530/85425740-8fe9ef80-b547-11ea-896a-2e4399c2dd1f.png)

- Main page
![image](https://user-images.githubusercontent.com/59567530/85425824-b0b24500-b547-11ea-8365-949112e61b40.png)

- Main page - Chatbot
![image](https://user-images.githubusercontent.com/59567530/85425937-d2abc780-b547-11ea-9c52-db10c44a4c23.png)

- Search page
![Screenshot from 2020-06-23 11-51-48](https://user-images.githubusercontent.com/59567530/85426114-0981dd80-b548-11ea-8072-4f29036ecb7c.png)

- Search page - product detail
![image](https://user-images.githubusercontent.com/59567530/85426170-1c94ad80-b548-11ea-93ee-cf9e622ae0ba.png)

- Favourites page
![image](https://user-images.githubusercontent.com/59567530/85426244-30401400-b548-11ea-9396-1f1d9b6c835e.png)

- Brands page with brand detail
![image](https://user-images.githubusercontent.com/59567530/85426289-451ca780-b548-11ea-991d-a33c4ff0db64.png)

- Bookmarks page
![image](https://user-images.githubusercontent.com/59567530/85426363-5d8cc200-b548-11ea-96b5-ba9a6f2efc71.png)

- #Stylelog page
![image](https://user-images.githubusercontent.com/59567530/85426403-6c737480-b548-11ea-91d7-86147209b922.png)

- #Stylelog page - post modal
![image](https://user-images.githubusercontent.com/59567530/85426464-7dbc8100-b548-11ea-8ade-d90a4e58b43f.png)

- #Stylelog page - postings detail
![image](https://user-images.githubusercontent.com/59567530/85426579-acd2f280-b548-11ea-9ff9-da3289ffdfb4.png)
