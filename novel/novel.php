<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve novel ID from URL
if(isset($_GET['id'])) {
    $novel_id = $_GET['id'];

    // Query to fetch novel details based on ID
    $sql_novel = "SELECT * FROM novels WHERE id=$novel_id";
    $result_novel = $conn->query($sql_novel);

    if ($result_novel->num_rows > 0) {
        $row_novel = $result_novel->fetch_assoc();
    } else {
        echo "No novel found with the given ID.";
        exit();
    }

    // Query to fetch chapters of the novel
    $sql_chapters = "SELECT * FROM chapters WHERE novel_id=$novel_id ORDER BY chapter_number";
    $result_chapters = $conn->query($sql_chapters);
} else {
    echo "Novel ID not provided.";
    exit();
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $row_novel['title']; ?></title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1><?php echo $row_novel['title']; ?></h1>
        </div>
    </header>

    <section class="novel-details">
        <div class="container">
            <div class="novel-image">
                <img src="<?php echo $row_novel['image']; ?>" alt="<?php echo $row_novel['title']; ?>">
            </div>
            <div class="novel-info">
                <h2><?php echo $row_novel['title']; ?></h2>
                <p><?php echo $row_novel['description']; ?></p>
                <h3>Chapter List</h3>
                <ul>
                    <?php if ($result_chapters->num_rows > 0) {
                        while($row_chapter = $result_chapters->fetch_assoc()) { ?>
                            <li><a href="chapter.php?id=<?php echo $row_chapter['id']; ?>"><?php echo $row_chapter['chapter_title']; ?></a></li>
                        <?php }
                    } else { ?>
                        <li>No chapters available.</li>
                    <?php } ?>
                </ul>
                <a href="chapter.php?id=<?php echo $row_chapters['id']; ?>" class="read-btn">Read Chapter 1</a>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Web Novel Platform. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
