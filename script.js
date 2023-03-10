window.onload = () => {
  
  const box = document.querySelector('.box');
  const input = document.querySelector('.input');
  
  function generate() {
    // dapatkan kode warna hexadecimal secara acak
    const result = getRandomColor();
    // set kode warna tersebut ke box dan input
    box.style.background = result;
    input.value = result;
  }
  
  generate();
  
  function getRandomColor() {
    // string
    const string = '0123456789abcdef';
    let result = '#';
    // looping 6 kali
    for (let i = 0; i < 6; i++) {
      // masukkan kedalam variabel result
      result += string[Math.floor(Math.random() * string.length)];
    }
    // mengembalikan nilai berupa kode warna hexadecimal
    return result;
  }
  
  // generate warna baru ketika tombol generate ditekan
  const generateButton = document.querySelector('.btn-generate');
  generateButton.addEventListener('click', generate);
  
  // salin kode tersebut ketika tombol copy ditekan
  const copyButton = document.querySelector('.btn-copy');
  copyButton.addEventListener('click', () => {
    // jika input kosong
    if (!input.value) return alert('field is empty!');
    // dapatkan value input
    input.select();
    // salin 
    document.execCommand('copy');
    // tampilkan pesan 
    alert('code has been copied!');
  });
  
}