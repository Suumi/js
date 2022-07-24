import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグ生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.className = "input-row";
  p.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton.closest("li"));
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.closest("li"));
  });

  // liタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
