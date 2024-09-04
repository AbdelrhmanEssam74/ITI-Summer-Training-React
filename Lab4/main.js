// Task 1
function GetFromURL(url) {
    fetch(url)
        .then(response => response.json())
        .then(users => console.log(users))
        .catch(error => console.error(error));
}

GetFromURL('https://jsonplaceholder.typicode.com/users');
///////////////////////////////////////////////////////////////////////
// Task 2
async function GetFromURL2(url) {
    try {
        const response = await fetch(url);
        const users = await response.json()
        console.log(users)
    } catch (e) {
        console.error(e)
    }
}

GetFromURL2("https://jsonplaceholder.typicode.com/users")
///////////////////////////////////////////////////////////////////////
// Task 3
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
}).then(response => response.json())
    .then(json => console.log(json));
///////////////////////////////////////////////////////////////////////
// Task 5
const numbers = [1, 2, 3, 4, 5]
const newNumbers = [...numbers, 6, 7, 8, 9]
///////////////////////////////////////////////////////////////////////
// Task 7