import { h, render } from "https://esm.sh/preact@10.5.15";
import { useState, useEffect } from "https://esm.sh/preact@10.5.15/hooks";

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

  return h("tr", null, [
    h("th", { onClick: rename }, player.name),
    h("th", null, player.score),
    h("th", null, h("button", { onClick: () => changeScore(1) }, "+")),
    h("th", null, h("button", { onClick: () => changeScore(-1) }, "-")),
    h("th", null, h("button", { onClick: deletePlayerConfirm }, "✖"))
  ]);
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

  return h("div", { className: "main" }, [
    h("table", null, [
      h("thead", null, [
        h("tr", null, [
          h("th", null, "Name"),
          h("th", null, "Score"),
          h("th", null, "Increment"),
          h("th", null, "Decrement"),
          h("th", null, "Delete")
        ])
      ]),
      h(
        "tbody",
        null,
        players.map((player, index) =>
          h(PlayerComponent, {
            key: index,
            index,
            player,
            changePlayerScore,
            renamePlayer,
            deletePlayer
          })
        )
      )
    ]),

    h("form", { onSubmit }, [
      h("input", {
        placeholder: "new player",
        type: "text",
        value: newPlayerName,
        onChange: e => setNewPlayerName(e.target.value)
      }),
      h("button", { type: "submit" }, "Add Player")
    ]),

    h("button", { onClick: setAllToZeroConfirm, className: "global-action" }, "SET ALL TO 0"),
    h("button", { onClick: deleteAllConfirm, className: "global-action" }, "DELETE ALL")
  ]);
};

export const init = () => render(h(Main), document.getElementById("root"));
