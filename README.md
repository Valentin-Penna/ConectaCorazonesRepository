# Conecta Corazones

Aplicación web que conecta a personas que necesitan ayuda con las ONG adecuadas para su caso mediante una breve encuesta.

![Página de inicio con la encuesta](docs/inicio.png)

## Cómo funciona

El usuario responde a la encuesta y la aplicación le muestra las organizaciones recomendadas, cada una con una descripción de a qué se dedica. También puede saltarse la encuesta y consultar el listado completo de ONG y voluntariados.

La aplicación no presta la ayuda: actúa como intermediaria entre la persona y la organización.

Todas las páginas incluyen un botón SOS con acceso a los teléfonos de emergencia de España. Hay además una página de preguntas frecuentes.

![Listado de organizaciones](docs/ongs.png)

## Estado

Esta versión es un prototipo de la interfaz. Incluye la navegación entre páginas, la encuesta, las fichas de las ONG, las preguntas frecuentes y el botón SOS.

Pendiente:

- La encuesta tiene solo la primera pregunta (el tipo de ayuda). El diseño contempla varias.
- La lista recomendada todavía no se filtra con las respuestas.
- El botón "Acceder" de cada ficha muestra un aviso, sin contacto real con la organización.
- Los botones "ONGs" y "Voluntarios" todavía no filtran el listado.

## Tecnologías

HTML, CSS y JavaScript, sin frameworks ni dependencias: cuatro páginas, una hoja de estilos y un script.

## Ejecutarlo en local

```bash
git clone https://github.com/Valentin-Penna/ConectaCorazonesRepository.git
```

Después abre `index.html` en el navegador. No hay nada que instalar ni que compilar.

Los logotipos de las ONG pertenecen a cada organización y se usan solo para identificarlas.
