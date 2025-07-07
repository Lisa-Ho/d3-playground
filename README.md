# About this repo

Website made in Svelte hosting data visualisations made with D3 (deployed [here](https://d3-playground.netlify.app/)).

A mix of tutorials and experimental stuff. Site structure and folders a bit of a mess, don't judge too harshly :D

## Collection of resources

### Guides and templates

- [Svelte starter on Github](https://github.com/the-pudding/svelte-starter/tree/main) (Pudding)
- [Svelte starter on Github](https://github.com/higsch/svelte-d3-starter) (Matthias Stahl)
- Connor Rothschild post on [Svelte and D3](https://connorrothschild.github.io/v3/post/svelte-and-d3)
- [Overview of Svelte and D3 projects](https://awesome-svelte-and-d3.netlify.app/projects)
- ([Svelte Charts](https://www.sveltecharts.com/)): Templates for charts in Svelte and D3

### Scrollytelling templates

- svelte-scroller: [Github](https://github.com/sveltejs/svelte-scroller), [Demo](https://svelte.dev/playground/76846b7ae27b3a21becb64ffd6e9d4a6?version=5.34.9)
- svelte-scrolly: [Demo](https://onsvisual.github.io/svelte-scrolly/), [Github](https://github.com/ONSvisual/svelte-scrolly) (ONS)
- Scrollytelling component from Russell Goldenberg: [Starter Kit by Connor](https://www.sveltecharts.com/charts/01e9128d-7056-4de0-bfc2-242328f1aedf), [Demo](https://svelte.dev/playground/3d3736e634c9404ea8ec2ef7b87e2053?version=5.34.9) (also used by Pudding)

### Tutorials

- [Svelte + D3 training](https://www.youtube.com/watch?v=2-Zw_QGTrlU&list=PLNvnDrMLMSipfbxSp1Z4v9Ydu2ud5i9V8&index=1) by Matthias Stahl on YouTube
- [Your first data visualization with Svelte & D3](https://www.youtube.com/watch?v=-THp2YVYEFc) by Connor Rothschild for Newline on YouTube

### Inspiration/Projects

- Spiegel: Nobel Laureates ([Project](https://www.spiegel.de/wissenschaft/zirkel-der-genies-a-90c50289-30ac-4a4b-bc49-348676ce6687), [Code](https://github.com/spiegelgraphics/nobel-laureates/tree/main))
- Jess Voiture for Pudding: Vogue magazine covers ([Project](https://mag-text.vercel.app/), [Code](https://github.com/jessvoiture/mag-text/tree/main))
- Connor Rothschild: Bob Ross Art gallery ([Project](https://connorrothschild.github.io/bob-ross-art-gallery/), [Code](https://github.com/connorrothschild/bob-ross-art-gallery/tree/master))
- Flore Perche: Tour de France ([Project](https://floreperche.github.io/tour-de-france-2024/), [Code](https://github.com/floreperche/tour-de-france-2024/tree/main))
- Taiwan Data Stories ([Code](https://github.com/TaiwanDataStories/streetfood-svelte/tree/main/src/components))


## Sveltekit project setup

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

### Install dependencies

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```
### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
