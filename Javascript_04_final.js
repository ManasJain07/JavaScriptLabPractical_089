function startLibSystem() {
    try {
        let choice = prompt(
            "Library Menu:\n\n" +
            "1. Compare two books by page count\n" +
            "2. Generate a Ticket ID using Factorial\n" +
            "3. Check if a note mentions the word 'Library'\n" +
            "4. Save & Retrieve a Rare Book Note (Closure)\n" +
            "5. Reverse an ISBN & check if it’s a Palindrome\n" +
            "6. Check if a Book Title is a Palindrome\n" +
            "7. Find the Square Root of total pages read\n" +
            "8. Check if a Shelf Number is Prime\n" +
            "0. Exit\n\n" +
            "Enter your choice (0-8):"
        );

        if (choice === null) return;

        switch (parseInt(choice)) {
            case 1: compareBooks(); break;
            case 2: generateTicket(); break;
            case 3: searchLibraryWord(); break;
            case 4: saveRareNote(); break;
            case 5: checkISBNPalindrome(); break;
            case 6: checkTitlePalindrome(); break;
            case 7: squareRootOfPages(); break;
            case 8: checkPrimeShelf(); break;
            case 0: alert("Thank you! Exiting the Library System."); return;
            default: alert("Invalid choice. Please try again.");
        }

        startLibSystem();
    } catch (err) {
        alert("Error: " + err.message);
    }
}

function compareBooks() {
    try {
        let book1 = prompt("Enter the first book's title:");
        let pages1 = parseInt(prompt("How many pages does '" + book1 + "' have?"));

        let book2 = prompt("Enter the second book's title:");
        let pages2 = parseInt(prompt("How many pages does '" + book2 + "' have?"));

        if (isNaN(pages1) || isNaN(pages2)) throw new Error("Page counts must be numbers.");

        let biggerBook = pages1 > pages2 ? book1 : book2;
        alert("The book with more pages is: " + biggerBook);
    } catch (err) {
        alert("Error: " + err.message);
    }
}

function generateTicket() {
    try {
        let num = parseInt(prompt("Enter a number to generate your Library Ticket ID:"));
        if (isNaN(num) || num < 0) throw new Error("Please enter a valid non-negative number.");

        let factorial = 1;
        for (let i = 1; i <= num; i++) factorial *= i;

        alert("Your Library Ticket ID is: " + factorial);
    } catch (err) {
        alert("Error: " + err.message);
    }
}

function searchLibraryWord() {
    try {
        let note = prompt("Type the note you want to check:");
        if (!note) throw new Error("Note cannot be empty.");
        alert("Does the note mention 'Library'? " + note.includes("Library"));
    } catch (err) {
        alert("Error: " + err.message);
    }
}

function saveRareNote() {
    try {
        function createNote() {
            let note = prompt("Write down your rare book note (it will be saved):");
            return function () { return note; };
        }
        let rareNote = createNote();
        alert("Stored Rare Book Note: " + rareNote());
    } catch (err) {
        alert("Error: " + err.message);
    }
}

function checkISBNPalindrome() {
    try {
        let isbn = prompt("Enter the ISBN number:");
        if (!isbn || isNaN(isbn)) throw new Error("ISBN must be a valid number.");

        let reversed = isbn.split("").reverse().join("");
        let isPalindrome = (isbn === reversed);

        alert("Reversed ISBN: " + reversed + "\nPalindrome? " + isPalindrome);
    } catch (err) {
        alert("Error: " + err.message);
    }
}

function checkTitlePalindrome() {
    try {
        let title = prompt("Enter the book title:");
        if (!title) throw new Error("Title cannot be empty.");

        let cleanTitle = title.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let reversed = cleanTitle.split("").reverse().join("");
        let isPalindrome = (cleanTitle === reversed);

        alert("Is '" + title + "' a palindrome? " + isPalindrome);
    } catch (err) {
        alert("Error: " + err.message);
    }
}

function squareRootOfPages() {
    try {
        let pages = parseInt(prompt("Enter the total number of pages read:"));
        if (isNaN(pages) || pages < 0) throw new Error("Pages must be a valid positive number.");

        alert("Square root of " + pages + " pages is: " + Math.sqrt(pages).toFixed(2));
    } catch (err) {
        alert("Error: " + err.message);
    }
}

function checkPrimeShelf() {
    try {
        let shelf = parseInt(prompt("Enter the shelf number:"));
        if (isNaN(shelf) || shelf <= 1) throw new Error("Shelf number must be greater than 1.");

        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(shelf); i++) {
            if (shelf % i === 0) { isPrime = false; break; }
        }

        alert("Is shelf number " + shelf + " prime? " + isPrime);
    } catch (err) {
        alert("Error: " + err.message);
    }
}

startLibSystem( );
