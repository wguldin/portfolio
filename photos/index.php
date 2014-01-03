<?php include('../perch/runtime.php');?>

<!DOCTYPE html>
<html lang="en">
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Roy Dudley Estate Sales Photo Gallery</title>
    <meta name="description" content="Photos from one of Roy Dudley Estate Sales upcoming sales">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="../stylesheets/styles.css">
    
    <script src="../js/modernizr-html5shiv.min.js"></script>

</head>

<body>

    <?php perch_content('navigation'); ?>

    <main class="photo-gallery">
        <?php perch_content_custom('sales', array(
        'page'=>'../index.php',
        'template'=>'_photo-sales.html',
        'filter'=>'sale-id',
        'match'=>'eq',
        'value'=>perch_get('s'),
        )); ?>

        <?php perch_gallery_album_images(perch_get('s'), array('template'=>'dudley-gallery.html')); ?>
    
        <footer>

            <?php perch_content('contact-us'); ?>

        </footer>

    </main>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../js/jquery-1.10.2.min.js"><\/script>')</script>

    <script src="../js/script.js"></script>
    <script src="../js/jquery.collagePlus.js"></script>
    <script src="../js/lazyload.min.js"></script>

    <script>
        $(document).ready(function(){
            // Apply lazy load library
            $("img.lazy").show().lazyload({
                threshold : 200,
                effect    : "fadeIn"            
            });

            // Call collage plugin
            collage();

        });

        // Here we apply the actual CollagePlus plugin
        function collage() {
            $('#gallery').collagePlus(
                {
                    'fadeSpeed'     : 500,
                    'targetHeight'  : 320,
                    'allowPartialLastRow': true
                }
            );
        };

        // Resize detection for CollagePlus plugin

        var resizeTimer = null;
        $(window).bind('resize', function() {
            // hide all the images until we resize them
            $('#gallery .image-wrapper').css("opacity", 0);
            // set a timer to re-apply the plugin
            if (resizeTimer) clearTimeout(resizeTimer);
            resizeTimer = setTimeout(collage, 200);
        });

    </script>

</body>

</html>
