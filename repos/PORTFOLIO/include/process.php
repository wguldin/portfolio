<?php

  $error = array(
      'name'    => '',
      'method'  => '',
      'message' => ''
  );
 
  $response = '';
  $validated = '';

  if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {

    //This check prevents bots from repeatedly submitting form.
    $loadtime = $_POST["loadtime"];
    $totaltime = time() - $loadtime;

    if($totaltime < 1.5) {
      echo '<h3>Whoa, you\'re quick!</h3><p>It looks like you\'re in a hurry to contact me. As a spam prevention measure, this form can\'t be sent too quickly. Either refresh the page and fill out the form more slowly, or <span class="email-link">contact me directly by email</span>';
      exit;
    }

    $name     = filter_var($_POST['name'],    FILTER_SANITIZE_STRING);
    $company  = filter_var($_POST['company'], FILTER_SANITIZE_STRING);
    $message  = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    $contact  = filter_var($_POST['contact'], FILTER_SANITIZE_STRING);

    if ($contact == 'email') {
      $method = filter_var($_POST['method'], FILTER_SANITIZE_EMAIL);
    
      // If email contact preference is selected, throw error if email doesn't validate. 
      if ( filter_var($method, FILTER_VALIDATE_EMAIL) == false && $error['method'] == '') {
        $error['method'] = 'Please enter a valid email address';
      }

    } else {
      $method = filter_var($_POST['method'], FILTER_SANITIZE_STRING);
    }

    if ( !isset($name)    ||  trim($name) == '' )    $error['name']    = 'Your full name is required';
    if ( !isset($method)  ||  trim($method) == '' )  $error['method']  = 'I\'ll need a way to get a hold of you';  
    if ( !isset($message) ||  trim($message) == '' ) $error['message'] = 'Let me know what you need';   

    if(strlen(implode($error)) == 0) {
      $validated = true;
    }

    # Check whether the validation was successful
    if ($validated === true) {

      $messagecontents = 'Name : ' . $name . '<br />' . ' Contact Method (email or phone) : ' . $method . '<br />' . ' Message : ' . $message;
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
      //$test should be TRUE if the mail function is called correctly

      echo '<h3>Thanks for your message!</h3><p>I\'ll be sure to get back to you within the next couple of days.</p>';
      exit;

    } else {
      
      foreach ($_POST as $key => $val) {
        $form[$key] = htmlspecialchars($val);
      }

    } 
  } else {
    $form['name'] = $form['method'] = $form['message'] = ''; 
  }

  include($_SERVER['DOCUMENT_ROOT']."/include/form.php");
?>