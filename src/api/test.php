<?php
 include("conn.php");
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['testid'])) {
    $test_id = htmlspecialchars($_GET['testid']);

    if (!isset($_SESSION['user_id'])) {
        echo json_encode(["error" => "User not logged in."]);
        exit;
    }

    $query = "";

    if (in_array($test_id, [1, 2, 3])) {
        $tables = ['bio', 'physics', 'chem', 'maths', 'english', 'genral'];
        $queries = [];

        foreach ($tables as $table) {
            $queries[] = "SELECT * FROM $table ORDER BY RAND() LIMIT 30";
        }

        $query = implode(" UNION ALL ", $queries);
    } elseif (in_array($test_id, [10, 11, 12, 13, 14, 15])) {
        $table = "";

        switch ($test_id) {
            case 10:
                $table = "physics";
                break;
            case 11:
                $table = "chem";
                break;
            case 12:
                $table = "bio";
                break;
            case 13:
                $table = "maths";
                break;
            case 14:
                $table = "english";
                break;
            case 15:
                $table = "genral";
                break;
        }

        $query = "SELECT * FROM $table ORDER BY RAND() LIMIT 100";
    } else {
        echo json_encode(["error" => "Invalid test ID."]);
        exit;
    }

    $result = mysqli_query($conn, $query);

    if ($result) {
        $questions = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $questions[] = $row;
        }
        echo json_encode($questions);
    } else {
        echo json_encode(["error" => mysqli_error($conn)]);
    }
} else {
    echo json_encode(["error" => "Invalid request."]);
}

mysqli_close($conn);
?>
