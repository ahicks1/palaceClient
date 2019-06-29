
/**
 * 
 * @param {string} name 
 * @param {string} [address]
 * @param {string} [port]
 */
function startRoom(name,address,port) {
    
}
exports.startRoom = startRoom

/**
 * Creates a new room
 * @param {string} roomCode
 * @param {string} name 
 * @param {string} [address]
 * @param {string} [port]
 */
function joinRoom(roomCode,name,address,port) {
    let room =  new Room(roomCode);
    room
    
}
exports.joinRoom = joinRoom

/**
 * @typedef {string} ClientID
 * A eight character alpha-numeric string identifying a specific client 
 * connected to Palace.
 * 
 * Conforms to the regex: "[0-9a-fA-F]{8}"
 */

/**
 * A class holding a room's information
 * @constructor
 * @param {String} name - Username
 * @param {String=} roomCode - Four letter room code
 * @param {String=} address - URL of the server
 * @param {numeric=} port - Port of the serever. Defaults to 8080
 * 
 * @property {String} id - Four letter room code
 * @property {ClientID[]} clients - The list of clients connected to the room
 * @property {ClientID} controller - The client ID of the room controller
 * @property {Object} options - An object holding the options for the room
 * @property {Boolean} options.broadcastConnections
 * @property {Boolean} options.allowReconnecting
 * @property {Boolean} options.privateRoom
 * @property {Boolean} options.allowClientToClient
 * @property {Integer} options.roomSize\
 */
function Room(name,roomCode,address,port) {
    this.id = roomCode;
    this.clients = [];
    this.controller;
    this.options = {};
    let queryString = `?name=${name}${roomCode?"&room="+roomCode:""}`;
    let url = `ws://${address}:${port}/${roomCode?"join":"start"}${queryString}`;
    console.log(url);
    //this.conn = WebSocket("ws://localhost:8080");
}

exports.Room = Room;