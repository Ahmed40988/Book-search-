const books = [
    { title: 'The Covenant of Water', author: 'Abraham Verghese', image: 'https://example.com/covenant_of_water.jpg' },
    { title: 'The Wager: A Tale of Shipwreck, Mutiny and Murder', author: 'David Grann', image: 'https://example.com/the_wager.jpg' },
    { title: 'Disobedient', author: 'Elizabeth Fremantle', image: 'https://example.com/disobedient.jpg' },
    { title: 'Small Mercies', author: 'Dennis Lehane', image: 'https://example.com/small_mercies.jpg' },
    { title: 'Our Migrant Souls', author: 'Héctor Tobar', image: 'https://example.com/our_migrant_souls.jpg' },
    { title: 'You Could Make This Place Beautiful', author: 'Maggie Smith', image: 'https://example.com/you_could_make_this_place_beautiful.jpg' },
    { title: 'Victory City', author: 'Salman Rushdie', image: 'https://example.com/victory_city.jpg' },
    { title: 'Master Slave Husband Wife', author: 'Ilyon Woo', image: 'https://example.com/master_slave_husband_wife.jpg' },
    { title: 'The Future', author: 'Naomi Alderman', image: 'https://example.com/the_future.jpg' },
    { title: 'The Late Americans', author: 'Brandon Taylor', image: 'https://example.com/the_late_americans.jpg' },
    { title: 'Happiness Falls', author: 'Angie Kim', image: 'https://example.com/happiness_falls.jpg' },
    { title: 'The Secret Hours', author: 'Mick Herron', image: 'https://example.com/the_secret_hours.jpg' },
    { title: 'Mobility', author: 'Lydia Kiesling', image: 'https://example.com/mobility.jpg' },
    { title: 'Vengeance Is Mine', author: 'Marie NDiaye', image: 'https://example.com/vengeance_is_mine.jpg' },
    { title: 'The Great Reclamation', author: 'Rachel Heng', image: 'https://example.com/the_great_reclamation.jpg' },
    { title: 'Roman Stories', author: 'Jhumpa Lahiri', image: 'https://example.com/roman_stories.jpg' },
    { title: 'Pageboy: A Memoir', author: 'Elliot Page', image: 'https://example.com/pageboy.jpg' },
    { title: 'August Blue', author: 'Deborah Levy', image: 'https://example.com/august_blue.jpg' },
    { title: 'The Woman in Me', author: 'Britney Spears', image: 'https://example.com/the_woman_in_me.jpg' },
    { title: 'Old God’s Time', author: 'Sebastian Barry', image: 'https://example.com/old_gods_time.jpg' },
    { title: 'After the Funeral and Other Stories', author: 'Tessa Hadley', image: 'https://example.com/after_the_funeral.jpg' },
    { title: 'In Memoriam', author: 'Alice Winn', image: 'https://example.com/in_memoriam.jpg' },
    { title: 'Same Bed Different Dreams', author: 'Ed Park', image: 'https://example.com/same_bed_different_dreams.jpg' },
    { title: 'The MANIAC', author: 'Benjamin Labatut', image: 'https://example.com/the_maniac.jpg' },
    { title: 'The Postcard', author: 'Anne Berest', image: 'https://example.com/the_postcard.jpg' },
    { title: 'When Crack Was King', author: 'Donovan X. Ramsey', image: 'https://example.com/when_crack_was_king.jpg' },
    { title: 'Anansi’s Gold', author: 'Yepoka Yeebo', image: 'https://example.com/anansis_gold.jpg' },
    { title: 'Red Memory', author: 'Tania Branigan', image: 'https://example.com/red_memory.jpg' },
    { title: 'The Iliad', author: 'Homer, translated by Emily Wilson', image: 'https://example.com/the_iliad.jpg' },
    { title: 'Wifedom: Mrs. Orwell’s Invisible Life', author: 'Anna Funder', image: 'https://example.com/wifedom.jpg' },
    { title: 'Liliana’s Invincible Summer', author: 'Cristina Rivera Garza', image: 'https://example.com/lilianas_invincible_summer.jpg' },
    { title: 'Judgment at Tokyo', author: 'Gary J. Bass', image: 'https://example.com/judgment_at_tokyo.jpg' },
    { title: 'A Thread of Violence', author: 'Mark O’Connell', image: 'https://example.com/a_thread_of_violence.jpg' },
    { title: 'The New Life', author: 'Tom Crewe', image: 'https://example.com/the_new_life.jpg' },
    { title: 'The Hive and the Honey', author: 'Paul Yoon', image: 'https://example.com/the_hive_and_the_honey.jpg' },
    { title: 'Roman Stories', author: 'Jhumpa Lahiri', image: 'https://example.com/roman_stories.jpg' },
    { title: 'The Faraway World', author: 'Patricia Engel', image: 'https://example.com/the_faraway_world.jpg' },
    { title: 'The Rachel Incident', author: 'Caroline O’Donoghue', image: 'https://example.com/the_rachel_incident.jpg' },
    { title: 'Roaming', author: 'Jillian Tamaki and Mariko Tamaki', image: 'https://example.com/roaming.jpg' },
    { title: 'Eve: How the Female Body Drove 200 Million Years of Human Evolution', author: 'Cat Bohannon', image: 'https://example.com/eve.jpg' },
    { title: 'Enter Ghost', author: 'Isabella Hammad', image: 'https://example.com/enter_ghost.jpg' },
    { title: 'Wednesday’s Child: Stories', author: 'Yiyun Li', image: 'https://example.com/wednesdays_child.jpg' },
    { title: 'The Unsettled', author: 'Ayana Mathis', image: 'https://example.com/the_unsettled.jpg' },
    { title: 'A People’s History of a Misunderstood Era', author: 'Donovan X. Ramsey', image: 'https://example.com/a_peoples_history.jpg' },
    { title: 'The Rediscovery of America', author: 'Ned Blackhawk', image: 'https://example.com/the_rediscovery_of_america.jpg' },
    { title: 'Some People Need Killing', author: 'Patricia Evangelista', image: 'https://example.com/some_people_need_killing.jpg' },
    { title: 'Monica', author: 'Daniel Clowes', image: 'https://example.com/monica.jpg' },
    { title: 'The Art Thief', author: 'Michael Finkel', image: 'https://example.com/the_art_thief.jpg' },
];

function displayBooks(booksToDisplay) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    booksToDisplay.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'card';
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}" />
            <h2>${book.title}</h2>
            <p>by ${book.author}</p>
        `;
        resultsDiv.appendChild(bookCard);
    });
}

function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
    );

    if (filteredBooks.length === 0) {
        document.getElementById('results').innerHTML = '<p>No books found.</p>';
    } else {
        displayBooks(filteredBooks);
    }
}


displayBooks(books);



function displayBooks(booksToDisplay) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    booksToDisplay.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'card';
        bookCard.innerHTML = `<h2>${book.title}</h2><p>by ${book.author}</p>`;
        resultsDiv.appendChild(bookCard);
    });
}

function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
    );

    if (filteredBooks.length === 0) {
        document.getElementById('results').innerHTML = '<p>No books found.</p>';
    } else {
        displayBooks(filteredBooks);
    }
}


displayBooks(books);
