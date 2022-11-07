function createGame(grupo, player1, hour, player2) {
  return `
   <h3>Grupo ${grupo} </h3>
  <li>
    <img src="./assets/images/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
        <strong>${hour}</strong>
          <img src="./assets/images/icon-${player2}.svg" alt="Bandeira da ${player2}"/>
         </li>
`
}
let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
   <div class="card" style="animation-delay: ${delay}s">
          <h1>Fase de Grupos</h1>
        <h2>${date}<span>${day}</span></h2>   
        <ul>
          ${games}
          </ul>
       </div>
  `
}
document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("A", "qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("B", "england", "10:00", "iran") +
      createGame("A", "senegal", "13:00", "netherlands") +
      createGame("B", "unitedstates", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("C", "argentina", "07:00", "saudiarabia") +
      createGame("D", "denmark", "10:00", "tunisia") +
      createGame("C", "mexico", "13:00", "poland") +
      createGame("D", "france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("F", "morocco", "07:00", "croatia") +
      createGame("E", "germany", "10:00", "japan") +
      createGame("E", "spain", "13:00", "costarica") +
      createGame("F", "belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("G", "switzerland", "07:00", "cameroon") +
      createGame("H", "uruguay", "10:00", "southkorea") +
      createGame("H", "portugal", "13:00", "ghana") +
      createGame("G", "brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("B", "wales", "07:00", "iran") +
      createGame("A", "qatar", "10:00", "senegal") +
      createGame("A", "netherlands", "13:00", "ecuador") +
      createGame("B", "england", "16:00", "unitedstates")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("D", "tunisia", "07:00", "australia") +
      createGame("C", "poland", "10:00", "saudiarabia") +
      createGame("D", "france", "13:00", "denmark") +
      createGame("C", "argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("E", "japan", "07:00", "costarica") +
      createGame("F", "belgium", "10:00", "morocco") +
      createGame("F", "croatia", "13:00", "canada") +
      createGame("E", "spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("G", "cameroon", "07:00", "serbia") +
      createGame("H", "southkorea", "10:00", "ghana") +
      createGame("G", "brazil", "13:00", "switzerland") +
      createGame("H", "portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("A", "ecuador", "12:00", "senegal") +
      createGame("A", "netherlands", "12:00", "qatar") +
      createGame("B", "iran", "16:00", "unitedstates") +
      createGame("A", "wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("D", "tunisia", "12:00", "france") +
      createGame("D", "australia", "12:00", "denmark") +
      createGame("C", "poland", "16:00", "argentina") +
      createGame("C", "saudiarabia", "16:00", "mexico")
  ) +
  createCard(
    "01/11",
    "quinta",
    createGame("F", "croatia", "12:00", "belgium") +
      createGame("F", "canada", "12:00", "morocco") +
      createGame("E", "japan", "16:00", "spain") +
      createGame("E", "costarica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("H", "southkorea", "12:00", "portugal") +
      createGame("H", "ghana", "12:00", "uruguay") +
      createGame("G", "serbia", "16:00", "switzerland") +
      createGame("G", "cameroon", "16:00", "brazil")
  )
