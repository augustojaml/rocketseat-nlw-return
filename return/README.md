# NLW Return

### Aula 1

- [tailwindcss](https://tailwindcss.com/)
- [phosphoricons](https://phosphoricons.com/)
- [reakit](https://reakit.io/)
- [radix](https://www.radix-ui.com/)
- [headlessui](https://headlessui.dev/)

### Aula 2

- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [Scrollbar Plugin](https://www.npmjs.com/package/tailwind-scrollbar)
- [html2canvas](https://html2canvas.hertzen.com/)

### AULA 3

- Instalando dependências

  ```bash
  yarn add typescript @types/node ts-node-dev -D
  ```

- Iniciando o typescript
  ```bash
  yarn tsc --init
  ```
- Mudar o target `es2020`

- Configurar `package.json`

  ```json
  "scripts": {
    "dev": "ts-node-dev src/server.ts"
  },
  ```

- Instalando o express

  ```bash
  yarn add express && yarn add -D @types/express
  ```

- [prisma](https://www.prisma.io/)

  ```bash
  yarn add @prisma/client && yarn add -D prisma
  ```

  - iniciando o prisma

    ```bash
    yarn prisma init
    ```

- [nodemailer](https://nodemailer.com/about/)

  ```bash
  yarn add nodemailer && yarn add -D @types/nodemailer
  ```

  - [mailgun](https://www.mailgun.com/)
  - [sparkpost](https://www.sparkpost.com/)
  - [mailchimp](https://mailchimp.com/pt-br/grow-with-mailchimp/?gclid=Cj0KCQjwyMiTBhDKARIsAAJ-9VtqyNFZe6KnLuiYM45FdNt7wbU_usW9XUDB6SD5sedqlNhTI0scurwaAm2BEALw_wcB&gclsrc=aw.ds)
  - [mailtrap](https://mailtrap.io/)

- SOLID

  1. Single Responsability
  2. Open/Closed Principle
  3. Liskov Substitution Principle
  4. Interface Segregation Principe
  5. Dependency Invertion Principle

  - [ 1 ] - Cada class tem uma responsabilidade única
  - [ 2 ] - As classes da nossa aplicação devem ser abertas para extensão mas fechadas para modicações
  - [ 3 ] - Nós devemos poder substituir uma classe pai por uma classe herança dele e tudo continuar funcionando
  - [ 4 ] - ...
  - [ 5 ] -

- Jest

  - [jest](https://jestjs.io/)
  - [ts-jest](https://www.npmjs.com/package/ts-jest)
  - [swc](https://swc.rs/)

  ```bash
  yarn add jest -D
  ```

  ```bash
  ✔ Would you like to use Jest when running "test" script in "package.json"? … yes
  ✔ Would you like to use Typescript for the configuration file? … yes
  ✔ Choose the test environment that will be used for testing › node
  ✔ Do you want Jest to add coverage reports? … yes
  ✔ Which provider should be used to instrument code for coverage? › v8
  ✔ Automatically clear mock calls, instances, contexts and results before every test? … yes
  ```

- Cors
  ```bash
  yarn add cors && yarn add -D @types/cors
  ```
