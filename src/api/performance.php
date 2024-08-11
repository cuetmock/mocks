<?php
include("conn.php");

session_start();

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['error' => 'User not logged in.']);
    exit;
}

$username = $_SESSION['username'];
$userid = $_SESSION['user_id'];

function fetch_scores($conn, $userid, $table_name, $score_columns) {
    $columns = implode(", ", $score_columns);
    $query = "SELECT $columns FROM $table_name WHERE user_id = $userid";
    $result = mysqli_query($conn, $query);

    $score = 0;
    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        foreach ($score_columns as $column) {
            if (isset($row[$column])) {
                $score += $row[$column];
            }
        }
    }
    return $score;
}

$bio_score = fetch_scores($conn, $userid, "bio_marks", ["bmarks1", "bmarks2", "bmarks3", "bmarks4"]);
$phy_score = fetch_scores($conn, $userid, "phy_marks", ["pmarks1", "pmarks2", "pmarks3", "pmarks4"]);
$chem_score = fetch_scores($conn, $userid, "chem_marks", ["cmarks1", "cmarks2", "cmarks3", "cmarks4"]);
$eng_score = fetch_scores($conn, $userid, "eng_marks", ["emarks1", "emarks2", "emarks3", "emarks4"]);
$gen_score = fetch_scores($conn, $userid, "gen_marks", ["gmarks1", "gmarks2", "gmarks3", "gmarks4"]);
$math_score = fetch_scores($conn, $userid, "m_marks", ["mmarks1", "mmarks2", "mmarks3", "mmarks4"]);

$performanceData = [
    'username' => $username,
    'labels' => ['Biology', 'Physics', 'Chemistry', 'Maths', 'English', 'General Knowledge'],
    'scores' => [$bio_score, $phy_score, $chem_score, $math_score, $eng_score, $gen_score]
];

echo json_encode($performanceData);
?>
