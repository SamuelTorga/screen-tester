# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the testeactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

[[_TOC_]]

Regras de eslint obrigatórias para os projetos frontend. Esse pacote tem o objetivo de promover a uniformidade no padrão de código utilizado nos projetos frontend desenvolvidos no teste, alinhando bons padrões de mercado com alguns padrões de longa data já utilizados. 

**NOTA: à partir do dia 01/07/2021, a pipeline de frontend irá falhar caso o projeto não esteja em conformidade com as regras de lint estabelecidas por esse pacote.**

# Migrando um projeto existente

Caso o seu projeto já esteja configurado para utilizar o eslint com outro conjunto de regras, siga **rigorosamente** os passos informados à seguir para migrar as configurações:

* Remova o pacote `eslint` e também todos os pacotes `eslint-*` do seu `package.json`.
* Remova todos os pacotes `@typescript-eslint/*` do seu `package.json`.
* Remova o pacote `prettier` do seu `package.json`, caso exista.
* Remova também a chave `prettier` do primeiro nível de chaves do arquivo `package.json`, caso exista.
* Caso tenha removido as linhas das dependências manualmente do seu `package.json`, ou seja, sem utilizar o comando `yarn remove`, rode o comando `yarn` para atualizar suas dependências locais.
* Remova os arquivos `.eslintrc.*`, `.eslintignore`, `.prettierrc` e `.prettierignore` da raiz do seu projeto, caso existam.
* Siga o processo de configuração à partir do passo [Instalação](#instalação).


# Instalação

Instale o pacote como uma *devDependency* em seu projeto, utilizando a flag `-D`, com o comando abaixo:

```bash
$ yarn add -D @teste/eslint-config-teste-frontend
```

Em seguida, executar o comando a seguir para instalar **todos os pacotes** necessários em seu projeto:

```bash
$ node node_modules/@teste/eslint-config-teste-frontend/install-peer-dependencies.js | xargs yarn add -D
```

**Importante:** se o seu projeto já utilizar alguma das bibliotecas listadas ao rodar o comando acima em suas de dependências, você deverá certificar-se de que as versões instaladas são compatíveis com as restrições.

# Configuração

No arquivo `package.json` do seu projeto, acrescente (ou modifique) o bloco à seguir:

```json
{
     //...
     "eslintConfig": {
       "extends": [
         "@teste/eslint-config-teste-frontend"
       ]
     } 
     //...
}
```
Remova os arquivos `.eslintrc.*`, `.eslintignore`, `.prettierrc` e `.prettierignore` da raiz do seu projeto, caso existam.

# Corrigindo problemas simples de forma automatizada

Muitos problemas simples, como uso de `;`, erros de indentação, quebra de linha e etc. podem ser corrigidos de forma automatizada utilizando a flag `--fix` no comando `eslint`. Isso pode facilitar consideravelmente o processo de adequação do seu projeto já existente às regras definidas nesse pacote.

Modifique o arquivo `package.json` do seu projeto e acrescente/substitua o script à seguir:

````json
{
  "scripts": {
    //
    "lint": "eslint --no-eslintrc --no-inline-config -c node_modules/@teste/eslint-config-teste-frontend/.eslintrc.json --ignore-path node_modules/@teste/eslint-config-teste-frontend/.eslintignore --ext .js,.jsx,.ts,.tsx"
    //
  }
}
````

Em seguida, rode o seguinte comando:
```bash
$ yarn lint --fix ./
```

**IMPORTANTE**: O comando acima poderá modificar arquivos em seu projeto, corrigindo os problemas de lint passíveis de correção automática. Ele também irá ignorar quaisquer configurações de eslint definida em seu projeto por uma arquivo `.eslint*` e também regras inline (ex: `/* eslint-disable no-bitwise */`)

# Integrações com IDEs

Siga os passos abaixo para configurar sua IDE para formatar os arquivos automaticamente quando eles forem salvos.

## VSCode

1. Instale o [plugin do ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). (Obs: Não é necessário instalar o plugin do Prettier e em alguns casos ele pode dar conflito com o ESlint.)
2. Na raiz do seu projeto crie o arquivo `.vscode/settings.json` com o seguinte conteúdo. (Esse arquivo deve ser versionado junto com o restante do projeto):
    ```
    {
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
      "editor.formatOnSave": true,
      "eslint.format.enable": true
    }
    ```

