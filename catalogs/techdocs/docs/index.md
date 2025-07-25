# How to create techdocs?

## Getting started
you need to setup frontend and backend app then you need to install MKdocs by python.

## Setting up frontend
https://backstage.io/docs/features/techdocs/getting-started#adding-techdocs-frontend-plugin

## Setting up backend
https://backstage.io/docs/features/techdocs/getting-started#new-backend-system

## Setting up app-config.yaml
https://backstage.io/docs/features/techdocs/getting-started#disabling-docker-in-docker-situation-optional

## Install Python 3 with Homebrew
```
brew update
brew install python3
```

## Create and activate the virtual environment
```
python3 -m venv myenv
python3 -m myenv/opt/venv
source  myenv/bin/activate  //activate python virtual environment.
```

## Install the required package
```
pip install mkdocs-techdocs-core
```

## Install mkdocs
```
pip install --upgrade mkdocs
```

## Build mkdocs
```
mkdocs build --clean
```

## Check in brouser
```
mkdocs serve
```
>access localhost:8000

## Install @techdocs-cli
```
npx @techdocs/cli generate --no-docker --source-dir /Users/mai.shimizu/Documents/GitHub/backstage-techdocs/catalogs/examples
```
Once you changed the catalog name, you need to execute this command. then it will generate backend.

If backstage updated and get 
Error: No extension point or service available for the following ref(s): serviceRef{events.service},
```
yarn backstage-cli versions:bump
```

## Create docs
https://backstage.io/docs/features/techdocs/creating-and-publishing#create-a-basic-documentation-setup

* Run in virtual environment!! yarn dev

### Related files
###[app-config.yaml](../../../app-config.yaml)
###[catalog-info.yaml](../entities.yaml)
###[mkdocs.yml](../mkdocs.yml)

### If needed, add pyproject.toml
###[file](../../../pyproject.toml)