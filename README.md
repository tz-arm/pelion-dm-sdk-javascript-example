# pelion-dm-sdk-javascript-example
The official javascript sdk example can be found in [mbed-cloud-sdk/examples/](https://github.com/ARMmbed/mbed-cloud-sdk-javascript/tree/master/examples), 
this repo is the supplementary include more basic examples for simple APIs or use cases.


## Prerequisite

### Device

Run the firmware of [Quick Connect](https://cloud.mbed.com/quick-start) on your target board. Get your device ID (Endpoint Name, at the last line in the example output below).

```
Starting Simple Mbed Cloud Client example
Connecting to the network using Ethernet...
Connected to the network successfully. IP address: 10.128.4.85
[Simple Cloud Client] Autoformatting the storage.
[Simple Cloud Client] Reset storage to an empty state.
[Simple Cloud Client] Starting developer flow
Initialized Mbed Cloud Client. Registering...
Connected to Mbed Cloud. Endpoint Name: 0165885edb66000000000001001002ef
```
### node

** Note minumum version has increased from 4 to 6 on account of 4 no longer being maintained. **
[Node.js > v6.0.0](https://nodejs.org), which includes `npm`.

## Setup Examples

```bash
$ git clone https://github.com/tz-arm/pelion-dm-sdk-javascript-example.git
$ cd pelion-dm-sdk-javascript-example
$ npm install
```

### API Keys
These examples utilise a [config.js](config.js) file which can read an API Key (and optionally a host) from an environment variable, a command line switch or from the file itself.

* You can simply edit the [config.js](node/config.js) file and add your key nd other variables like device ID (Endpoint Name)

  or 
* To use environment variables, set the varaible `MBED_CLOUD_SDK_API_KEY` prior to running the application. e.g.:

    ```bash
    $ export MBED_CLOUD_SDK_API_KEY=<Mbed Cloud API Key>
    ```
  or 
* To use a command line switch, pass your API key to the program being run. e.g.:
    ```bash
    $ node <path to example.js> <Mbed Cloud API Key>
    ```
    or:
    ```bash
    $ node <path to example.js> --apiKey=<Mbed Cloud API Key>
    ```


### Run Example

`$ node node_xxx.js`


# Build New Application

The SDK is distributed using npm, create new project and install the package in your project:

```bash
$ npm init  
$ mkdir myApp
$ cd myApp
$ npm install mbed-cloud-sdk
```

`./myApp/node_modules/mbed-cloud-sdk` now contains:

* `bundles` - minified browser scripts.
* `lib` - Node.js modules.
* `examples` - contains all examples.
