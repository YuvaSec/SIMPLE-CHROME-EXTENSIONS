1. Learnt:

   1. What is `FILE SYSTEM ACCESS API` : The inbuilt file picker that interacts with files on the computer.
       The file picker returns an array of file handles (even if you only pick one).   

   2. `types: [{ description: "Text Files", accept: { "text/plain": [".txt"] } }]`
      `type:[]` This is a filter for the file picker.
      “Only show files that are plain text (text/plain) and end with .txt.”

   3. `const [handle]`
       This line uses array destructuring to grab the first file handle and store it in a variable called handle.
   4. `showOpenFilePicker()`: User chooses a file → returns a file handle.
   5. `handle.getFile().text()` : Reads the contents.
   6. `showSaveFilePicker()` : User chooses save destination.
   7. `createWritable() + write() + close()` : Writes data to disk.