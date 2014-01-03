<?php include('../../perch/runtime.php'); ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
	<title>Perch Gallery Example B</title>
	<?php perch_get_css(); ?>
	<link rel="stylesheet" type="text/css" href="../gallery.css" />
</head>
<body>
   <header class="layout-header">
		<div class="wrapper">
			<div class="company-name">Perch Gallery App - Company Name</div>
			<img src="<?php perch_path('feathers/quill/img/logo.gif'); ?>" alt="Your Logo Here" class="logo"/>
		</div>
		<nav class="main-nav">
			<?php perch_pages_navigation(array(
					'levels'=>1
				));
			?>
		</nav>
	</header>
	
	<!--  change cols2-nav-right to cols2-nav-left if you want the sidebar on the left -->
	<div class="wrapper cols2-nav-right">
	
		<div class="primary-content">		    
			<h1>Example B: single page gallery</h1>
		
		    <p>This demonstrates a simple gallery listing. With albums displayed as headings - thumbnails underneath on one page.
		    Click a thumbnail to view a larger image.</p>
		    
		    <?php perch_gallery_build(); ?>
		</div>
		
		
	</div>

	<footer class="layout-footer">
		<div class="wrapper">
			<ul class="social-links">
				<li class="twitter"><a href="#" rel="me">Twitter</a></li>
				<li class="facebook"><a href="#" rel="me">Facebook</a></li>
				<li class="flickr"><a href="#" rel="me">Flickr</a></li>
				<li class="linkedin"><a href="#" rel="me">LinkedIn</a></li>
				<li class="rss"><a href="#">RSS</a></li>
			</ul>
			<small>Copyright &copy; <?php echo date("Y"); ?></small>
		</div>
	</footer>
	<?php perch_get_javascript(); ?>
</body>
</html>
