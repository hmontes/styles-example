Gracias a Style Component, es muy facil asignar propiedades a los componentes. Por ejemplo, veamos este botón.

Puedes asignarle colores con la propiedades

```js
<Button.Group>
  <Button orange>Test</Button>
  <Button blue>Test</Button>
  <Button facebook>Test</Button>
  <Button google>Test</Button>
  <Button>Test</Button>
</Button.Group>
```

No es necesario usar mixins o cosas parecidas. Por ejemplo, El codigo de Button.Group es.

```jsx static
const Group = styled.div`
  display: flex;
  justify-content: space-around;
`
```

Y si revisamos el codigo generado en el navegador con el inspector:

```jsx static
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-around;
  -webkit-justify-content: space-around;
  -ms-flex-pack: space-around;
  justify-content: space-around;
```

Como se puede ver, se genera automaticamente lo necesario para que la propiedad sea compatible con la mayor cantidad de navegadores posibles.