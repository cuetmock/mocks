<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include('conn.php');


// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the posted data
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Encrypt password
    $password = md5($password);

    // Query to check the user credentials
    $sql = "SELECT user_id, first_name, email, stream FROM user WHERE email=? AND password=?";
    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        echo json_encode(['success' => false, 'message' => 'Database prepare error: ' . $conn->error]);
        exit;
    }
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result) {
        if ($result->num_rows == 1) {
            $user = $result->fetch_assoc();

            // Store user details in session variables
            $_SESSION['user_id'] = $user['user_id'];
            $_SESSION['first_name'] = $user['first_name'];
            $_SESSION['email'] = $user['email'];
            $_SESSION['stream'] = $user['stream'];

            // Determine redirect URL based on the stream
            $redirectUrl = '/dash'; // Default redirect
            if ($user['stream'] == 'science') {
                $redirectUrl = '/sdash';
            } elseif ($user['stream'] == 'commerce') {
                $redirectUrl = '/cdash';
            } elseif ($user['stream'] == 'arts') {
                $redirectUrl = '/adash';
            }

            // Return success response with redirect URL
            echo json_encode([
                'success' => true, 
                'message' => 'Login successful.', 
                'redirectUrl' => $redirectUrl
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid username or password.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Database query error: ' . $conn->error]);
    }
    $stmt->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}

// Close the connection
$conn->close();
?>
