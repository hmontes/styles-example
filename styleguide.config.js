module.exports = {
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Introducción',
      content: 'docs/introduction.md'
    },
    {
      name: "Componentes",
      components: 'src/components/**/[A-Z]*.js'
    }
  ]
};