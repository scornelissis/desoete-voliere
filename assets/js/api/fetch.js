const BASE_URL = "https://api.jsongpt.com/json?prompt=Genereer 5 vogel weetjes &facts=array of bird facts"

function betterFetch(){
    response = fetch(`${BASE_URL}`,
        {
            method: "GET",
            headers: {
            "Content-Type": "application/json"
            }
        }
    )

    return response.json;
}

export {betterFetch}