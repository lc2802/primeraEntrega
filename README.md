# Primera Entrega

## **Logic.js**

Se entrega una calculadora de IMC con 3 funciones principales.

### 1. calcularIMC()
- Esta función inicia el script y declara las variables que se reciben como parámetros del HTML.
- llama a las dos funciones que generan el cálculo y la categorización respectivamente.

### 2. categorizar()
- Utiliza un control de flujo para categorizar el IMC según el cálculo obtenido en `calculo()`.
- La categoría generada se muestra en la consola y al final se muestra una alerta con la respuesta.

### 3. calculo()
- Funcion flecha.
- Realiza el cálculo del Índice de Masa Corporal (IMC) dividiendo el peso entre el cuadrado de la altura.

## **Index.html**

Se utiliza una plantilla de HTML5 con Bootstrap. El único fin que tiene es:

- Permitir la recursividad al presionar el botón que llama el script, sin la necesidad de usar solo `prompt`.
- Hace la aplicacion más intuitiva.

#### Instrucciones:
1. Se inicia abriendo `index.html` en tu navegador.
2. Ingresá el peso y la altura en los campos correspondientes.
3. Clic en el botón para obtener el IMC y la categoría.
4. El resultado se mostrará en la consola y también te va a aparecer una alerta con el mensaje.

--IMPORTANTE-- 

No te olvides de ingresar valores numericos > 0 !!
