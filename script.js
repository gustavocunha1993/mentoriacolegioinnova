function showUnit(unitId) {
  // Esconde o modal
  document.getElementById('unitModal').style.display = 'none';

  // Esconde todas as seções de unidade
  const units = document.querySelectorAll('.unit');
  units.forEach(unit => unit.classList.remove('active'));

  // Mostra a seção selecionada
  document.getElementById(unitId).classList.add('active');
}