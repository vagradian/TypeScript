function checkObject(obj, keys) {
    return keys.every(function (key) { return key in obj && typeof obj[key] === "number"; });
}
