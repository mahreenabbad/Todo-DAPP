const express =require("express");
const router = express.Router();

const {
    createTask,
    deleteTask,
    viewTask,
    allTask,
    updateTask
}= require("../controllers/controllers")

router.route('/create-task').post(createTask)
router.route('/delete-task/:taskId').delete(deleteTask)
router.route('/view-task/:taskId').get(viewTask)
router.route('/view-all-task').get(allTask)
router.route('/update-task').post(updateTask)

module.exports = router;