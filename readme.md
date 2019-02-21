Repo for testing webpack config settings on a very simple project

from website https://webpack.js.org/guides/asset-management/

// todo:
0. why isn't minification working? Probably something to do with babel. Do tutorial. Use example of it working here https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/
1. turn webpack config file into typescript
2. learn babel config, how to use typescript with babel-loader instead of ts-loader. What does .babelrc do?
3. What does modernizr-loader and post-css loader do?
4. how does SSR work?
5. how to get CSS modules working?
6. are node_modules libraries exported as already polyfilled?

Notes / things learned:
1. Tree shaking only works when minification happens
2. This branch is setup to show the output so you can test different options. Webpack-dev-server stores the files in a temp folder which you can't view. In real life, you would use webpackDevServer.
3. Can use (browserList)[https://www.npmjs.com/package/browserslist] npm package to specify what environments you want to target in one place
4. You don't need ts-loader for webpack, babel can do it and is more configurable
5. PostCss is a webpack css loader that can do things like auto-prefix css values so that they work in non-supported browsers
5. We're now using babel-plugin-lodash to cherry pick the lodash modules we want, and we have moved the babel config to be inside the webpackConfig.ts file
