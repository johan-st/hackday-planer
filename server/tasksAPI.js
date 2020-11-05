const express = require('express');
const { millisElapsedToString, schema } = require('./helpers');
const router = express.Router();
const { tasks } = require('./placeholders');

const startTime = new Date();

router.get('/', (req, res) => {
  // console.log(`[${req.id}] handler: api root`);
  res.json({
    status: 'OK',
    uptime: `${millisElapsedToString(Date.now() - startTime)}`,
    booted: `${startTime.toUTCString()}`,
    API_schema: {
      GET: {
        '/': '[YOU ARE HERE]',
        '/tasks': ' LIST TASKS',
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
        title: 'STRING',
        desc: 'STRING',
        blocked: 'BOOLEAN',
        created: 'DATE',
        completed: 'DATE',
        scheduled: 'LIST DATE',
      },
      ID: 'UUIDv4',
      DATE: 'UTC-TIMESTRING',
    },
  });
});

router.get('/tasks', (req, res) => {
  // console.log(`[${req.id}] handler: api/tasks`);
  res.json(tasks);
});

router.post('/tasks', (req, res) => {
  res.status(201);
  res.location(`api/tasks/${req.id}`);
  res.json(req.body);
});
router.put('/tasks/:id', (req, res) => {
  console.log(`[${req.id}] task-id:[${req.params.id}]}`);
  res.json(req.body);
});
module.exports = router;
