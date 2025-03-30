import React, { useState } from "react";
import { TodoWrapper } from "../TodoWrapper";
import { v4 as uuidv4 } from "uuid";

export const BoardWrapper = () => {
  const [boards, setBoards] = useState([]);

  const addBoard = () => {
    setBoards([...boards, { id: uuidv4(), name: `List ${boards.length + 1}` }]);
  };

  const deleteBoard = (id) => {
    setBoards(boards.filter((board) => board.id !== id));
  };
 
  return (
    <div className="BoardWrapper">
      <div className="board-list">
        {boards.map((board) => (
          <div key={board.id} className="board">
            <div className="upper-board">
              <h2>{board.name}</h2>
              <button onClick={() => deleteBoard(board.id)} className="delete-board-btn"><span class="material-symbols-outlined">delete</span></button>
            </div>
            <TodoWrapper />
          </div>
        ))}
      </div>
      <div>
      <button onClick={addBoard} className="add-board-btn">Add List</button>
      </div>
    </div>
  );
};
