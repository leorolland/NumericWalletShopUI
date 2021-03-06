const Serialport = require("serialport");
const EventEmitter = require('events');

class Lecture extends EventEmitter {
    /**
     * Instancialise une classe de lecture de port Série sur le port donné
     * @param {string} portName Nom du port de série
     */
    constructor(portName) {
        super()
        this.portName = portName
        this.enableListener()
    }

    mockReception() {
        setTimeout(() => {
            this.emit('cardRead', "123")
        }, 2000);
    }

    enableListener() {
        console.log("Initialisation de l'écoute sur le port " + this.portName)

        try {
            this.sp = new Serialport(this.portName, {baudRate: 9600});
            this.parser = new Serialport.parsers.Readline()
            this.sp.pipe(this.parser);
            const that = this
            this.parser.addListener('data', function (data) {
                that.emit('cardRead', data)
            });
            console.log("Succès ! En attente de lecture de carte ...")
        } catch(e) {
            console.log("Echec de l'écoute, vérifiez le port série")
            throw e;
        }

    }
    disableListener() {
        console.log("Désactivation écoute")
        this.sp.close(()=>{})
        this.sp.destroy()
        this.parser.destroy()
    }
    reloadListener() {
        this.disableListener()
        this.enableListener()
    }
    setSerialPort(portName) {
        this.portName = portName
        this.reloadListener()
    }

}

// const portName = "/dev/tty.usbmodem14101";
// let x = new Lecture(portName);
// x.on('cardRead', function (data) {
//     console.log("INTERFACE: " + data)
// })
// setTimeout(() => {
//     x.setSerialPort("COM3")
// }, 10000);
// setTimeout(() => {
//     x.setSerialPort(portName)
// }, 17000);
// x.mockReception()
module.exports = Lecture