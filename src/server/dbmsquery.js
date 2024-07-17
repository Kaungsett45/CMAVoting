import express from "express";
import cors from "cors";
import connection from "./db.js";
import { createSecureServer } from "http2";

const app = new express();

app.use(express.json());
app.use(cors());

app.get("/api", async (req, res) => {
  return res.send({ msg: "Server Is Working" })
})


app.get("/api/king", async (req, res) => {
  const result = await connection.query(
    'select * from participant where category="King"'
  );
  return res.send(result[0]);
});

app.get("/api/queen", async (req, res) => {
  const result = await connection.query(
    'select * from participant where category="Queen"'
  );
  return res.send(result[0]);
});


app.get('/api/top', async (req, res) => {
  try {
    const [resultKing] = await connection.query(
      'SELECT * FROM participant WHERE category="King" ORDER BY vote DESC LIMIT 1'
    );

    const [resultQueen] = await connection.query(
      'SELECT * FROM participant WHERE category="Queen" ORDER BY vote DESC LIMIT 1'
    );

    const combinedResults = {
      king: resultKing[0],
      queen: resultQueen[0]
    };

    res.json(combinedResults);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get("/votetoken", async (req, res) => {
  const result = await connection.query(
    'select * from Votetoken '
  );
  return res.send(result[0]);
});

app.post("/create", async (req, res) => {
  const reqBody = {
    image: req.body.image,
    name: req.body.name,
    year: req.body.year,
    category: req.body.category,
  };

  const query =
    " insert into participant(image,name,year,category) values(?,?,?,?)";
  connection.query(query, [
    req.body.image,
    req.body.name,
    req.body.year,
    req.body.category,
  ]);
  res.send("Data inserted successfully!!");
});



app.put("/voting/:id", async (req, res) => {
  const { id } = req.params;
  const { votetoken } = req.body;

  try {
    const [tokenResults] = await connection.query(
      "SELECT * FROM Votetoken WHERE votetoken = ?",
      [votetoken]
    );
    console.log(tokenResults + 'dbms token ')
    console.log(votetoken + ' user token')
    if (tokenResults.length === 0) {
      return res.status(404).send({ msg: "Invalid token" });
    }


    await connection.query("DELETE FROM Votetoken WHERE votetoken = ?", [votetoken]);

    const [results] = await connection.query("SELECT vote FROM participant WHERE id = ?", [id]);
    if (results.length === 0) {
      return res.status(404).send({ msg: "Participant not found" });
    }
    const currentVote = results[0].vote;

    await connection.query("UPDATE participant SET vote = ? WHERE id = ?", [currentVote + 1, id]);

    console.log("DB update successful");
    return res.status(200).send({ msg: "Update complete!!!" });

  } catch (err) {
    console.error("Database error:", err);
    return res.status(500).send({ msg: "Internal server error" });
  }
});

export default app

