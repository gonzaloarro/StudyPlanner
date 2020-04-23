// React
import React from "react";
// Components
import CustomModal from "../../utils/modal";
import TaskForm from "../taskForm";
import Task from "../task";


export default function TaskList(props) {

  const [modalShow, setModalShow] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState({});

  function showModal(task) {
    setModalShow(true);
    setSelectedTask(task);
  }

  function updateTask(task) {
    setModalShow(false);
    props.updateTask(task);
  }

  function deleteTask(task) {
    setModalShow(false);
    props.deleteTask(selectedTask.id);
  }

  const orderedTasks = [...props.tasks].sort(function(a, b) {
    a = new Date(a.date_and_time);
    b = new Date(b.date_and_time);
    return a.getTime() < b.getTime() ? -1 : a.getTime() > b.getTime() ? 1 : 0;
  })

  return (
    <React.Fragment>
      <CustomModal
        show={modalShow}
        close={() => setModalShow(false)}
        size="sm"
        title="Editar tarea"
        body=<TaskForm handleSubmit={updateTask} deleteTask={deleteTask} task={selectedTask}/>
      />
      {
        orderedTasks.map((task, index) => {
          if (task.description.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, "")
          .search(new RegExp(props.filterText.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, ""), "i")) !== -1) {
            return <Task
              key={task.id}
              task={task}
              updateTask={props.updateTask}
              deleteTask={props.deleteTask}
              onClick={showModal}
            />
          }
          else {
            return "";
          }
        })
      }
    </React.Fragment>
  )
}
