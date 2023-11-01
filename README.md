## Guia
* Crear carpeta "test-express-mvc"
* Ingresar a la carpeta con  ```cd test-express-mvc```
* Ejecutar el comando ```npm init -y```
* Instalar todas la dependencias necesarias para iniciar el proyecto
    ```
    npm install express ejs typescript ts-node @types/express @types/node
    ```
* Crear archivo tsconfig.json
```
{
    "compilerOptions": {
        "target": "ES2018",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
    }
}
```
* Crear estructara 
```
.
├── app.js
└── views
    ├── home.handlebars
    └── layouts
        └── main.handlebars

```
* agregar script en el package.json
```
		"start": "ts-node src/app.ts"
```