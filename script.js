document.addEventListener('DOMContentLoaded', () => {
    // Get the button elements by their IDs
    const searchButton = document.getElementById('Search');
    const sortAZButton = document.getElementById('sortAZ');
    const sortZAButton = document.getElementById('sortZA');
    const sortMarksButton = document.getElementById('sortMarks');
    const sortPassingButton = document.getElementById('sortPassing');
    const sortClassButton = document.getElementById('sortClass');
    const sortGenderButton = document.getElementById('sortGender');

    const students = [
        { "id": 1, "first_name": "Chadwick", "last_name": "Ayre", "email": "cayre0@cam.ac.uk", "gender": "Male", "class": 11, "marks": 18, "passing": false },
        { "id": 2, "first_name": "Abrahan", "last_name": "Seabrocke", "email": "aseabrocke1@ocn.ne.jp", "gender": "Male", "class": 3, "marks": 27, "passing": true },
        { "id": 3, "first_name": "Nathanael", "last_name": "Laye", "email": "nlaye2@typepad.com", "gender": "Male", "class": 10, "marks": 89, "passing": false },
        { "id": 4, "first_name": "Luigi", "last_name": "Balcers", "email": "lbalcers3@reverbnation.com", "gender": "Agender", "class": 8, "marks": 30, "passing": false },
        { "id": 5, "first_name": "Adam", "last_name": "Gurg", "email": "agurg4@xrea.com", "gender": "Male", "class": 3, "marks": 10, "passing": true },
        { "id": 6, "first_name": "Kev", "last_name": "Haitlie", "email": "khaitlie5@booking.com", "gender": "Male", "class": 1, "marks": 59, "passing": true },
        { "id": 7, "first_name": "Reinhard", "last_name": "Royl", "email": "rroyl6@sun.com", "gender": "Male", "class": 7, "marks": 72, "passing": true },
        { "id": 8, "first_name": "Nonah", "last_name": "Kilmartin", "email": "nkilmartin7@washington.edu", "gender": "Female", "class": 9, "marks": 4, "passing": false },
        { "id": 9, "first_name": "Clo", "last_name": "Falkinder", "email": "cfalkinder8@mysql.com", "gender": "Female", "class": 6, "marks": 9, "passing": false },
        { "id": 10, "first_name": "Clyve", "last_name": "Dedney", "email": "cdedney9@europa.eu", "gender": "Male", "class": 12, "marks": 57, "passing": false },
        { "id": 11, "first_name": "Vincenz", "last_name": "Surphliss", "email": "vsurphlissa@soup.io", "gender": "Male", "class": 4, "marks": 2, "passing": true },
        { "id": 12, "first_name": "Helene", "last_name": "Griffitts", "email": "hgriffittsb@umn.edu", "gender": "Female", "class": 12, "marks": 80, "passing": true },
        { "id": 13, "first_name": "Lydia", "last_name": "Pamphilon", "email": "lpamphilonc@mit.edu", "gender": "Female", "class": 5, "marks": 81, "passing": false },
        { "id": 14, "first_name": "Dov", "last_name": "Cubbini", "email": "dcubbinid@theguardian.com", "gender": "Genderqueer", "class": 12, "marks": 25, "passing": true },
        { "id": 15, "first_name": "Mimi", "last_name": "Monksfield", "email": "mmonksfielde@mapquest.com", "gender": "Female", "class": 4, "marks": 52, "passing": true },
        { "id": 16, "first_name": "Marguerite", "last_name": "Evanson", "email": "mevansonf@huffingtonpost.com", "gender": "Female", "class": 10, "marks": 96, "passing": true },
        { "id": 17, "first_name": "Michele", "last_name": "Haresnaip", "email": "mharesnaipg@networkadvertising.org", "gender": "Male", "class": 9, "marks": 46, "passing": true },
        { "id": 18, "first_name": "Johnna", "last_name": "Briars", "email": "jbriarsh@behance.net", "gender": "Agender", "class": 9, "marks": 77, "passing": false },
        { "id": 19, "first_name": "Debee", "last_name": "Bonnier", "email": "dbonnieri@opensource.org", "gender": "Female", "class": 2, "marks": 35, "passing": false },
        { "id": 20, "first_name": "Gunther", "last_name": "Taveriner", "email": "gtaverinerj@google.ca", "gender": "Male", "class": 1, "marks": 72, "passing": true },
        { "id": 21, "first_name": "Dominick", "last_name": "Coppock.", "email": "dcoppockk@mlb.com", "gender": "Genderqueer", "class": 9, "marks": 10, "passing": false },
        { "id": 22, "first_name": "Harp", "last_name": "Colebrook", "email": "hcolebrookl@gravatar.com", "gender": "Male", "class": 4, "marks": 83, "passing": false },
        { "id": 23, "first_name": "Carlen", "last_name": "Bakeup", "email": "cbakeupm@craigslist.org", "gender": "Female", "class": 2, "marks": 28, "passing": false },
        { "id": 24, "first_name": "Mario", "last_name": "Crambie", "email": "mcrambien@so-net.ne.jp", "gender": "Male", "class": 9, "marks": 33, "passing": true },
        { "id": 25, "first_name": "Maribel", "last_name": "Hindenburg", "email": "mhindenburgo@squarespace.com", "gender": "Female", "class": 3, "marks": 24, "passing": true },
        { "id": 26, "first_name": "Merilee", "last_name": "Lukock", "email": "mlukockp@rambler.ru", "gender": "Female", "class": 6, "marks": 25, "passing": false },
        { "id": 27, "first_name": "Carroll", "last_name": "Waterfield", "email": "cwaterfieldq@paypal.com", "gender": "Male", "class": 5, "marks": 93, "passing": false },
        { "id": 28, "first_name": "Sandor", "last_name": "Muldoon", "email": "smuldoonr@usda.gov", "gender": "Male", "class": 9, "marks": 52, "passing": true },
        { "id": 29, "first_name": "Hagan", "last_name": "Ghidini", "email": "hghidinis@upenn.edu", "gender": "Male", "class": 8, "marks": 100, "passing": true },
        { "id": 30, "first_name": "Odetta", "last_name": "McNamara", "email": "omcnamarat@hugedomains.com", "gender": "Genderfluid", "class": 11, "marks": 48, "passing": false },
        { "id": 31, "first_name": "Rozelle", "last_name": "Meller", "email": "rmelleru@uol.com.br", "gender": "Bigender", "class": 6, "marks": 81, "passing": true },
        { "id": 32, "first_name": "Burnaby", "last_name": "Hebbron", "email": "bhebbronv@toplist.cz", "gender": "Male", "class": 10, "marks": 6, "passing": false },
        { "id": 33, "first_name": "Tommy", "last_name": "Sowley", "email": "tsowleyw@drupal.org", "gender": "Male", "class": 10, "marks": 42, "passing": true },
        { "id": 34, "first_name": "Cristen", "last_name": "Vigietti", "email": "cvigiettix@cnn.com", "gender": "Female", "class": 6, "marks": 13, "passing": false },
        { "id": 35, "first_name": "Kipp", "last_name": "Shipsey", "email": "kshipseyy@wunderground.com", "gender": "Male", "class": 8, "marks": 72, "passing": true },
        { "id": 36, "first_name": "Willi", "last_name": "Deeprose", "email": "wdeeprosez@youku.com", "gender": "Female", "class": 1, "marks": 50, "passing": false },
        { "id": 37, "first_name": "Julita", "last_name": "Coverdale", "email": "jcoverdale10@etsy.com", "gender": "Female", "class": 7, "marks": 9, "passing": false },
        { "id": 38, "first_name": "Kippy", "last_name": "Dysart", "email": "kdysart11@springer.com", "gender": "Male", "class": 2, "marks": 77, "passing": true },
        { "id": 39, "first_name": "Xena", "last_name": "Cleen", "email": "xcleen12@usatoday.com", "gender": "Female", "class": 11, "marks": 25, "passing": false },
        { "id": 40, "first_name": "Deane", "last_name": "Hallbird", "email": "dhallbird13@reference.com", "gender": "Male", "class": 2, "marks": 99, "passing": false },
        { "id": 41, "first_name": "Brigham", "last_name": "Boggish", "email": "bboggish14@xinhuanet.com", "gender": "Male", "class": 4, "marks": 96, "passing": false },
        { "id": 42, "first_name": "Arliene", "last_name": "Stubbins", "email": "astubbins15@yellowpages.com", "gender": "Female", "class": 6, "marks": 39, "passing": false },
        { "id": 43, "first_name": "Keefer", "last_name": "Mensler", "email": "kmensler16@moonfruit.com", "gender": "Male", "class": 10, "marks": 9, "passing": false },
        { "id": 44, "first_name": "De witt", "last_name": "Lethby", "email": "dlethby17@biblegateway.com", "gender": "Male", "class": 5, "marks": 15, "passing": true },
        { "id": 45, "first_name": "Karry", "last_name": "Alflat", "email": "kalflat18@eepurl.com", "gender": "Female", "class": 9, "marks": 28, "passing": false },
        { "id": 46, "first_name": "Etan", "last_name": "Wardell", "email": "ewardell19@usgs.gov", "gender": "Male", "class": 11, "marks": 26, "passing": false },
        { "id": 47, "first_name": "Corney", "last_name": "Kollaschek", "email": "ckollaschek1a@discuz.net", "gender": "Male", "class": 3, "marks": 34, "passing": true },
    ];

    const searchTextInput = document.getElementById('searchtext');
    const tableBody = document.querySelector('tbody');

    // Function to render students in the table
    function renderStudents(students) {
        tableBody.innerHTML = ''; // Clear previous table rows
        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.first_name} ${student.last_name}</td>
                <td>${student.gender}</td>
                <td>${student.class}</td>
                <td>${student.marks}</td>
                <td>${student.passing ? 'Yes' : 'No'}</td>
                <td>${student.email}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Search functionality
    searchButton.addEventListener('click', () => {
        const searchText = searchTextInput.value.toLowerCase();
        const filteredStudents = students.filter(student =>
            `${student.first_name} ${student.last_name}`.toLowerCase().includes(searchText) ||
            student.email.toLowerCase().includes(searchText)
        );
        renderStudents(filteredStudents);
    });

    // Sorting functions
    sortAZButton.addEventListener('click', () => {
        const sortedAZ = [...students].sort((a, b) => `${a.first_name} ${a.last_name}`.localeCompare(`${b.first_name} ${b.last_name}`));
        renderStudents(sortedAZ);
    });

    sortZAButton.addEventListener('click', () => {
        const sortedZA = [...students].sort((a, b) => `${b.first_name} ${b.last_name}`.localeCompare(`${a.first_name} ${a.last_name}`));
        renderStudents(sortedZA);
    });

    sortMarksButton.addEventListener('click', () => {
        const sortedMarks = [...students].sort((a, b) => b.marks - a.marks);
        renderStudents(sortedMarks);
    });

    sortPassingButton.addEventListener('click', () => {
        const sortedPassing = [...students].sort((a, b) => b.passing - a.passing);
        renderStudents(sortedPassing);
    });

    sortClassButton.addEventListener('click', () => {
        const sortedClass = [...students].sort((a, b) => a.class - b.class);
        renderStudents(sortedClass);
    });

    sortGenderButton.addEventListener('click', () => {
        const sortedGender = [...students].sort((a, b) => a.gender.localeCompare(b.gender));
        renderStudents(sortedGender);
    });

    // Initially render all students
    renderStudents(students);
});

