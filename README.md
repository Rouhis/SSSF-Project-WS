# SSSF-Project-WS

## Installation Guide for WebSocket Server

This guide will walk you through the steps to install and run the WebSocket server on your local machine.

## Prerequisites

Node.js and npm installed on your machine. You can download Node.js and npm from here.

**Steps**

Clone the repository

Open a terminal and run the following command to clone the repository:

```bash
git clone <repository-url>
```

Replace <repository-url> with the URL of the repository.

Navigate to the project directory

Use the following command to navigate to the project directory:

Replace <project-directory> with the name of the directory where the project is located.

Install the dependencies

```bash
npm install
```

## Run the following command to install the project dependencies:

**Start the server**

Use the following command to start the server:

```bash
node server.js
```

The server should now be running on the specified port (default is 8080).

## Usage

Once the server is running, you can connect to it using a WebSocket client. The server accepts connections on the / endpoint and expects a userID parameter in the URL.

When sending a message, the message should be a JSON object with a content field for the message content and a recipient field for the recipient's userID.

If the recipient is connected, the server will forward the message to them. If the recipient is not connected, the server will send an error message back to the sender.

## Note

This server is intended for use in a development environment. For production use, additional configuration and security measures are recommended.
