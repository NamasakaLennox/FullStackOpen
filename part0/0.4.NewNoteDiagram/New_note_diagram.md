```mermaid
sequenceDiagram
    participant browser
    participant server

    Note left of browser: user adds new note<br>and clicks submit
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of server: Adds new note to the notes page
    Note right of server: Sends a redirect request <br> (Status Code 302)
    server-->>browser: Redirect Request https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the javascript file
    deactivate server

    Note right of browser: The browser starts executing the Javascript code <br>that requests JSON data from server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{content: "anupam", date: "2023-04-04T11:27:49.756Z"},…]
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/favicon.ico
    activate server
    server-->>browser: gets the favicon.ico image
    deactivate server

    Note right of browser: browser executes event handler,<br>rendering page to display



```
