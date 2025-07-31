// DADOS DOS SEUS MENTORES:
// Por favor, substitua as URLs das fotos e os links de agendamento pelos REAIS.
const mentorsData = [
  { name: "Ana Paula Silva", photo: "gipesta.png", scheduleLink: "https://seulinkdeagendamento.com/ana" },
  { name: "Bruno Costa", photo: "gipesta.png", scheduleLink: "https://seulinkdeagendamento.com/bruno" },
  { name: "Carla Pereira", photo: "gipesta.png", scheduleLink: "https://seulinkdeagendamento.com/carla" },
  { name: "Daniel Rocha", photo: "gipesta.png", scheduleLink: "https://seulinkdeagendamento.com/daniel" },
  { name: "Eduarda Lima", photo: "gipesta.png", scheduleLink: "https://seulinkdeagendamento.com/eduarda" },
  { name: "Fábio Mendes", photo: "gipesta.png", scheduleLink: "https://seulinkdeagendamento.com/fabio" },
  { name: "Gabriela Santos", photo: "gipesta.png", scheduleLink: "https://seulinkdeagendamento.com/gabriela" },
  { name: "Hugo Almeida", photo: "gipesta.png", scheduleLink: "https://seulinkdeagendamento.com/hugo" }
];

// Função para embaralhar um array (algoritmo Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
  }
  return array;
}

// Garante que o script roda apenas depois que a página é totalmente carregada
document.addEventListener('DOMContentLoaded', () => {
  const mentorsContainer = document.getElementById('mentors-container');
  const shuffledMentors = shuffleArray([...mentorsData]); // Cria uma cópia para embaralhar

  // Cria um card para cada mentor embaralhado e o adiciona à página
  shuffledMentors.forEach(mentor => {
      const mentorCard = document.createElement('div');
      mentorCard.classList.add('mentor-card');

      const mentorPhoto = document.createElement('img');
      mentorPhoto.src = mentor.photo;
      mentorPhoto.alt = `Foto de ${mentor.name}`;

      const mentorName = document.createElement('h3');
      mentorName.textContent = mentor.name;

      const scheduleButton = document.createElement('a');
      scheduleButton.href = mentor.scheduleLink;
      // Usa apenas o primeiro nome para o botão, como solicitado ("Mentor X")
      scheduleButton.textContent = `Agende sua Mentoria com o Mentor ${mentor.name.split(' ')[0]}`;
      scheduleButton.classList.add('schedule-button');
      scheduleButton.target = "_blank"; // Abre em uma nova aba
      scheduleButton.rel = "noopener noreferrer"; // Boa prática de segurança

      mentorCard.appendChild(mentorPhoto);
      mentorCard.appendChild(mentorName);
      mentorCard.appendChild(scheduleButton);

      mentorsContainer.appendChild(mentorCard);
  });
});