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
    <title>Roy Dudley Estate Sales Photo</title>
    <meta name="description" content="Photos from one of Roy Dudley Estate Sales upcoming sales">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="../stylesheets/styles.css">
    
    <script src="../js/modernizr-html5shiv.min.js"></script>

</head>

<body>

    <?php perch_content('navigation'); ?>

	<main class="photo-gallery-featured">

        <nav class="gallery-nav">
            <?php perch_gallery_adjacent_images(perch_get('id')); ?>
        </nav>

        <div class="gallery-featured">
            <?php perch_gallery_image(perch_get('id')); ?>
        </div>

        <footer>
            <?php perch_content('contact-us'); ?>
        </footer>

    </main>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../js/jquery-1.10.2.min.js"><\/script>')</script>

    <script src="../js/script.js"></script>

</body>