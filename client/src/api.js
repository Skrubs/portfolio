
const serverPort = 'http://localhost:5001/users';




export function getAllUsers(){
    return fetch(`${serverPort}/users`)
        .then(response =>{
            if(!response.ok){
                throw new Error("Trouble getting users.");
            }
                return response.json();
        })
        .then(data =>{
            console.log(data);
            return data;
        })
        .catch(error =>{console.error("error fetching"), error});
}