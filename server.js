const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

const posts = [
  {
    id: 1,
    title: 'Benvenuto al mio blog',
    content: 'Questo è il primo post del mio blog. Qui posso scrivere quello che voglio.',
    image: '/images/post1.svg',
    tags: ['welcome', 'intro']
  },
  {
    id: 2,
    title: 'Secondo post',
    content: 'Un altro testo d esempio per il secondo post.',
    image: '/images/post2.svg',
    tags: ['news']
  },
  {
    id: 3,
    title: 'JavaScript Tips',
    content: 'Consigli utili su JavaScript e Node.js.',
    image: '/images/post3.svg',
    tags: ['javascript','node']
  },
  {
    id: 4,
    title: 'Routing in Express',
    content: 'Come gestire le rotte e gli asset statici con Express.',
    image: '/images/post4.svg',
    tags: ['express','routing']
  },
  {
    id: 5,
    title: 'Ultime novità',
    content: 'Aggiornamenti e novità sul blog.',
    image: '/images/post5.svg',
    tags: ['update','news']
  }
];


// server entry point
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});


// Index
app.get('/bacheca', (req, res) => {
  res.json({ posts });
});

// Show
app.get('/bacheca/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.json({ post });
  } else {
    res.status(404).json({ error: 'Post non trovato' });
  }


  // Store
  app.post('/bacheca', (req, res) => {
    res.send('Create new post');
  });




  // Update
  app.put('/bacheca/:id', (req, res) => {
    res.send(`Update post with id ${req.params.id}`);
  });

  // Modify
  app.patch('/bacheca/:id', (req, res) => {
    res.send(`Modify post with id ${req.params.id}`);
  });

  // Destroy
  app.delete('/bacheca/:id', (req, res) => {
    res.send(`Delete post with id ${req.params.id}`);
  });
});

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`)
});
