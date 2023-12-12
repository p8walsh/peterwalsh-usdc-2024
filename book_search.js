/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */
    
    // Developed with help from w3schools JavaScript tutorial website (https://www.w3schools.com/js/default.asp) and various StackOverflow pages (cited when used)

    var result = {
        "SearchTerm": "",
        "Results": []
    };
    

    // Get all the text lines from the scannedTextObj
    let i = 0;
    let j = 0;
    let text = [];
    let line = "";
    let isbn = "";
    let page = 0;
    let lineNum = 0;
    let results = {ISBN:"", Page:0, Line:0};
    for (book in scannedTextObj){
        //console.log("Book:", scannedTextObj[i]);
        text = scannedTextObj[i].Content;

        j = 0;
        for (element in text){
            line = text[j].Text;
            // Test string.includes(substring) function - found here https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript 
            //console.log("Line: ", line, " includes ", searchTerm, " ", line.includes(searchTerm));

            //console.log(text[j])

            if (line.includes(searchTerm)){
                isbn = scannedTextObj[i].ISBN;
                page = text[j].Page;
                lineNum = text[j].Line;
                results.ISBN = isbn;
                results.Page = page;
                results.Line = lineNum;
                
                // Really dislike the naming here - if I had more time I would change it so it doesn't rely so heavily on capitalization for all the variables
                result.Results.push(results);    
            }

            j++;
        }
        
        i++;
    }

    result.SearchTerm = searchTerm;

    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

/** Test empty input object. */
const emptyIn = [

]
    
/** Test Input object with multiple books */
const multipleIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ]
    },
    {
        "Title": "Test Book",
        "ISBN": "1234",
        "Content": [
            {
                "Page": 1,
                "Line": 2,
                "Text": "test test test test test test"
            },
            {
                "Page": 3,
                "Line": 4,
                "Text": "test test test test test test"
            },
            {
                "Page": 5,
                "Line": 6,
                "Text": "ing ing ing ing ing ing ing"
            }
        ]
    }
]

/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/** Example output object for "The" search */
const twentyLeaguesOutThe = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}


/** Example output object for hyphenated word testing */
const twentyLeaguesOutDarkness = {
    "SearchTerm": "darkness",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

/** Example output objects for empty input testing */
const emptyOut1 = {
    "SearchTerm": "test",
    "Results": [
    ]
}

const emptyOut2 = {
    "SearchTerm": "OWN",
    "Results": [
    ]
}

/** Example output object for multiple input testing */
const multipleOut = {
    "SearchTerm": "test",
    "Results": [
        {
            "ISBN": "1234",
            "Page": 1,
            "Line": 2
        },
        {
            "ISBN": "1234",
            "Page": 3,
            "Line": 4
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** We could choose to check if hyphenated words are detected. */
const test3result = findSearchTermInBooks("darkness", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOutDarkness) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOutDarkness);
    console.log("Received:", test3result);
}

//** We could test what happens when an empty input object is given. */
const test4result = findSearchTermInBooks("test", emptyIn);
if (JSON.stringify(emptyOut1) === JSON.stringify(test4result)){
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", emptyOut1);
    console.log("Received:", test4result);
}

//** We could test what happens when an input object with multiple books is given. */
const test5result = findSearchTermInBooks("test", multipleIn);
if (JSON.stringify(multipleOut) === JSON.stringify(test5result)){
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", multipleOut);
    console.log("Received:", test5result);
}

//** We could test what happens when there should be no matches */
const test6result = findSearchTermInBooks("test", twentyLeaguesIn);
if (JSON.stringify(emptyOut1) === JSON.stringify(test6result)){
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", emptyOut1);
    console.log("Received:", test6result);
}

//** We could test case sensitivity */
const test7result = findSearchTermInBooks("The", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOutThe) === JSON.stringify(test7result)){
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", twentyLeaguesOutThe);
    console.log("Received:", test7result);
}

//** We could test case sensitivity (negative case) */
const test8result = findSearchTermInBooks("OWN", twentyLeaguesIn);
if (JSON.stringify(emptyOut2) === JSON.stringify(test8result)){
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", emptyOut2);
    console.log("Received:", test8result);
}