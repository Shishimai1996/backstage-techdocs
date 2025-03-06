# Adding the second catalog with docs 

## Directory structure
```
backstage-techdocs/                # app name  
│── packages/  
│    ├── app/                      # Backstage frontend  
│    ├── backend/                   # Backstage backend  
│── catalogs/  
│    ├── catalog-1/  
│    │    ├── catalog-info.yaml      # 2. setting catalog info - metadata.annotations  
│    │    ├── mkdocs.yml             # 3. MkDocs setting - add docs/ location 
│    │    ├── docs/                  # TechDocs directory     
│    │    │    ├── index.md          # 4. the first page of doc  
│    │    │    ├── assets/           # Images and static files  
│    │    │    ├── other-docs.md     # other docs  
│    ├── catalog-2/  
│    │    ├── catalog-info.yaml      # file name can be anything  
│    │    ├── mkdocs.yml  
│    │    ├── docs/  
│    │    │    ├── index.md          # first one must be index.md  
│    │    │    ├── assets/  
│    │    │    ├── other-docs.md  
│    ├── catalog-3/  
│    │    ├── catalog-info.yaml  
│    │    ├── mkdocs.yml  
│    │    ├── docs/  
│    │    │    ├── index.md  
│    │    │    ├── assets/  
│    │    │    ├── other-docs.md  
│── app-config.yaml                  # 1. Setting catalog.locations and techdocs.publisuer.local.publishDirectory  
```

## Step by step 
1. Add new catalog folder as catalog-3
2. Add catalog-info.yaml file inside of the folder
3. Add mkdocs.yaml file
4. Add mkdocs on docs/ folder
5. Add catalog.locations at app-config.yaml
6. Activate python virtual environment 
```
source  myenv/bin/activate 
```
7. Register catalog to backend
```
npx @techdocs/cli generate --no-docker --source-dir /Users/mai.shimizu/Documents/GitHub/backstage-techdocs/catalogs/{catalog name}
```
8. Run yarn dev in the same terminal