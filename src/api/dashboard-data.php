<?php

include("conn.php"); // Include the database connection

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    echo json_encode([
        'error' => 'User not logged in'
    ]);
    exit;
}

// Fetch user details
$first_name = $_SESSION['first_name'];
$email = $_SESSION['email'];
$userid = $_SESSION['user_id'];

// Initialize total score and count variables
$total_score = 0;
$score_count = 0;

// Function to fetch and sum scores from a table
function fetch_scores($conn, $userid, $table_name, $score_columns) {
    global $total_score, $score_count;

    $columns = implode(", ", $score_columns);
    $query = "SELECT $columns FROM $table_name WHERE user_id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $userid);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        foreach ($score_columns as $column) {
            if (isset($row[$column])) {
                $total_score += $row[$column];
                $score_count++;
            }
        }
    }
    $stmt->close();
}

// Fetch scores from different tables
fetch_scores($conn, $userid, "bio_marks", ["bmarks1", "bmarks2", "bmarks3", "bmarks4"]);
fetch_scores($conn, $userid, "phy_marks", ["pmarks1", "pmarks2", "pmarks3", "pmarks4"]);
fetch_scores($conn, $userid, "chem_marks", ["cmarks1", "cmarks2", "cmarks3", "cmarks4"]);
fetch_scores($conn, $userid, "eng_marks", ["emarks1", "emarks2", "emarks3", "emarks4"]);
fetch_scores($conn, $userid, "gen_marks", ["gmarks1", "gmarks2", "gmarks3", "gmarks4"]);

// Calculate average score
$avg_score = $score_count > 0 ? $total_score / $score_count : 0;

// Return JSON response
echo json_encode([
    'first_name' => $first_name,
    'email' => $email,
    'avgScore' => $avg_score,
    'user_id' => $userid,
]);
?>
