import { FetchLibrariesI } from "@/stores/services/types/useGetSearchLibrariesQuery";

export const librariesMock: FetchLibrariesI = {
  results: [
    {
      name: "react",
      latest:
        "https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js",
      filename: "umd/react.production.min.js",
      description:
        "React is a JavaScript library for building user interfaces.",
      version: "18.2.0",
      github: {
        user: "facebook",
        repo: "react",
        stargazers_count: 211883,
        forks: 44445,
        subscribers_count: 6660,
      },
    },
    {
      name: "react-is",
      latest:
        "https://cdnjs.cloudflare.com/ajax/libs/react-is/18.2.0/umd/react-is.production.min.js",
      filename: "umd/react-is.production.min.js",
      description: "Brand checking of React Elements.",
      version: "18.2.0",
      github: {
        user: "facebook",
        repo: "react",
        stargazers_count: 211815,
        forks: 44439,
        subscribers_count: 6662,
      },
    },
    {
      name: "react-dom",
      latest:
        "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js",
      filename: "umd/react-dom.production.min.js",
      description:
        "The entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which is shipped as react to npm.",
      version: "18.2.0",
      github: {
        user: "facebook",
        repo: "react",
        stargazers_count: 211777,
        forks: 44430,
        subscribers_count: 6659,
      },
    },
    {
      name: "vue",
      latest: "https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.cjs.js",
      filename: "vue.cjs.js",
      description:
        "Simple, Fast & Composable MVVM for building interactive interfaces",
      version: "3.3.4",
      github: {
        user: "vuejs",
        repo: "vue",
        stargazers_count: 204634,
        forks: 34186,
        subscribers_count: 5979,
      },
    },
    {
      name: "bootstrap",
      latest:
        "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.1/js/bootstrap.min.js",
      filename: "js/bootstrap.min.js",
      description:
        "The most popular front-end framework for developing responsive, mobile first projects on the web.",
      version: "5.3.1",
      github: {
        user: "twbs",
        repo: "bootstrap",
        stargazers_count: 164800,
        forks: 78716,
        subscribers_count: 6797,
      },
    },
    {
      name: "twitter-bootstrap",
      latest:
        "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.1/js/bootstrap.min.js",
      filename: "js/bootstrap.min.js",
      description:
        "The most popular front-end framework for developing responsive, mobile first projects on the web.",
      version: "5.3.1",
      github: {
        user: "twbs",
        repo: "bootstrap",
        stargazers_count: 164799,
        forks: 78716,
        subscribers_count: 6797,
      },
    },
    {
      name: "create-react-class",
      latest:
        "https://cdnjs.cloudflare.com/ajax/libs/create-react-class/15.7.0/create-react-class.min.js",
      filename: "create-react-class.min.js",
      description: "Legacy API for creating React components.",
      version: "15.7.0",
      github: {
        user: "facebook",
        repo: "react",
        stargazers_count: 157411,
        forks: 31104,
        subscribers_count: 6736,
      },
    },
    {
      name: "d3",
      latest: "https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js",
      filename: "d3.min.js",
      description: "A JavaScript visualization library for HTML and SVG.",
      version: "7.8.5",
      github: {
        user: "d3",
        repo: "d3",
        stargazers_count: 105952,
        forks: 23335,
        subscribers_count: 3691,
      },
    },
    {
      name: "axios",
      latest: "https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js",
      filename: "axios.min.js",
      description: "Promise based HTTP client for the browser and node.js",
      version: "1.4.0",
      github: {
        user: "axios",
        repo: "axios",
        stargazers_count: 101096,
        forks: 10434,
        subscribers_count: 1205,
      },
    },
    {
      name: "three.js",
      latest:
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.155.0/three.min.js",
      filename: "three.min.js",
      description: "JavaScript 3D library",
      version: "0.155.0",
      github: {
        user: "mrdoob",
        repo: "three.js",
        stargazers_count: 93544,
        forks: 34868,
        subscribers_count: 2560,
      },
    },
  ],
  total: 10,
  available: 4457,
};
