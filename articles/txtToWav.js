MathJax = {
  tex: {
    inlineMath: {'[+]': [['$', '$']]}
  },
  svg: {
    fontCache: 'global'
  }
};
function txtToWav() {
  const file = document.getElementById("fileUpload").files[0];//This gets the file name and stors it to a variable.
  const reader = new FileReader();//I'm not exactly sure what this does
  reader.readAsText(file);//This reads the file
  reader.addEventListener('load', (unpack) => {//something something something
    const contents = unpack.target.result;//This stores the file in a variable
    let hex = contents.trim().split(/\s+/);//This creates a new variabe from the contents after seperating by whitespaces
    let dec = hex.map(value => parseInt(value, 16));//Chat gpt said this would convert the strings to integer values then to raw data.
    let bytes = new Uint8Array(dec);//This converts the individual pieces to raw data.
    console.log(dec);
    console.log(bytes);
    const blob = new Blob([bytes], { type: "audio/wav" });
    const url = URL.createObjectURL(blob);
    document.getElementById("output").href = url;
    document.getElementById("output").download = "output.wav";
  })
}
