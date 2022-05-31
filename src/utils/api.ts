export async function ecessApiCall(
    {path, headers, parameters, user, url, type, body, expectReturn}: {
    path: string,
    parameters?: any,
    headers?:any,
    user?:any,
    url?:any,
    type?:any,
    body?: Object,
    expectReturn?: boolean
}) {
    if (url === undefined) {
        url = process.env.REACT_APP_API_URL || "https://ecess-api.herokuapp.com";
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
        const f = fetch(url,
            {
                method: type,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body) || undefined
            });
        if (expectReturn || type !== "POST") {
            f.then(res => res.json())
                .then(response => {
                    resolve(response)
                })
                .catch(e => {
                    resolve([]);
                    console.log(e);
                });
        }
        else {
            f.then(() => {
                resolve(undefined);
            })
        }
    })
}