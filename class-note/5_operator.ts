// function logMessage(value: any) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);

var seho: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value == 'number'){
        value.toLocaleString();
    }
    else if (typeof value == "string") {
      value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage("hello");
logMessage(100);