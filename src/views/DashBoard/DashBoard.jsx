import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Image,
  ProgressBar,
  Button,
  ListGroup,
} from "react-bootstrap";
import { Bar, Doughnut } from "react-chartjs-2";
import CardComp from "../../components/CardComp/CardComp";
import TodoList from "../../components/TodoList/TodoList";
import {
  BarData,
  cardData,
  DoughNutData,
  progressData,
  TableData,
  TableHeading,
} from "../../Data/DashBoardData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  getTodos,
  addTodo,
  removeTodo,
  toggleTodo,
} from "../../redux/actions/TodoAction";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DashBoard = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const todoList = useSelector((state) => state?.TodoReducer);

  const BarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  useEffect(() => {
    dispatch(getTodos(todo));
  }, [dispatch, todo]);

  return (
    <>
      <Container className="mt-3">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home"></i>
            </span>{" "}
            Dashboard{" "}
          </h3>
        </div>

        <Row>
          {cardData.map((data, i) => {
            return (
              <>
                <CardComp
                  title={data?.title}
                  price={data?.price}
                  percent={data?.percentage}
                  bgColor={data?.color}
                />
              </>
            );
          })}
        </Row>

        <Row className="mt-3">
          <Col md={7} className="grid-margin stretch-card">
            <Card className="border-0 pb-5">
              <Card.Body>
                <Card.Title className="mb-2">
                  Visit And Sales Statistics
                </Card.Title>
                <Bar options={BarOptions} data={BarData} />
              </Card.Body>
            </Card>
          </Col>

          <Col md={5} className="grid-margin stretch-card">
            <Card className="border-0 pb-4">
              <Card.Body>
                <Card.Title className="mb-2">Traffic Sources</Card.Title>
                <div style={{ width: "20rem" }}>
                  <Doughnut data={DoughNutData} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <Card.Title>Recent Tickets</Card.Title>
                <Table responsive>
                  <thead>
                    <tr>
                      {TableHeading.map((heading, i) => {
                        return <th key={i}>{heading} </th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {TableData.map((data, i) => {
                      return (
                        <tr>
                          <td>
                            <Image
                              src={require(`../../assets/images/faces/${data?.img}`)}
                              roundedCircle={true}
                              width={40}
                              alt="face"
                            />
                            &nbsp;&nbsp;
                            {data?.assignee}
                          </td>
                          <td>{data?.subject}</td>
                          <td>{data?.status}</td>
                          <td>{data?.lastUpdate}</td>
                          <td>{data?.trackingID}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={7}>
            <Card className="shadow border-0">
              <Card.Body>
                <Card.Title>Project Status</Card.Title>
                <Table responsive className="mt-4">
                  <thead>
                    <tr>
                      <th> # </th>
                      <th> Name </th>
                      <th> Due Date </th>
                      <th> Progress </th>
                    </tr>
                  </thead>
                  <tbody>
                    {progressData.map((data, i) => {
                      return (
                        <tr>
                          <td>{i + 1}</td>
                          <td>{data?.name}</td>
                          <td>{data?.date}</td>

                          <td>
                            <ProgressBar
                              style={{ height: "12px" }}
                              animated
                              variant={data?.color}
                              now={data?.percent}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="shadow border-0">
              <Card.Body>
                <Card.Title>Todo</Card.Title>
                <div className="add-items d-flex">
                  <input
                    type="text"
                    className="form-control h-auto"
                    placeholder="What do you need to do today?"
                    onChange={(e) => handleChange(e)}
                    value={todo}
                  />

                  <Button
                    className="font-weight-bold px-lg-4 px-3"
                    type="button"
                    variant="outline-primary"
                    onClick={handleAddTodo}
                  >
                    Add
                  </Button>
                </div>
                <div className="list-wrapper mt-2">
                  <ListGroup>
                    {todoList.length > 0 &&
                      todoList?.map((todo, index) => {
                        return (
                          <TodoList
                            isCompleted={todo.completed}
                            changed={() => handleToggleTodo(todo.id)}
                            key={todo.id}
                            remove={() => handleRemoveTodo(todo.id)}
                          >
                            {todo.task}
                          </TodoList>
                        );
                      })}
                  </ListGroup>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashBoard;
