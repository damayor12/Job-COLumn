module.exports = function (wallaby) {
  return {
    files: ['src/**/*.ts', 'src/**/*.tsx'],

    tests: ['src/**/*Spec.ts', 'src/**/*test.ts', 'src/**/*test.tsx'],

    // for node.js tests you need to set env property as well
    // https://wallabyjs.com/docs/integration/node.html
  };
};
