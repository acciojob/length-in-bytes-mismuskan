const byteSize = (str) => {
  // write your code here
    // Use TextEncoder to encode the string into bytes
    const encoder = new TextEncoder();
    const encodedBytes = encoder.encode(str);

    // Count the number of bytes
	

    return encodedBytes.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
