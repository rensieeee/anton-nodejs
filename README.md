This is Anton Framework, a NodeJS framework to quickly develop and design websites.
The structure is very simple. To create a page, simply add a view, block, controller, and (optionally) a model.
Add the path to the router, and link the controller to it. Specific structure explained below.

Views: These are the templates of the pages. Pages are placed in /views/pages, whereas more global templates are put in views/templates. It is encouraged to create as many templates as possible, to allow reuse.

Static: This is where images and stylesheets are kept. default.css is the base css of the site, with extra css files for specific templates.

Models: These JavaScript objects are the only objects capable of interacting with the database. They are only used to get and set data, and should never be used for anything else.

Blocks: These JavaScript objects use models to create the data object used for rendering the template. They should never use models to post data. They can ask for data, and perform basic logic to determine which data to ask for next. The idea behind this is to seperate logic. If a block is called to generate the template, all data should be processed already.

Controllers: These JavaScript objects use Models to get and set data and perform logic on data. After processing the request, they use blocks to get data used for rendering the template, and render the template.

Things never to touch:
-node_modules. Only change this folder by running npm install. Never anything else.
-package-lock.json. Only change this file by running npm install. Never anything else.
-database/database.js. This is core framework functionality.
-BaseBlock, BaseController, BaseModel. This, too, is core framework functionality.

TODO:
-Allow login and register blocks to show more insights on getData.
-Create custom attributes.
-Create SQL scripts to setup database.