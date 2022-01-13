import {User} from "firebase/auth";

export async function ecessApiCall(
    {path, headers, parameters: parameters, user, url}: {
    path: string,
    parameters?: any,
    headers?:any,
    user?:any,
    url?:any
}) { 
    if (url === undefined) {
        url = process.env.REACT_APP_API_URL || "https://ecess-api.matthewwen.com/ecess";
    }
    let token: undefined | string = undefined;
    if (user) {
        token = await user.getIdToken();
    }
    return new Promise((resolve) => {
        if (path) {
            url += "/" + path;
        }
        if (parameters) {
            url += "?"
            let count = 0;
            for (const [key, value] of Object.entries(parameters)) {
                if (count > 0) {
                    url += "&";
                }
                url += `${key}=${value}`;
                count += 1;
            }
        }
        fetch(url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(res => res.json())
            .then(response => {
                resolve(response)
            })
            .catch(e => {
                resolve([]);
                console.log(e);
            });
    })
}