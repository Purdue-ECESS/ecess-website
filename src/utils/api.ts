
export function ecessApiCall(path: string, headers: any, paramters: object | undefined,
                             url: string = "https://ecess-api.matthewwen.com") {
    return new Promise((resolve) => {
        if (path) {
            url += "/" + path;
        }
        if (paramters) {
            url += "?"
            let count = 0;
            for (const [key, value] of Object.entries(paramters)) {
                if (count > 0) {
                    url += "&";
                }
                url += `${key}=${value}`;
                count += 1;
            }
        }
        fetch(url,
            {
                method: 'GET'
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