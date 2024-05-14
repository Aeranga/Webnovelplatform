<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "ERAnga99";
$dbname = "novel";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve chapter ID from URL
if(isset($_GET['id'])) {
    $chapter_id = $_GET['id'];

    // Query to fetch chapter details based on ID
    $sql_chapter = "SELECT * FROM chapters WHERE id=$chapter_id";
    $result_chapter = $conn->query($sql_chapter);

    if ($result_chapter->num_rows > 0) {
        $row_chapter = $result_chapter->fetch_assoc();
    } else {
        echo "No chapter found with the given ID.";
        exit();
    }
} else {
    echo "Chapter ID not provided.";
    exit();
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $row_chapter['chapter_title']; ?></title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1><?php echo $row_chapter['chapter_title']; ?></h1>
        </div>
    </header>

    <section class="chapter-content">
        <div class="container">
            <p><?php echo $row_chapter['chapter_content']; ?></p>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Web Novel Platform. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
