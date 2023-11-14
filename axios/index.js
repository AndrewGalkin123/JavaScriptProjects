const axios = require('axios').default;



// axios.get("https://fortnite-api.com/v1/map", {header: {"Content type": "application/json"}})
// .then(response => (
//     console.log(response.data)
// )).catch(error => console.log(error));

axios.post("https://jsonplaceholder.typicode.com/posts", { userId: 1, title: "Michael", body: "16 years" })
    .then(response => (
        console.log(response.data)
    ))
    .catch(error => console.log(error));

axios({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
        userId: 1, 
        title: "Michael", 
        body: "16 years"
    }
}) 
.then(response => (
    console.log(response.data)
))
.catch(error => console.log(error));
