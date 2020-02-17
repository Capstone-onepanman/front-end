# 


![version](https://img.shields.io/badge/version-1.0.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/vuetify-material-dashboard.svg)](https://github.com/creativetimofficial/vuetify-material-dashboard/issues?q=is%3Aopen+is%3Aissue) [![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/creativetimofficial/vuetify-material-dashboard.svg?maxAge=259200)](https://github.com/creativetimofficial/vuetify-material-dashboard/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim/material-dashboard) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

## Getting Started
- Install Nodejs from [Nodejs Official Page](https://nodejs.org/en/)
- Open your terminal
- Navigate to the project
- Run `npm install` or `yarn install` if you use [Yarn](https://yarnpkg.com/en/)
- Run `npm run dev` or `yarn serve` to start a local development server
- A new tab will be opened in your browser

You can also run additional npm tasks such as
- `npm run build` to build your app for production
- `npm run lint` to run linting.

## Vuetify
Vuetify is developed exactly according to Material Design spec. Every component is hand crafted to bring you the best possible UI tools to your next great app. The development doesn't stop at the core components outlined in Google's spec. Through the support of community members and sponsors, additional components will be designed and made available for everyone to enjoy.


## Vuex

Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official [devtools](https://github.com/vuejs/vue-devtools) extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.

## Vue-cli

We used the latest 3.x [Vue CLI](https://github.com/vuejs/vue-cli) which aims to reduce project configuration
to as little as possible. Almost everything is inside `package.json` + some other related files such as
`.babel.config.js`, `.eslintrc.js` and `.postcssrc.js`.

Let us know what you think and what we can improve below. And good luck with development!


#### Special thanks
During the development of this dashboard, we have used many existing resources from awesome developers. We want to thank them for providing their tools open source:
- [Vuetify](https://vuetifyjs.com/en/) for the wonderful framework


Let us know your thoughts below. And good luck with development!

## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Versions



[<img src="https://pbs.twimg.com/profile_images/900908683927982080/GWykKJ7r_400x400.jpg" width="60" height="60" />](https://www.creative-tim.com/product/vuetify-material-dashboard)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/html.png" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard-pro)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/react.svg" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard-pro-react)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/vuejs.png" width="60" height="60" />](https://www.creative-tim.com/product/vue-material-dashboard-pro)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/angular.png" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard-pro-angular2)

Vuetify | Vue | React | Angular | HTML |
| --- | --- | --- | --- | --- |
|


## File Structure

Within the download you'll find the following directories and files:

```
vuetify-material-dashboard
├── README.md
├── babel.config.js
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   ├── components
│   │   ├── core
│   │   │   ├── Drawer.vue
│   │   │   ├── Filter.vue
│   │   │   ├── Footer.vue
│   │   │   ├── Toolbar.vue
│   │   │   └── View.vue
│   │   ├── helper
│   │   │   └── Offset.vue
│   │   ├── index.js
│   │   └── material
│   │       ├── Card.vue
│   │       ├── ChartCard.vue
│   │       ├── Notification.vue
│   │       └── StatsCard.vue
│   ├── i18n
│   │   └── index.js
│   ├── lang
│   │   ├── en
│   │   │   ├── Common.json
│   │   │   ├── Core
│   │   │   │   ├── Footer.json
│   │   │   │   └── Toolbar.json
│   │   │   └── Home.json
│   │   └── index.js
│   ├── main.js
│   ├── plugins
│   │   ├── axios.js
│   │   ├── chartist.js
│   │   ├── index.js
│   │   ├── theme.js
│   │   └── vuetify.js
│   ├── router
│   │   ├── index.js
│   │   └── paths.js
│   ├── store
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── index.js
│   │   ├── modules
│   │   │   ├── app
│   │   │   │   ├── mutations.js
│   │   │   │   └── state.js
│   │   │   └── index.js
│   │   ├── mutations.js
│   │   └── state.js
│   ├── styles
│   │   ├── index.scss
│   │   └── material-dashboard
│   ├── utils
│   │   └── vuex.js
│   └── views
│       ├── Dashboard.vue
│       ├── Icons.vue
│       ├── Maps.vue
│       ├── Notifications.vue
│       ├── TableList.vue
│       ├── Typography.vue
│       ├── Upgrade.vue
│       └── UserProfile.vue
├── vue.config.js
└── yarn.lock
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">


## Resources
- [Live Preview](https://demos.creative-tim.com/vuetify-material-dashboard)
- Download Page: https://www.creative-tim.com/product/vuetify-material-dashboard
- Documentation is [here](https://demos.creative-tim.com/vuetify-material-dashboard/documentation)
- License Agreement: https://www.creative-tim.com/license
- Support: https://www.creative-tim.com/contact-us
- Issues: [Github Issues Page](https://github.com/creativetimofficial/vuetify-material-dashboard/issues)
- Vue Material Dashboard - [demo](https://www.creative-tim.com/product/vue-material-dashboard?ref=github-md-pro)
- For Front End Development - [Material Kit Pro ](https://www.creative-tim.com/product/material-kit-pro?ref=github-md-pro)

# front-end
