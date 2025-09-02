<?php
  $to = "anorak369t@gmail.com";
  $subject = $_POST['subject'];
  $message = "Name: " . $_POST['name'] . "\n";
  $message .= "Email: " . $_POST['email'] . "\n";
  $message .= "Message: " . $_POST['message'];
  $headers = "From: " . $_POST['email'];
  mail($to, $subject, $message, $headers);
  header("Location: thankyou.html");
  exit();
?>
