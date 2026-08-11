function txtToWav() {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.addEventListener('load', (penisPower) => {
    const data = penisPower.target.result;
    console.log(data);
  })
}
