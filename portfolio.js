const icons = document.querySelectorAll('.container-icons2 i');

icons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.color = '#FFFF66'; 
  });

  icon.addEventListener('mouseout', () => {
    icon.style.color = 'lightgreen';
  });
});
const icons1 = document.querySelectorAll('.container-icons i');

icons1.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.color = '#FFFF66'; 
  });

  icon.addEventListener('mouseout', () => {
    icon.style.color = 'lightgreen';
  });
});