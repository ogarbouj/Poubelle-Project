models are usualy used for classes that have data for the app
examples:   
- class for pagination
- class for filter
- class for token config...

please don't use models for the http response and database tables.

more explination: 

any class that doen't require to put in the database, you create it inside the model folder
and any class or schema that you need in the database, you have to create it inside the entities folder 

in this way, we can seperate them and maintain our project in easy way...