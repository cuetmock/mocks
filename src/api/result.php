<?php
include('conn.php');


// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['error' => 'User not logged in.']);
    exit;
}

$first_name = $_SESSION['first_name'];
$email = $_SESSION['email'];
$userid = $_SESSION['user_id'];

// Function to fetch scores
function fetch_scores($conn, $userid, $table_name, $score_columns) {
    $columns = implode(", ", $score_columns);
    $query = "SELECT $columns FROM $table_name WHERE user_id = $userid";
    $result = mysqli_query($conn, $query);

    $score = 0;
    $attempted = false;
    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        foreach ($score_columns as $column) {
            if (isset($row[$column])) {
                $score += $row[$column];
                $attempted = true;
            }
        }
    }
    return $attempted ? $score : "Not Attempted";
}

// Fetch scores for each subject
$bio_score = fetch_scores($conn, $userid, "bio_marks", ["bmarks1", "bmarks2", "bmarks3", "bmarks4"]);
$phy_score = fetch_scores($conn, $userid, "phy_marks", ["pmarks1", "pmarks2", "pmarks3", "pmarks4"]);
$chem_score = fetch_scores($conn, $userid, "chem_marks", ["cmarks1", "cmarks2", "cmarks3", "cmarks4"]);
$eng_score = fetch_scores($conn, $userid, "eng_marks", ["emarks1", "emarks2", "emarks3", "emarks4"]);
$gen_score = fetch_scores($conn, $userid, "gen_marks", ["gmarks1", "gmarks2", "gmarks3", "gmarks4"]);
$math_score = fetch_scores($conn, $userid, "m_markks", ["mmarks1", "mmarks2", "mmarks3", "mmarks4"]);

// Calculate overall score
$subject_scores = array_filter([$phy_score, $chem_score, $bio_score, $eng_score, $gen_score], function($score) {
    return is_numeric($score);
});
$overall_score = count($subject_scores) > 0 ? array_sum($subject_scores) / count($subject_scores) : "Not Attempted";

// Prepare results
$results = [
    'username' => $first_name,
    'overall' => $overall_score,
    'subjects' => [
        'Physics' => $phy_score,
        'Chemistry' => $chem_score,
        'Biology' => $bio_score,
        'Maths' => $math_score,
        'English' => $eng_score,
        'General Knowledge' => $gen_score
    ]
];

// Output results in JSON format
echo json_encode($results);
?>
