import React, { useState } from "react";
import { connect } from "react-redux";

function Todo(props) {
  const [myInput, setMyInput] = useState("");
  const [flag, setFlag] = useState(false);
  const [selectedId, setSelectedId] = useState(false);

  const handelDeleteTask = (id) => {
    props.deleteTask(id);
  };

  const handelSumbit = () => {
    if (String(myInput).trim().length > 0) {
      if (flag) {
        props.editTask({ id: selectedId, task: myInput });
        setFlag(false);
        setSelectedId("");
        setMyInput("");
      } else {
        props.addTask({ id: props.taskid + 1, task: myInput, status: false });
        props.addTaskid(props.taskid + 1);
        setMyInput("");
      }
    }
  };

  const handelCheckBox = (id) => {
    props.editStatus(id);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>Todo App</h1>
      <div style={{ textAlign: "center" }}>
        <input
          style={{ padding: "4px", width: "30%" }}
          type="text"
          value={myInput}
          onChange={(e) => {
            setMyInput(e.target.value);
          }}
        />
        <button className="my_btn" onClick={handelSumbit}>
          Submit
        </button>
      </div>
      {props.task.length === 0 ? (
        <div>
          <p style={{ textAlign: "center" }}>There Are NoT Any Todo Task</p>
        </div>
      ) : (
        <table style={{ textAlign: "center", margin: " 20px auto" }}>
          <thead>
            <tr>
              <td>Sr. No.</td>
              <td>Task</td>
              <td>Completed</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {props.task.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.task}</td>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        checked={item.status}
                        onChange={() => {
                          handelCheckBox(item.id);
                        }}
                      />
                      {item.status ? "Completed" : "Incomplete"}
                    </label>
                  </td>
                  <td>
                    <button
                      className="my_btn"
                      onClick={() => {
                        setMyInput(item.task);
                        setFlag(true);
                        setSelectedId(item.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="my_btn"
                      onClick={() => {
                        handelDeleteTask(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    task: state.task,
    taskid: state.taskid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (val) => dispatch({ type: "ADD_TODO", payload: val }),
    deleteTask: (val) => dispatch({ type: "DELETE_TODO", payload: val }),
    editTask: (val) => dispatch({ type: "EDIT_TODO", payload: val }),
    editStatus: (val) => dispatch({ type: "STATUS_TODO", payload: val }),
    addTaskid: (val) => dispatch({ type: "ADD_TASKID", payload: val }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
