# 🔐 [acmcyber.com](https://www.acmcyber.com)

![Cyber Banner](.github/overview.png)
ACM Cyber at UCLA is a student-run organization dedicated to providing a community for students interested in cybersecurity. Our mission is to **make cybersecurity simple and accessible for everyone**. We run talks, projects, and other events to help students learn about cybersecurity and get involved in the field!

This repository contains the source code for the ACM Cyber website. To see the deployed site, visit [https://www.acmcyber.com](https://www.acmcyber.com). Our website is built with [Next.js](https://nextjs.org/) with TypeScript. We use [ESlint](https://eslint.org/) to format our code.

## Development Setup
First, clone the repo and install all of the dependencies.

```bash
$ git clone https://github.com/uclaacm/acmcyber.com.git
...
$ cd acmcyber.com
$ pnpm install
```

If you're working in VSCode, make sure to accept the popup about detecting a new Typescript interpreter - this makes Typescript typechecking play nice with Yarn's compressed packages! If you've forgotten to do this and are now facing a wall of red squiggles, just go to any Typescript file (`.tsx`), press `Ctrl+Shift+P` / `Shift+Cmd+P`, select `Typescript: Select Typescript Version...`, and then select `Use Workspace Version`.

Run the following commands to start the server:

```bash
$ pnpm build
info  - Skipping linting
info  - Checking validity of types  
info  - Creating an optimized production build  
info  - Compiled successfully
info  - Collecting page data  
info  - Generating static pages (10/10)
info  - Finalizing page optimization  

Route (pages)                              Size     First Load JS
┌ ○ /                                      2.07 kB        84.8 kB
├   └ css/575511c26610617a.css             1.89 kB
├   /_app                                  0 B              80 kB
├ ○ /404                                   292 B          80.3 kB
├ ○ /about                                 2.75 kB        85.5 kB
├   └ css/a95bc8f420742c7f.css             1.01 kB
├ ○ /archive                               7.27 kB          90 kB
├   └ css/d4cfda439db41911.css             1.67 kB
├ ● /blog                                  1.3 kB           84 kB
├   └ css/0903ab32172a106b.css             655 B
├ ● /blog/[id]                             295 kB          378 kB
├   └ css/e0c8031a9929d20b.css             385 B
├   └ /blog/2023-08-26-first-blog-post
├ ○ /events                                3.12 kB        85.8 kB
├   └ css/8400603fe2453045.css             1.17 kB
├ ○ /join                                  1.51 kB        84.2 kB
├   └ css/6867542ce5caec5d.css             80 B
└ ○ /members                               1.65 kB        84.4 kB
    └ css/463f897afb401664.css             254 B
+ First Load JS shared by all              82.3 kB
  ├ chunks/framework-b50af9103b08e6c1.js   45.2 kB
  ├ chunks/main-c0ea5944f62bba8f.js        27.1 kB
  ├ chunks/pages/_app-98253681a83e9df1.js  6.93 kB
  ├ chunks/webpack-aba54e30b0a5a6aa.js     770 B
  └ css/e2dc2960cd165b00.css               2.3 kB

○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps

$ pnpm start

> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

To run the website in development mode, run the following command:

```bash
$ pnpm run dev

> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
> event - compiled client and server successfully in 359 ms (198 modules)
```

You should now be able to view the website at http://localhost:3000.

### Migrating from yarn to pnpm

If you used yarn before, you will need to remove the old Yarn PnP artifacts.

```bash
# Remove Yarn PnP artifacts
rm .pnp.cjs .pnp.loader.mjs
rm -rf .yarn

# Clean and reinstall with pnpm
rm -rf node_modules
pnpm install
```

## Acknowledgements
Special thanks to Andrew Kuai & Michelle Zhao for helping to fully design the current version of the ACM Cyber website! Thanks to Andrew Kuai, Michelle Zhao, Ronak Badhe, Benson Liu, and the rest of the ACM Cyber team for being part of the core team to develop the site content and implementation! If there are any bugs or content problems, please open up an issue or pull request on GitHub. To contact the maintainers of this project, please reach out to [uclacyber@gmail.com](mailto:uclacyber@gmail.com) or join our [Discord](https://discord.gg/j9dgf2q).
