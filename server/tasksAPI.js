const express = require('express');
const uuid = require('uuid');
const { millisElapsedToString, schema } = require('./helpers');
const router = express.Router();
const { tasks } = require('./placeholders');

const startTime = new Date();

const db = { backlog: tasks, today: [] };

const createTask = json => ({
  id: uuid.v4(),
  title: json.title ? json.title : 'new task',
  desc: json.desc ? json.desc : 'no description',
  blocked: false,
  created: Date.now(),
  completed: null,
  scheduled: [],
});

router.get('/', (req, res) => {
  // console.log(`[${req.id}] handler: api root`);
  res.json({
    status: 'OK',
    uptime: `${millisElapsedToString(Date.now() - startTime)}`,
    booted: `${startTime.toUTCString()}`,
    API_schema: {
      GET: {
        '/': '[YOU ARE HERE]',
        '/tasks': { backlog: 'LIST TASKS', today: 'LIST TASKS' },
      },
      POST: {
        '/tasks': { expects: 'TASK', returns: 'TASKS' },
      },
      PUT: {
        '/tasks:id': { expects: 'TASK', returns: 'TASKS' },
      },
    },
    types: {
      STATUS: 'OK | ERROR STRING',
      TASK: {
        id: 'MAYBE ID',
        inList: 'backlog',
        title: 'STRING',
        desc: 'STRING',
        blocked: 'BOOLEAN',
        created: 'DATE',
        completed: 'MAYBE DATE',
        scheduled: 'LIST DATE',
      },
      ID: 'UUIDv4',
      DATE: 'UTC-TIMESTRING',
    },
  });
});

router.get('/tasks', (req, res) => {
  res.json(db);
});

router.post('/tasks', (req, res) => {
  const newTask = createTask(req.body);
  db.backlog.unshift(newTask);
  res.status(201);
  res.location(`api/tasks/${newTask.id}`);
  res.json(newTask);
});
router.put('/tasks/:id', (req, res) => {
  console.log(`[${req.id}] task-id:[${req.params.id}]}`);
  res.json(req.body);
});
module.exports = router;
