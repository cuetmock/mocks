<?php
include('conn.php');



// Destroy the session
session_destroy();

// Send a response back to the client
echo json_encode(['message' => 'Logged out successfully']);
exit;
?>
