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
│    │    ├── docs/                  # TechDocs directory  
│    │    │    ├── mkdocs.yml        # 3. MkDocs setting - add mkdocs location  
│    │    │    ├── index.md          # 4. the first page of doc  
│    │    │    ├── assets/           # Images and static files  
│    │    │    ├── other-docs.md     # other docs  
│    ├── catalog-2/  
│    │    ├── catalog-info.yaml      # file name can be anything  
│    │    ├── docs/  
│    │    │    ├── mkdocs.yml  
│    │    │    ├── index.md          # first one must be index.md  
│    │    │    ├── assets/  
│    │    │    ├── other-docs.md  
│    ├── catalog-3/  
│    │    ├── catalog-info.yaml  
│    │    ├── docs/  
│    │    │    ├── mkdocs.yml  
│    │    │    ├── index.md  
│    │    │    ├── assets/  
│    │    │    ├── other-docs.md  
│── app-config.yaml                  # 1. Setting catalog.locations and techdocs.publisuer.local.publishDirectory  
```