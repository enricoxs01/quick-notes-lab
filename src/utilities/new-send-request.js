export default async function newsendRequest(newNote){ 
console.log("newNote is " + newNote)

fetch('/api/notes/new', {
    method: 'POST',
    body: JSON.stringify(newNote),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
    })
     .then((response) => response.json())
     .then((data) => {
        console.log(data);
        // Handle data
     })
     .catch((err) => {
        console.log(err)
        console.log(err.message);
     });
    }