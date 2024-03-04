# 👕 Ignite Store
I developed this project as a challenge of my latest studies on React lessons at [Rocketseat](https://www.rocketseat.com.br).

<br>

<p align="center">
  <img alt="Ignite Store Project Preview" src="https://github.com/rcrdk/ignite-shop/blob/main/public/preview.jpg?raw=true" width="100%" />
</p>

## 🚀 Techs and Tools

- [React](https://reactjs.org) + [Next.JS](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Figma](http://figma.com/)
- [Stitches](https://stitches.dev)
- [React Router](https://reactrouter.com/en/main)
- [Axios](https://axios-http.com/docs/intro) + [Stripe API](https://docs.stripe.com/api)
- [Use Shopping Cart](https://useshoppingcart.com/)

## 💻 Project

This project was developed based on a Figma design provied by the school. The main practice was the integration between this Next.js application and the Stripe API.
The products was added on Stripe platform and it's API was used to retrieve product and manage order checkout. It was used Use Shopping Cart, specific for Stripe data,
for managing states and logic of cart. The project was developed under Next.js framework where were applied static site generation (SSG). serve-side rendering (SSR)
and API Routes for better caching and performance, more readability for SEO and for safety reasons such as procteting secret variables.

**It includes:** A home page listing all available products at Stripe; A product page with details and add to cart function; A cart of
products with controls and a checkout to Stripe; A success page with all order information.

## 🔗 Links

- [Design / Figma](https://www.figma.com/file/ycTCVX4kufunHUHt2mz1tE/Aula-%2B-Desafio---Ignite-Shop-2.0?type=design&mode=design&t=w65MDEg4HrZSfUjC-1)
- [Deploy](https://ignite-shop-rcrdk.vercel.app/)

## ⚙️ Enviroment Variables

```shell
NEXT_URL=<START_URL>
STRIPE_PUBLIC_KEY=<YOUR_KEY>
STRIPE_SECRET_KEY=<YOUR_KEY>
```
