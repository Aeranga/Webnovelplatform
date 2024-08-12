
// Header Component
function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="navbar">
            <div class="logo">
                <img src="images/logo.png" alt="WEB NOVEL PLATFORM">
            </div>
            <nav>
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="library.html" class="active">Library</a></li>
                    <li><a href="writer.html">Writer Space</a></li>
                </ul>
            </nav>
            <div class="user-icon">
                <img src="images/user-icon.png" alt="User">
            </div>
        </div>
    `;
    return header;
}

// Search Section Component
function createSearchSection() {
    const section = document.createElement('section');
    section.className = 'library-search';
    section.innerHTML = `
        <h1>Library</h1>
        <p>This page is where you will find all the novels you might want to read.</p>
        <div class="search-bar">
            <input type="text" placeholder="English Title or Chinese Title">
            <button>Search</button>
            <button class="filter-btn">Filter</button>
        </div>
        <div class="genre-filters">
            <button>All</button>
            <button>Follow</button>
            <button>Fan/Original Novel</button>
        </div>
        <div class="jump-to">
            <label for="jump-select">Jump To:</label>
            <select id="jump-select">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="most-popular">Most Popular</option>
            </select>
        </div>
    `;
    return section;
}

// Novel Item Component
function createNovelItem(novel) {
    const novelItem = document.createElement('div');
    novelItem.className = 'novel-item';
    novelItem.innerHTML = `
        <div class="novel-cover">
            <img src="${novel.cover}" alt="Novel Cover">
        </div>
        <div class="novel-details">
        <a href =''>
            <h2>${novel.title}</h2>
            </a>
            <p>Updated ${novel.updated}</p>
            <p>${novel.description}</p>
            <p><strong>Genre(s):</strong> ${novel.genre}</p>
            <p><strong>Tag(s):</strong> ${novel.tags}</p>
        </div>
        <div class="novel-stats">
            <p><strong>Rating:</strong> ${novel.rating}</p>
            <p><strong>Bookmarks:</strong> ${novel.bookmarks}</p>
            <p><strong>Chapters:</strong> ${novel.chapters}</p>
        </div>
    `;
    return novelItem;
}

// Novel List Section Component
function createNovelList(novels) {
    const section = document.createElement('section');
    section.className = 'novel-list';

    novels.forEach(novel => {
        section.appendChild(createNovelItem(novel));
    });

    return section;
}

// Pagination Component
function createPagination() {
    const pagination = document.createElement('section');
    pagination.className = 'pagination';
    pagination.innerHTML = `
        <button>&laquo;</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <!-- More page numbers -->
        <button>&raquo;</button>
    `;
    return pagination;
}

// Footer Component
function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; 2024 WEB NOVEL PLAFORM Inc. All rights reserved</p>
            <nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">DMCA Policy</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </nav>
        </div>
    `;
    return footer;
}

// Initialize the App
function initApp() {
    const app = document.getElementById('app');

    // Sample data for the novels
    const novels = [
        {
            cover: 'images/novel1.png',
            title: 'The Law Does Not Hold Everyone Responsible! I Am The Director, I Take Responsibility!',
            updated: '1 day ago',
            description: 'Li Yuan opened his eyes and became the director of a police station...',
            genre: 'Urban',
            tags: 'Transmigrated Protagonist',
            rating: '3.5',
            bookmarks: '112',
            chapters: '93',
        },

        {    cover: 'images/novel2.png',
            title: 'I am a necromencer',
            updated: '1 day ago',
            description: 'Li Yuan opened his eyes and became the director of a police station...',
            genre: 'Urban',
            tags: 'Transmigrated Protagonist',
            rating: '3.5',
            bookmarks: '93',
            chapters: '113',
        }, 
        {    cover: 'images/novel3.png',
            title: 'I can copy talent',
            updated: '1 day ago',
            description: 'Li Yuan opened his eyes and became the director of a police station...',
            genre: 'Urban',
            tags: 'Transmigrated Protagonist',
            rating: '3.5',
            bookmarks: '112',
            chapters: '234',
        }, 
        {    cover: 'images/novel4.png',
            title: 'Tower Defense Lord: The First Ten Consecutive SSS-Level Talents',
            updated: '2 day ago',
            description: 'Li Yuan opened his eyes and became the director of a police station...',
            genre: 'Urban',
            tags: 'Transmigrated Protagonist',
            rating: '4',
            bookmarks: '102',
            chapters: '193',
        }, 
        {    cover: 'images/novel5.png',
            title: 'The Law Does Not Hold Everyone Responsible! I Am The Director, I Take Responsibility!',
            updated: '1 day ago',
            description: 'Li Yuan opened his eyes and became the director of a police station...',
            genre: 'Urban',
            tags: 'Transmigrated Protagonist',
            rating: '3',
            bookmarks: '208',
            chapters: '931',
        }, 
        

    ];

    // Create and append components
    app.appendChild(createHeader());
    app.appendChild(createSearchSection());
    app.appendChild(createNovelList(novels));
    app.appendChild(createPagination());
    app.appendChild(createFooter());
}

// Run the app
initApp();
