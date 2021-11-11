export function hashCode(str) { // java String#hashCode
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

export function intToRGB(i){
    let d = (i & 0x9A9A9A) ;
    let c = d.toString(16).toUpperCase();
    return "00000".substring(0, 6 - c.length) + c;
}