
function foo(data) {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            if (typeof data === "string") {
                resolve("correct data :"+data);
            } else {
                reject("Please enter string");
            }

        }, 5000);

    });

}

foo("salam").then(response=>{
    console.log(response);
    return new Error("maraqli error");
}).then(resp=>console.log(resp)).catch(err=>console.err(err));