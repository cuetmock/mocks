<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

session_start();

define('SITEURL', 'http://localhost/my-app/src/api/conn.php');
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
    echo json_encode(['connected' => false, 'message' => 'Database selection failed: ' . mysqli_error($conn)]);
    exit;
}

echo json_encode(['connected' => true, 'message' => 'Successfully connected to the database.']);
mysqli_close($conn);
?>
