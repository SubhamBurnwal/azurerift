# Azure Rift - React Documentation

## Introduction

Azure Rift is a clean Responsive React template designed for IT companies and next-generation tech startups. It is suitable for individuals and companies with startup business initiatives, IT solutions, online marketing services, future startup businesses, mobile apps, software, web apps, SaaS products, and any other business agencies.

## Setup Development Environment

To kickstart the development of the web app with Azure Rift, you need to set up the React development environment.

### Required Tools

- **Node.js**: Node.js works as a node package manager behind the scenes. It is recommended to download and install the latest version from [Node.js official site](http://nodejs.org/).

### Preparation

1. Install Node.js (Recommended Version) which includes NPM.
2. Install the `serve` package using npm.

### Setup Process

1. Open a terminal (PowerShell on Windows or Terminal on macOS/Linux) and navigate to the project root directory.
2. Run the following command to install dependencies:

    ```sh
    npm install
    ```

3. Start the development server with:

    ```sh
    npm run dev
    ```

   You should see output similar to:

    ```
    > project@2.2.0 dev drive:\project
    > next

    [ wait ] started server on http://localhost:3000
    [ event ] compiled successfully
    [ event ] build pages: /
    [ wait ] compiling
    [ event ] compiled successfully
    ```

4. Open your browser and go to `http://localhost:3000`.

### For Production Build

1. Run the following command to create a production build:

    ```sh
    npm run build
    ```

2. Start the production server with:

    ```sh
    npm run start
    ```

   See the official [Next.js documentation](https://nextjs.org/docs) for more details.

## Pages and Components Info

### Pages

- **Default Home Page**: `/pages/index.js`
- **Home Page Two**: `/pages/index-2.js`
- **Home Page Three**: `/pages/index-3.js`
- **Home Page Four**: `/pages/index-4.js`
- **Home Page Five**: `/pages/index-5.js`
- **About Page One**: `/pages/about.js`
- **About Page Two**: `/pages/about-2.js`
- **Services Page One**: `/pages/services.js`
- **Services Page Two**: `/pages/services/style-2.js`
- **Services Page Three**: `/pages/services/style-3.js`
- **Services Page Four**: `/pages/services/style-4.js`
- **Service Details Page**: `/pages/services/service-details.js`
- **Team Page**: `/pages/team.js`
- **Pricing Page**: `/pages/pricing.js`
- **Testimonials Page**: `/pages/testimonials.js`
- **Sign up Page**: `/pages/auth/sign-up.js`
- **Login Page**: `/pages/auth/login.js`
- **FAQ Page**: `/pages/faq.js`
- **Coming Soon Page**: `/pages/coming-soon.js`
- **Contact Page One**: `/pages/contact.js`
- **Contact Page Two**: `/pages/contact-2.js`
- **Error Page**: `/pages/error.js`
- **News Page One**: `/pages/news/index.js`
- **News Page Two**: `/pages/news/news-right-sidebar.js`
- **News Details Page**: `/pages/news/news-details.js`
- **Privacy Policy Page**: `/pages/privacy-policy.js`
- **Terms & Conditions Page**: `/pages/terms-conditions.js`
- **Etc...**

### Common Components

- **Navbar Default**: `/components/Layouts/Navbar.js`
- **Footer**: `/components/Layouts/Footer.js`
- **GoTop**: `/components/Shared/GoTop.js`
- **Loader**: `/components/Shared/Loader.js`
- **Make Your Business**: `/components/Common/MakeYourBusiness.js`
- **News**: `/components/Common/News.js`
- **Newsletter**: `/components/Common/Newsletter.js`
- **Page Banner**: `/components/Common/PageBanner.js`
- **Partner**: `/components/Common/Partner.js`
- **Pricing Plan**: `/components/Common/PricingPlan.js`
- **Service**: `/components/Common/Service.js`
- **Team Style One**: `/components/Common/TeamStyleOne.js`
- **Team Style Two**: `/components/Common/TeamStyleTwo.js`
- **Testimonials Style One**: `/components/Common/TestimonialsStyleOne.js`
- **Testimonials Style Two**: `/components/Common/TestimonialsStyleTwo.js`
- **Other Components**: etc...

## Dependencies

When you install npm packages, dependencies will automatically be added to the `node_modules` directory.

To install a new dependency, use the following commands:

```sh
npm install package_name --save
npm install package_name --save-dev

```

Change Default Home Page
To change the default home page of the Azure Rift template:

Go to the /pages directory.
Replace the content of index.js with the content of any other home page file.
Fonts
The following fonts are used in the Azure Rift template:

Raleway
Lato
These fonts are imported from Google Fonts CDN. To change them, modify the link tags inside the <head> section of the HTML files.

Global Style
To globally change the color scheme, fonts, or any other styles in the Azure Rift template:

Modify the _variables.scss file inside the /assets/scss directory.

Define or change variables to your preferred styles. For example, to change the primary color:

'''scss
$primary-color: #455aa2; ```
Similarly, you can modify other styles like secondary color, text color, etc.

### Run SCSS File
Azure Rift uses SCSS for styling. To compile SCSS files into CSS:

Open the terminal and navigate to the /assets/scss directory.

Run the command:

'''sh

npm run scss ```

The compiled CSS files will be generated inside the /assets/css directory.

###Credits
Below is a list of resources and libraries used in the Azure Rift template:

- React JS
- Next JS
- Bootstrap
- jQuery
- SASS
- Font Awesome
- vbnet

Feel free to copy and paste this into your `README.md` file. If you need further adjustments or

