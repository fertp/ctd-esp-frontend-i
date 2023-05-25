# Requerimientos

## Clase 1 - Repaso hooks

1. Agregar el Hook necesario para controlar el valor de los inputs a medida que la persona escribe.

2. Implementar el Hook necesario para poder mantener un estado global dentro del formulario que nos permita mostrar los valores que han sido ingresados en la vista previa de la solicitud.

## Clase 2 - Repaso hooks

1. Sumar el pedido de otros datos en el formulario de registro: tipo de Pokémon, elemento, altura y edad.

2. Crear nuestro useReducer en el contexto del formulario, para concentrar todo el estado del formulario en un solo lugar con las acciones “ACTUALIZAR_ENTRENADOR” y “ACTUALIZAR_POKEMON”.

## Clase 4 - JsDoc

1. Crear la documentación del proyecto para que pueda estar disponible para otros programadores y para nuevas mejoras en el futuro.

## Clase 5 - PropTypes

1. Documentar tu código aplicando PropTypes.

## Clase 7 - React Query

1. Modificar el tipo de input utilizado para introducir el tipo de Pokémon.

2. Implementar useQuery dentro del respectivo componente para poder obtener los datos necesarios a mostrar en la lista desplegable.

3. manejar los casos de isLoading y error, deshabilitando el input para que el usuario no pueda interactuar con él en dichos supuestos.

## Clase 8 - React Query

1. Implementar el Hook de useMutation dentro del componente del formulario.

2. Al momento de invocar el método “mutate”, debemos hacer llegar la información del formulario al callback que ejecuta el request a la API.

3. podemos introducir un mensaje que diga “Enviando formulario” cuando la petición se encuentre pendiente. Por su parte, si la petición se resuelve exitosamente, podemos mostrar una alerta que diga “Formulario enviado”; en caso de error, podemos mostrar un mensaje que diga “No hemos podido enviar el formulario, por favor intente nuevamente”.
