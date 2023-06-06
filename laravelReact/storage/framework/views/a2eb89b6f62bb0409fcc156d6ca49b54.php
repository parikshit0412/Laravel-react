<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel with React</title>
    </head>
    <body class="antialiased">
       <div id="app"></div>
       <?php echo app('Illuminate\Foundation\Vite')('resources/js/app.js'); ?>
    </body>
</html><?php /**PATH D:\xampp\htdocs\laravelReact\resources\views/todo.blade.php ENDPATH**/ ?>