module.exports = {
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Introducción',
      content: 'src/docs/introduction.md'
    },
    {
      name: "Componentes",
      components: 'src/components/**/[A-Z]*.js'
    }
  ]
};