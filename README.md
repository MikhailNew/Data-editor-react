- Download repository files
- "npm run install" to install dependencies
- "npm run start" to start local server
- Wait for the project to open in the browser
- Use


DESCRIPTION
------------------------------------------------------------
A primitive table data editor.
Implemented in React.
Styling Bootstrap 4+.

An example of the algorithm for working with the editor:
Loading and unloading data in JSON format. Data in JSON is an array of objects with
the same structure, but different meanings.
Example 1:

[{"name": "Name 1", "year": "2010"}, {"name": "Name 2", "year": "1997"}, {"name": "Name3","year":"2004"}]

Example 2:

[{"key1": "k1v1", "key2": "k2v1", "key3": "k3v1"}, {"key1": "k1v2", "key2": "k2v2", "key3": "k3v2"}]

Loading and unloading JSON strings should be done from / to textarea.
Viewing and editing uploaded data (adding, changing, deleting).
