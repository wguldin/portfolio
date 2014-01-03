<?php

    define('PERCH_LICENSE_KEY', 'P21310-DZW039-CGB539-BWY016-EKY028');

    define("PERCH_DB_USERNAME", 'wguldin');
    define("PERCH_DB_PASSWORD", 'reds0x');
    define("PERCH_DB_SERVER", "localhost");
    define("PERCH_DB_DATABASE", "perch");
    define("PERCH_DB_PREFIX", "perch2_");
    
    define('PERCH_TZ', 'America/Chicago');

    define('PERCH_EMAIL_FROM', 'wguldin@gmail.com');
    define('PERCH_EMAIL_FROM_NAME', 'Will Guldin');

    define('PERCH_LOGINPATH', '/perch');
    define('PERCH_PATH', str_replace(DIRECTORY_SEPARATOR.'config', '', dirname(__FILE__)));
    define('PERCH_CORE', PERCH_PATH.DIRECTORY_SEPARATOR.'core');

    define('PERCH_RESFILEPATH', PERCH_PATH . DIRECTORY_SEPARATOR . 'resources');
    define('PERCH_RESPATH', PERCH_LOGINPATH . '/resources');
    
    define('PERCH_HTML5', true);
    define('PERCH_RWD', true);
    define('PERCH_DEBUG', false);
?>