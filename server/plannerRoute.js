const express = require('express');
const { millisElapsedToString, schema } = require('./helpers');
const router = express.Router();

const startTime = new Date();

router.get('/', (req, res) => {
  console.log(`[${req.id}] handler: api root`);
  res.json({
    status: 'OK',
    uptime: `${millisElapsedToString(Date.now() - startTime)}`,
    booted: `${startTime.toUTCString()}`,
    API_schema: {
      get: {
        '/api/': '[YOU ARE HERE]',
        '/api/status': '{status:STATUS}',
        '/api/tasks':
          '[...{id, title, desc, created, completed, added:[...UTCString]}]',
      },
    },
    types: {
      STATUS: 'OK | ERROR STRING',
      TASK: {
        id: 'uuid v4',
        title: 'STRING',
        desc: 'STRING',
        created: 'DATE',
        completed: 'DATE',
        days_scheduled: 'LIST DATE',
      },
    },
  });
});

router.get('/tasks', (req, res) => {
  console.log(`[${req.id}] handler: api/tasks`);
  res.json({ handler: 'api/tasks' });
});

module.exports = router;
