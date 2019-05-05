import * as Handlebars from '../../node_modules/handlebars/dist/handlebars';


export const construction = Handlebars.compile(`
<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>

        <h1> Under Construction</h1>
        <p>${new Date()}</p>

    </body>
</html>
`)