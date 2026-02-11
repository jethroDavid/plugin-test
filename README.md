## Local Development

To work on this library locally with another project (e.g., `tablogs_mobile_app`), follow these steps:

### 1. Build and Watch the Library
In this library project (`tablogs-plugins`), run the build command in watch mode:
```bash
npm run watch
```

### 2. Link the Library in the Application
In your application project (`tablogs_mobile_app`):

1.  Update `package.json` to point to the local build:
    ```json
    "dependencies": {
      "form": "file:../tablogs-plugins/dist/form"
    }
    ```
2.  Run `npm install`.
3.  Enable `preserveSymlinks` in `angular.json` under the `build` options and in `tsconfig.json` to ensure the application can resolve dependencies correctly:
    
    **angular.json**:
    ```json
    "architect": {
      "build": {
        "options": {
          "preserveSymlinks": true
        }
      }
    }
    ```

    **tsconfig.json**:
    ```json
    "compilerOptions": {
      "preserveSymlinks": true
    }
    ```

This setup allows you to make changes in the library and have them immediately reflected in the application without needing to publish to a registry.


ng generate component my-feature --project=my-plugin --standalone

### Generate a New Component

To generate a new component within a specific plugin, use the following command:

```bash
ng generate component <component-name> --project=<project-name>
```

Example for generating a component in the `form` project:

```bash
ng generate component components/my-new-component --project=form
```-+-+-+-+-+



sometimes it dont work 

plugin
rm -rf .angular/cache && npm run watch form

web
ng build --configuration=development && ng serve

mobile
ng build --configuration=development && ionic  serve