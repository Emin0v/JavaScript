class Request {

    get(url) { // Get Request

        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    }

    post(url, data) { // Post Request

        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset-UTF 8 "
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }

    put(url,data){ // Put Request

        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset-UTF 8 "
                }
            })
               .then(respone => respone.json())
               .then(data => resolve(data))
               .catch(err => reject(err));
        });
    }

    delete(url){ // Put Request

        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: "DELETE"
            })
               .then(respone => resolve("successfuly deleted"))
               .catch(err => reject(err));
        });
    }

}
const request = new Request();
// let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(data =>{
//     albums = data ;
//     console.log(albums);
// }).catch(err => console.log(err));

// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Mahammad" })
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));

// request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 10, title: "Mahammad" })
// .then(answer => console.log(answer))
// .catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.log(err));