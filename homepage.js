function toggleAccordion(item) {
  const content = item.querySelector('.accordion-content');
  content.classList.toggle('open');
}
function openResume() {
  document.getElementById('resumeOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeResume() {
  document.getElementById('resumeOverlay').classList.remove('open');
  document.body.style.overflow = '';
}