<?php

  $error = array(
      'name' => '',
      'contact-method' => '',
      'message' => '',
      'time' => ''
  );

  $response = '';
  $validated = '';

  // $hash = md5(uniqid(rand(), true));
  // $_SESSION['token'] = $hash;

  if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {

    $loadtime = $_POST["loadtime"];
    $totaltime = time() - $loadtime;

    if($totaltime < 7) {
      echo 'It looks like you\'re in a hurry to contact us. Either refresh the page and fill out the form more slowly, or <a class="intro-link" href="mailto:wguldin@gmail.com">contact me directly by email</a>';
      exit;
    }

    // if ( $_SESSION['token'] != $_POST['token']) {
    //   echo('Please fill in the form before submitting!');
    //   exit;
    // }

    $name = filter_var($_POST['name'],FILTER_SANITIZE_STRING);
    $company = filter_var($_POST['company'],FILTER_SANITIZE_STRING);
    $contactMethod = filter_var($_POST['contact-method'],FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'],FILTER_SANITIZE_STRING);

    if (!isset($name) || trim($name) == '') {
      $error['name'] = 'Your name will help me make sure I know how to address you.';
    }

    if (!isset($message) || trim($message) == '') {
      $error['message'] = 'Let me know what you need, so I have better idea of how to help.';
    }

    if (!isset($contactMethod) || trim($contactMethod) == '') {
      $error['contact-method'] = 'Without an email address or phone number, I can\'t contact you.';
    }

    if(strlen(implode($error)) == 0) {
      $validated = true;
    }

    # Check whether the validation was successful
    if ($validated === true) {

      $messagecontents = 'Name : ' . $name . '<br />' . ' Company : ' . $company . '<br />' . ' Contact Method (Email or Phone) : ' . $contactMethod . '<br />' . ' Message : ' . $message;
      $emailto = 'wguldin@gmail.com';
      $toname = 'Will Guldin';
      $emailfrom = 'wguldin@willguldin.com';
      $fromname = 'willguldin.com';
      $subject = 'Contact form - willguldin.com';
      $messagebody = $messagecontents;
      $headers = 
        'Return-Path: ' . $emailfrom . "\r\n" . 
        'From: ' . $fromname . ' <' . $emailfrom . '>' . "\r\n" . 
        'X-Priority: 3' . "\r\n" . 
        'X-Mailer: PHP ' . phpversion() .  "\r\n" . 
        'Reply-To: ' . $fromname . ' <' . $emailfrom . '>' . "\r\n" .
        'MIME-Version: 1.0' . "\r\n" . 
        'Content-Transfer-Encoding: 8bit' . "\r\n" . 
        'Content-Type: text/html; charset=ISO-8859-1\r\n' . "\r\n";
      $params = '-f ' . $emailfrom;
      $test = mail($emailto, $subject, $messagebody, $headers, $params);
      // $test should be TRUE if the mail function is called correctly

      # show success message
      $response = 'success';

    } else {
      # Show the error message
      $response = $error;
    }
  }

  // If AJAX post
  if ( !empty($_POST['ajax']) && $_SERVER['REQUEST_METHOD'] == 'POST' ) {
    
    echo json_encode($response);

  // If non-AJAX post success
  } else if ( empty($_POST['ajax']) && $response === 'success' && $_SERVER['REQUEST_METHOD'] == 'POST') {

    echo '<h2="main-subheader">Thanks for your message!</h2><p>I\'ll be sure to get back to you during the next day.</p>';

  // regular include of form
  } else { ?>

    <form id="contact-form" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="POST" class="contact-form">        
      <?php echo $error["time"]; ?>       

      <label>Full name 
        <input name="name" type="text" />
        <?php echo $error["name"]; ?>
      </label>
      <label>Company <span class="optional-note">(optional)</span>
        <input name="company" type="text" />
      </label>

      <fieldset class="contact-options">
        <legend>How would you like me to contact you?</legend>
        <label><input type="radio" name="contact" checked="checked" value="email"/>Email</label>
        <label><input type="radio" name="contact" value="phone"/>Phone</label>
      </fieldset>

      <label id="contact-method"><span>Email Address</span> 
        <input name="contact-method" type="email" />
        <?php echo $error["contact-method"]; ?>              
      </label>

      <label class="contact-message">Tell me what you need
        <textarea name="message" rows="8"></textarea>
        <?php echo $error["message"]; ?>      
      </label>

      <input type="hidden" name="loadtime" value="<?php echo time(); ?>">
      <!--<input type="hidden" name="token" value="<? //php echo $hash; ?>" />-->

      <button type="submit" name="submit" class="chiclet-button">Send</button>
    </form>

  <?php }
?>