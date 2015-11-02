var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./dev/gulp/tasks', { recurse: true });
