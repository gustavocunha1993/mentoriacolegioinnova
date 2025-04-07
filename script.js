function showUnit(unitId) {
  // Esconde o modal
  document.getElementById('unitModal').style.display = 'none';

  // Esconde todas as seções de unidade
  const units = document.querySelectorAll('.unit');
  units.forEach(unit => {
      unit.classList.remove('active');
  });

  // Mostra a seção selecionada
  const unit = document.getElementById(unitId);
  unit.classList.add('active');

  // Garante que os mentores estejam escondidos ao trocar de unidade
  const mentorsDivId = `mentors-${unitId === 'jardim-botanico' ? 'jb' : 'sw'}`;
  const mentorsDiv = document.getElementById(mentorsDivId);
  if (mentorsDiv) {
      mentorsDiv.style.display = 'none';
  }
}

function showMentors(unitId) {
  const mentorsDivId = `mentors-${unitId === 'jardim-botanico' ? 'jb' : 'sw'}`;
  const mentorsDiv = document.getElementById(mentorsDivId);

  if (mentorsDiv) {
      mentorsDiv.style.display = 'grid';
  }
}