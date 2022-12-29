
const baseUrl = "http://localhost:3232/"
export async function GetGames() {

    const options = {
        method: "GET",
        // body: JSON.stringify(forms),
        headers: {
            "Content-type": "Application/json",
            // "Authorization": `Bearer ${token}`
        },
    }



    const request = fetch(`${baseUrl}games`, options)
        .then((res)=> res.json())
        .then((res)=>{
            return res
        })
        .catch((erro) => console.log(erro))

    return request
    
}