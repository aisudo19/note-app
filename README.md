# React + Vite

```起動
npm start
```

## スプレッド構文

```App.jsx
const [notes, setNotes] = useState([]);

setNotes([...notes, newNote]);
```

notes という配列の変数を新たに宣言して、ここに newNotes というオブジェクトを追加して新しい notes という配列を作れる。作るデータは配列なので setNotes([])となっていることに注意。
