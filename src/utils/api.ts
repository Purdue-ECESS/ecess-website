export async function ecessApiCall(
    {path, headers, parameters, user, url, type, body}: {
    path: string,
    parameters?: any,
    headers?:any,
    user?:any,
    url?:any,
    type?:any,
    body?: Object
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
                method: type,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body) || undefined
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