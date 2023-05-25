# Week 4 - Challenge 3

## Teléfono React

Aquí tienes la maquetación HTML/CSS de una aplicación, tendrás que programarla en React.

- Se debe poder escribir un número de teléfono clicando en los botones numéricos. La tecla borrar puede borrar el último dígito o borrar el número completo, como prefieras.
- Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
- No se puede introducir un número de más de 9 cifras.
- El botón Llamar sólo se puede pulsar si el número tiene 9 cifras. Cuando tenga 9 cifras el botón debe tener la clase "active".
- El mensaje superior "Llamando..." sólo aparece cuando se pulsa el botón "Llamar" y mientras dure la llamada. Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
- Al pulsar el botón "Llamar", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Colgar". El teclado tiene que quedar deshabilitado.
- Al pulsar el botón "Colgar", éste debe desaparecer y debe aparecer en su lugar el botón "Llamar". El teclado tiene que habilitarse. Además, se debe borrar el número de teléfono.
- Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.

Separa todo en los siguientes componentes:

- Info
- Display
- Actions
  - Action
- Keyboard
  - Key

Entrega también un listado de responsabilidades.

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > <<<<<<<<<<<<<<<<<<<<<<<<

Info:

Mostrar el mensaje "Llamando..." cuando se active la llamada.
Controlar la visibilidad del mensaje mediante el estado y la clase CSS "off".

Display:
Mostrar el número de teléfono ingresado.
Recibir el número como una prop y mostrarlo en el elemento HTML correspondiente.

Actions:
Contener los botones de acción, es decir, el botón "Llamar" y el botón "Colgar".
Gestionar el intercambio de visibilidad entre los dos botones según las reglas del desafío.
Gestionar la habilitación y deshabilitación del teclado.

Action:
Representar un botón de acción (llamar o colgar).

Keyboard:
Contener los botones numéricos y el botón de borrar.
Gestionar la entrada de números de teléfono mediante los botones numéricos.
Gestionar la eliminación del último dígito o del número completo al presionar el botón de borrar.
Restringir la entrada a un máximo de 9 cifras.

Key:
Representar un botón numérico.
