<?php
include("conn.php");

// Allow from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



if(isset($_POST['submit'])) {
    // Your existing code...
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $city = $_POST['city'];
    $gender = $_POST['gender'];
    $school = $_POST['school'];
    $stream = $_POST['stream'];
    $phn_no = $_POST['phn_no'];
    $target_year = $_POST['target_year'];
    $password = md5($_POST['password']);

    // Check if email already exists
    $check_email_query = "SELECT * FROM user WHERE email='$email'";
    $res_email = mysqli_query($conn, $check_email_query) or die(mysqli_error($conn));

    if(mysqli_num_rows($res_email) > 0) {
        $_SESSION['add'] = "Email already used";
        echo json_encode(['success' => false, 'message' => 'Email already used']);
        exit;
    } else {
        // Prepare and execute SQL query
        $sql = "INSERT INTO user (first_name, last_name, email, city, gender, school, stream, phn_no, target_year, password) VALUES ('$first_name', '$last_name', '$email', '$city', '$gender', '$school', '$stream', '$phn_no', '$target_year', '$password')";
        $res = mysqli_query($conn, $sql) or die(mysqli_error($conn)); // Execute the query

        if($res == true) {
            echo json_encode(['success' => true]);
            exit; // Terminate the script after response
        } else {
            $_SESSION['add'] = "Failed to add user";
            echo json_encode(['success' => false, 'message' => 'Failed to add user']);
            exit; // Terminate the script after response
        }
    }
}
?>
