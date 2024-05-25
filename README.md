# react-notes-app

1 - Can store records The web server can store the records added through the web application. Simply store them in the server memory in the form of a JavaScript array.

2 - Can display notes Next is that the web server can display notes. This requires the web server to send all or specifically the stored notes data.

3 - Can modify notes The third is that the web server can change the notes. The changes can be in the form of title, content, or note tags. When a client requests a note change, it will make a request to the path '/notes/{id}', use the 'PUT' method, and bring JSON data in the body of the request which is the latest note data.

4 - Can delete notes Finally, the web server can delete notes. To delete a note, the client will make a request to the path '/notes/{id}' with the 'DELETE' method.
