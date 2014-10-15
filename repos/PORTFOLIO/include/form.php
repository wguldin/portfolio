<form id="contact-form" action="include/process.php" method="POST" class="contact-form">     
  <?php echo htmlspecialchars($error["time"]); ?>       

  <h3>Contact Me</h3>
  <small class="input-note">All fields are required, unless marked "optional"</small>

  <label>Full name 
    <input name="name" type="text" value="<?php echo htmlspecialchars($_POST['name']); ?>"/>
    <?php if (isset($error['name']) && !empty($error['name'])):?><small class="error"><?=$error['name']?></small><?php endif;?>              
  </label>

  <label>Company <span class="optional-note">(optional)</span>
    <input name="company" type="text" />
  </label>

  <fieldset class="contact-options">
    <legend>How would you like me to contact you?</legend>
    <label><input type="radio" name="contact" checked="checked" value="email"/>Email</label>
    <label><input type="radio" name="contact" value="phone"/>Phone</label>
  </fieldset>

  <label id="method"><span>Email Address</span> 
    <input name="method" type="email" value="<?php echo htmlspecialchars($_POST['method']); ?>" />
    <?php if (isset($error['method']) && !empty($error['method'])):?><small class="error"><?=$error['method']?></small><?php endif;?>              
  </label>

  <label class="contact-message">Tell me what you need
    <textarea name="message" rows="8" ><?php echo htmlspecialchars($_POST['message']); ?></textarea>
    <?php if (isset($error['message']) && !empty($error['message'])):?><small class="error"><?=$error['message']?></small><?php endif;?>              
  </label>

  <input type="hidden" name="loadtime" value="<?php echo htmlspecialchars(time()); ?>">

  <button type="submit" name="submit" class="chiclet-button">Send</button>
</form>