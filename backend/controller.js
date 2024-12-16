const Task = require('./taskModule');

// Get tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
};

// Add task
exports.addTask = async (req, res) => {
  try {
      const data = req.body;
      console.log('Received data:', data);

      // Save data to MongoDB
      const newTask = new Task(data);
      await newTask.save();

      res.status(201).send({ message: 'Task added successfully!', task: newTask });
  } catch (error) {
      console.error('Error saving task:', error);
      res.status(500).json({ message: 'Failed to save task', error });
  }
};

// Edit task
exports.editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: 'Task updated', task: updatedTask });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update task' });
  }
};
