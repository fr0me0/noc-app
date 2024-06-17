# Noc Project
The aim of this project is create a number of task working with Clean Architecture in TypeScript

## config
Global objects or configurations 
## domain
Domain contains use cases, entities and all related to bussiness logic (rules, no implementation)
#### - datasource
Contains data origin (database, filesystem, etcc). Contains they rules not implementations
### - entities
What will reach the database?
### - repository
How we call our datasource? (use case <--> repository <--> datasource)
## infrastructure
Contains implementations
## presentation
Near UI (console in this case). Could contain frameworks like Express

# dev
1. Clone the file .env.template to .env
2. Configure environment variables
3. Execute ```npm install```
4. ```docker compose up -d``` to start databases
5. Execute ```npm run dev```
6. ```npx prisma migrate dev``` if you need to fix prisma
```
PORT=3000
MAILER_EMAIL=
MAILER_SECRET_KEY=
PROD=false
```