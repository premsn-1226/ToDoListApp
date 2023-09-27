import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  FloatingLabel,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import Api from "../Services/Api";

export default function ToDoListForm(props: any) {
  const dataText = {
    userId: "userId",
    username: "username",
    taskId: "taskId",
    taskTitle: "taskTitle",
    taskDes: "taskDes",
    targetDate: "targetDate",
    completionDate: "completionDate",
    category: "category",
    status: "status",
    important: "important",
  };

  const data = {
    userId: "1",
    username: "Prem S N",
    taskTitle: "",
    taskDes: "",
    targetDate: "",
    completionDate: "",
    category: "",
    status: "",
    important: "false",
  };
  const [addTask, setAddTask] = useState(data);
  const [required, setRequired] = useState(true);

  const handleChange = (e: any) => {
    e.preventDefault();
    const val = e.target.value;
    setRequired(false);
    setAddTask({ ...addTask, [e.target.name]: val });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(addTask);

    if (
      addTask.taskTitle !== "" &&
      addTask.taskDes !== "" &&
      addTask.category != "" &&
      addTask.status !== "" &&
      addTask.targetDate !== ""
    ) {
      // var check =
      //   addTask.status === "completed"
      //     ? addTask.completionDate !== ""
      //       ? true
      //       : false
      //     : "";
      console.log(addTask);
      console.log(
        typeof addTask + "-------------------------" + typeof JSON.stringify(addTask));
      const task = await Api.AddTask(JSON.stringify(addTask));
      setRequired(false);
      props.close();
    } else {
      setRequired(true);
    }
  };

  return (
    <Modal
      {...props}
      show={props.show}
      onHide={() => props.close()}
      backdrop="static"
      keyboard={false}
      centered
      scrollable
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>
      {required ? (
        <Alert variant="warning">Fill All the Required fields</Alert>
      ) : (
        ""
      )}
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <FloatingLabel label="Title" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter title"
                name={dataText.taskTitle}
                value={addTask.taskTitle}
                required={required}
                onChange={(e) => handleChange(e)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </FloatingLabel>
            <FloatingLabel label="Description">
              <Form.Control
                as="textarea"
                style={{ height: "120px" }}
                placeholder="decribe about the task"
                name={dataText.taskDes}
                value={addTask.taskDes}
                required={required}
                onChange={(e) => handleChange(e)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <Row>
              <Col>
                <FloatingLabel label="Target Date" className="mb-3">
                  <Form.Control
                    type="Date"
                    placeholder="dd-mm-yyyy"
                    name={dataText.targetDate}
                    value={addTask.targetDate}
                    required={required}
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel label="Status" className="mb-3">
                  <Form.Select
                    aria-label="Status"
                    name={dataText.status}
                    value={addTask.status}
                    required={required}
                    onChange={(e) => handleChange(e)}
                  >
                    <option disabled defaultValue="">
                      Status
                    </option>
                    <option value="yettostart">Yet To Start</option>
                    <option value="inprogress">In Progress</option>
                    <option value="completed">Completed</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                {addTask.status === "completed" ? (
                  <FloatingLabel label="Completion Date" className="mb-3">
                    <Form.Control
                      type="Date"
                      placeholder="dd-mm-yyyy"
                      name={dataText.completionDate}
                      value={addTask.completionDate}
                      required={required}
                      onChange={(e) => handleChange(e)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </FloatingLabel>
                ) : (
                  <FloatingLabel label="Category" className="mb-3">
                    <Form.Select
                      aria-label="Category"
                      name={dataText.category}
                      value={addTask.category}
                      required={required}
                      onChange={(e) => handleChange(e)}
                    >
                      <option disabled value="">
                        Category
                      </option>
                      <option value="Design">Design</option>
                      <option value="Code Change">Code Change</option>
                      <option value="Personal">Personal</option>
                    </Form.Select>
                  </FloatingLabel>
                )}
              </Col>
            </Row>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              name={dataText.important}
              value={addTask.important}
              onChange={(e) => handleChange(e)}
              defaultChecked={false}
              label="Notify Task"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.close()}>
          Close
        </Button>
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
