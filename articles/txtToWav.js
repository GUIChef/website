function txtToWav() {
  const file = document.getElementById("fileUpload").files[0];//This gets the file name and stors it to a variable.
  const reader = new FileReader();//I'm not exactly sure what this does
  reader.readAsText(file);//This reads the file
  reader.addEventListener('load', (unpack) => {//something something something
    const contents = unpack.target.result;//This stores the file in a variable
    let hex = contents.trim().split(/\s+/);//This creates a new variabe from the contents after seperating by whitespaces
    console.log(hex);// Remove later
  })
}
