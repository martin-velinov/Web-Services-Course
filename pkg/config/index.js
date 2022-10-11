const fs = require('fs');

const configPath = `${__dirname}../../../config.json`;


// get the data from the file system
const configDataFromFileSystem = fs.readFileSync(configPath);

// convert the string into a JSON object
const config = JSON.parse(configDataFromFileSystem);


// returns the config for the specified property we send
const getConfigPropertyValue = (key) => {
    // check whether the object has the property we want
    // if (config.hasOwnProperty(key)) { // => true/false check
    //     return config[key];
    // }
    // throw(new Error('Requested property is not present in config object.'))

    if (config[key] === undefined) { // => true/false check
        throw(new Error('Requested property is not present in config object.'));
        // return null;
    }
    return config[key];
};

module.exports = {
     getConfigPropertyValue
}