const WebSocket = require('ws');
const url = require('url');

const port = 8080;

const server = new WebSocket.Server({ port });
console.log(`Server is running on port ${port}`);
let connections = {};

server.on('connection', (ws, req) => {
  const params = new url.URL(req.url, `http://localhost:${port}`).searchParams;
  const userID = params.get('userID');
  console.log(`User ${userID} connected`);

  if (userID) {
    connections[userID] = ws;
    console.log(`User ${userID} is now connected`);
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        console.log(`Received message from user ${userID}:`, data);
      
        if (data.isKeyLate) {
          // If the key is late, send a message back to the client
          ws.send(JSON.stringify({ message: 'Key is late', sender: userID }));
        } else {
          const recipientID = data.recipient;
      
          if (connections[recipientID]) {
            connections[recipientID].send(JSON.stringify({ message: data.content, sender: userID }));
          } else {
            // Handle recipient not found scenario (e.g., send error message)
            ws.send(JSON.stringify({ error: 'Recipient not found' }));
          }
        }
      });
  } else {
    // Handle missing user ID scenario (e.g., close connection)
    ws.close();
  }
});

// Removed the sendPushNotification function (no longer needed)
