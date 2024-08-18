function encrypt() {
  let text = document.getElementById('inputText').value;
  let encryptedText = text.replace(/e/g, 'enter')
                          .replace(/i/g, 'imes')
                          .replace(/a/g, 'ai')
                          .replace(/o/g, 'ober')
                          .replace(/u/g, 'ufat');
  document.getElementById('result').value = encryptedText;

  // Mostrar o botão "Copiar" após criptografar
  document.getElementById('copyButton').style.display = 'block';
}

function decrypt() {
  let text = document.getElementById('inputText').value;
  let decryptedText = text.replace(/enter/g, 'e')
                          .replace(/imes/g, 'i')
                          .replace(/ai/g, 'a')
                          .replace(/ober/g, 'o')
                          .replace(/ufat/g, 'u');
  document.getElementById('result').value = decryptedText;

  // Mostrar o botão "Copiar" após descriptografar
  document.getElementById('copyButton').style.display = 'block';
}

function copyToClipboard() {
  let text = document.getElementById('result').value;
  navigator.clipboard.writeText(text).then(() => {
      alert('Texto copiado para a área de transferência!');
  }).catch(err => {
      console.error('Erro ao copiar texto: ', err);
  });
}