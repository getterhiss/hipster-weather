let start = Date.now();
let obj = {timezone}
let keys = Object.keys(currently);
keys.forEach(key => {
        obj[key] = currently[key];
        obj.time = 1540213404;
    })
    let end = Date.now();
    console.log(`time spent ${(end-start)}...`);