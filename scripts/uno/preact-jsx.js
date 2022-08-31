import {
  html,
  render,
  useState,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

const PlayerComponent = ({ index, player, changePlayerScore, renamePlayer, deletePlayer }) => {
  const changeScore = num => {
    try {
      const score = +eval(prompt(`How much (${player.name})?`));
      if (Number.isNaN(score)) throw new Error();
      changePlayerScore({ index, score: Math.sign(num) * score });
    } catch (e) {
      alert("Invalid number!");
    }
  };
  const deletePlayerConfirm = () => {
    confirm(`Are you sure you want to delete ${player.name}?`) && deletePlayer(player.index);
  };
  const rename = () => {
    const name = prompt(`New name for ${player.name}`, player.name);
    if (typeof name?.length !== "number") return;
    if (name.length < 3) return alert("New name must have more than 2 symbols!");
    renamePlayer({ index, name });
  };

  return html`
    <tr>
      <th onClick=${rename}>${player.name}</th>
      <th>${player.score}</th>
      <th>
        <button onClick=${() => changeScore(1)}>+</button>
      </th>
      <th>
        <button onClick=${() => changeScore(-1)}>-</button>
      </th>
      <th>
        <button onClick=${deletePlayerConfirm}>✖</button>
      </th>
    </tr>
  `;
};

const Main = () => {
  const [players, setPlayers] = useState(JSON.parse(localStorage.getItem("players") || "[]"));
  const [newPlayerName, setNewPlayerName] = useState("");

  const nameIsValid = name => name.length > 2;
  const deletePlayer = index => {
    players.splice(index, 1);
    setPlayers([...players]);
  };
  const deleteAllPlayers = () => setPlayers([]);
  const setAllToZero = () => {
    players.forEach(el => (el.score = 0));
    setPlayers([...players]);
  };
  const addPlayer = name => {
    setPlayers(players => [...players, { name, score: 0 }]);
  };
  const renamePlayer = ({ index, name }) => {
    players[index].name = name;
    setPlayers([...players]);
  };
  const changePlayerScore = ({ index, score }) => {
    players[index].score += score;
    setPlayers([...players]);
  };
  const updateLocalStorage = players => localStorage.setItem("players", JSON.stringify(players));
  const onSubmit = e => {
    e.preventDefault();
    if (!nameIsValid(newPlayerName)) return alert("Player name should be more that 2 symbols");
    addPlayer(newPlayerName), setNewPlayerName("");
  };
  const deleteAllConfirm = () =>
    confirm("Are you sure you want delete all players?") && deleteAllPlayers(setPlayers);
  const setAllToZeroConfirm = () => confirm("Reset all players score?") && setAllToZero(setPlayers);

  useEffect(() => updateLocalStorage(players), [players, setPlayers]);

  return html`
    <div className="main">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Increment</th>
            <th>Decrement</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          ${players.map(
            (player, index) =>
              html` <${PlayerComponent}
                key=${index}
                index=${index}
                player=${player}
                changePlayerScore=${changePlayerScore}
                renamePlayer=${renamePlayer}
                deletePlayer=${deletePlayer}
              />`
          )}
        </tbody>
      </table>

      <form onSubmit=${onSubmit}>
        <input
          placeholder="new player"
          type="text"
          value=${newPlayerName}
          onChange=${e => setNewPlayerName(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>

      <button className="global-action" onClick=${setAllToZeroConfirm}>SET ALL TO 0</button>
      <button className="global-action" onClick=${deleteAllConfirm}>DELETE ALL</button>
    </div>
  `;
};

export const init = () => render(html`<${Main} />`, document.getElementById("root"));
