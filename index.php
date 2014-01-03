<?php include('perch/runtime.php');?>

<!DOCTYPE html>
<html lang="en">
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Roy Dudley Estate Sales</title>
    <meta name="description" content="A full service estate sale company in Little Rock, Arkansas, with a fine reputation for honest, friendly service.">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="stylesheets/styles.css">
    
    <script src="js/modernizr-html5shiv.min.js"></script>

</head>

<body>

    <?php perch_content('home-navigation'); ?>

    <main>
        <section id="intro">

            <?php perch_content('intro'); ?>

        </section>

        <section id="sales" class="upcoming-sales">

            <h2 class="section-header sales-header">Upcoming sales</h2>
                
            <?php perch_content('sales'); ?>

        </section>

        <section id="process" class="our-process">

            <h2 class="section-header process-header">Our process</h2>

            <?php perch_content('our-process'); ?>

        </section>

        <section id="contact">

            <h2 class="section-header contact-header">Contact Us</h2>

            <?php perch_content('contact-form'); ?>

        </section>

        <footer>

            <?php perch_content('contact-us'); ?>

        </footer>

    </main>


    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/jquery-1.10.2.min.js"><\/script>')</script>

    <script src="js/script.js"></script>

</body>
</html>



