# Create catalog

## Getting started
https://www.youtube.com/watch?v=U5V-rJQ8vJg
if you cannot register catalog.yaml file by create new component, check if the github repository is private.
if the repository is private, you need to add check to the repo when you generate token at Github.

if you get error to connect with swagger set like this in app-config.yaml:
```
backend:
  reading:
    allow:
      - host: petstore.swagger.io // remove http://
```

### Add pagination to the catalog list
https://backstage.io/docs/features/software-catalog/catalog-customization#pagination

### Entity
https://backstage.io/docs/features/software-catalog/creating-the-catalog-graph#descriptor-components-used-to-build-the-catalog-graph




# Setting Authentication with Github
https://www.youtube.com/watch?v=hhopHFT4J_o
https://backstage.io/docs/auth/github/provider#configuration
https://backstage.io/docs/auth/github/provider#backend-installation
https://backstage.io/docs/auth/github/provider#backend-installation
https://backstage.io/docs/auth/identity-resolver#custom-ownership-resolution
https://backstage.io/docs/auth/identity-resolver#sign-in-without-users-in-the-catalog

if email = undefined, add the below to app-config.yaml
```
auth:
  environment: development
  providers:
    github:
      development:
        clientId: ${GITHUB_CLIENT_ID}
        clientSecret: ${GITHUB_CLIENT_SECRET}
        scope: 'read:user user:email'
```

# Add plugin
https://backstage.io/docs/plugins/create-a-plugin#create-a-plugin

https://backstage.io/docs/plugins/composability#extensions-from-a-plugins-point-of-view
