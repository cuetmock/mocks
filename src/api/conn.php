<?php

header("Access-Control-Allow-Origin: http://localhost:3000"); // Replace with your front-end origin
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

//  PHP code here


session_start();

define('SITEURL', 'http://localhost/my-app/conn.php');
define('LOCALHOST', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'cuet');

$conn = mysqli_connect(LOCALHOST, DB_USERNAME, DB_PASSWORD);

if (!$conn) {
    echo json_encode(['connected' => false, 'message' => 'Database connection failed: ' . mysqli_connect_error()]);
    exit;
}

$db_select = mysqli_select_db($conn, DB_NAME);
if (!$db_select) {
  //  echo json_encode(['connected' => false, 'message' => 'Database selection failed: ' . mysqli_error($conn)]);
    exit;
}

//echo json_encode(['connected' => true, 'message' => 'Successfully connected to the database.']);

?>
