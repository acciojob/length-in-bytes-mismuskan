const byteSize = (str) => {
  // write your code here
if (str === '') {
        return 0;
    }

    let byteCount = 0;

    // Use TextEncoder to encode the string into bytes
    const encoder = new TextEncoder();
    const encodedBytes = encoder.encode(str);

    // Count the number of bytes
    for (let index = 0; index < encodedBytes.length; index++) {
        byteCount++;
    }

    return byteCount;
};
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
