# Prueba de Nivel - JavaScript y ES6

## Objetivo de la Prueba

Este ejercicio tiene como objetivo evaluar tus conocimientos en JavaScript moderno (ES6+), incluyendo manipulación del DOM, estructuras de control, loops, operadores, manipulación de objetos, funciones y control de errores.

Los ejercicios están diseñados para medir la comprensión y aplicación de estos conceptos sin depender de la memorización.

## Instrucciones

- Lee atentamente cada pregunta/escenario antes de responder.
- Usa JavaScript moderno (ES6+).
- Recuerda ir un paso a la vez, por eso se dan casos de uso. Logra que funcione uno, luego ve a lo siguiente
- Puedes consultar en buscadores, no puedes usar ninguna IA ni copiar la solución de ningún lugar. Se busca evaluar tu capacidad de razonamiento y solución de problemas.

---

## Descripción Loetería

Este ejercicio tiene como objetivo evaluar tus conocimientos sobre JavaScript, manipulación del DOM y control de errores con try...catch. Implementarás Implementarás un pequeño sistema de lotería donde: 
* El usuario ingresa un número (del 1 al 10).
* El sistema genera un número aleatorio (del 1 al 10).
* Se muestra si el usuario ganó o perdió.
* Se mantiene un historial de las jugadas.
* Se deben manejar errores como entradas inválidas.

### Funcionalidades

* El usuario DEBE poder ingresar un dato numérico del 1 al 10.
* El usuario PUEDE mediante un botón procesar la jugada.
* El usuario DEBE saber si ganó o perdió.
* El usuario PUEDE acceder a una sección de historial, donde aparezcan todas las jugadas previas.

### Criterios de Aceptación

* *Funcional*: Si el usuario ingresa un número válido del 1 al 10, el sistema genera un número aleatorio, si el número ingresado es igual al número aleatorio, el usuario  gana.
* *Funcional*: Si el usuario ingresa un número válido del 1 al 10, el sistema genera un número aleatorio, si el número ingresado no es igual al número aleatorio, el usuario pierde.
* *Funcional*: Si el usuario ingresa un valor no numérico o fuera de rango, se debe mostrar un mensaje de error.
* *Funcional*: El historial debe mostrar cada jugada en formato:
"Ingresado: X | Aleatorio: Y | Resultado: Ganó/Perdió"
* *Técnico*: Guardar cada número ingresado en un objeto junto con su resultado.
* *Técnico*: Manejar errores usando `try...catch`.
* *Técnico*: implementar una estructura de retorno con el siguiente formato:

  ```javascript
  {
  	message: "", // "Ganó" o "Perdió"
  	data: {
  		userNumber: 0, // Ingresado por el usuario
  		randomNumber: 2 // Generado aleatoriamente por el sistema
  	}
  }
  ```

### Casos de prueba (formato Gherking)

#### Feature: Validación de Lotería

##### Scenario: Usuario ingresa un número válido y pierde
  Given el usuario ingresa el número 4
  When el sistema genera un número aleatorio distinto
  Then se muestra "Perdiste"

##### Usuario ingresa un número válido y gana
  Given el usuario ingresa el número 7
  When el sistema genera el número aleatorio 7
  Then se muestra "Ganaste"

##### Scenario: Entrada no numérica
  Given la entrada "Hola"
  When el usuario intenta procesar la jugada
  Then se muestra un mensaje de error

##### Scenario: Número fuera de rango
  Given el usuario ingresa el número 20
  When el sistema valida el número
  Then se muestra un mensaje indicando que debe ser entre 1 y 10

##### Scenario: Entrada no numérica
    Given una entrada "Hola"
    When el usuario intenta procesar la entrada
    Then se muestra un mensaje de error

##### Scenario: Historial de jugadas
  Given el número 3 y el número 8 ingresados secuencialmente
  When el usuario realiza ambas jugadas
  Then el historial muestra ambas con su resultado correspondiente

¡Buena suerte! 🚀

