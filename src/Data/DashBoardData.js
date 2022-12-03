import faker from "faker";

export const commonData = {
  startDate: new Date(),
  visitSaleData: {},
  visitSaleOptions: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            display: false,
            min: 0,
            stepSize: 20,
            max: 80,
          },
          gridLines: {
            drawBorder: false,
            color: "rgba(235,237,242,1)",
            zeroLineColor: "rgba(235,237,242,1)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
            color: "rgba(0,0,0,1)",
            zeroLineColor: "rgba(235,237,242,1)",
          },
          ticks: {
            padding: 20,
            fontColor: "#9c9fa6",
            autoSkip: true,
          },
          categoryPercentage: 0.5,
          barPercentage: 0.5,
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
  trafficData: {},
  trafficOptions: {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    legend: false,
  },
  todos: [
    {
      id: 1,
      task: "Pick up kids from school",
      isCompleted: false,
    },
    {
      id: 2,
      task: "Prepare for presentation",
      isCompleted: true,
    },
    {
      id: 3,
      task: "Print Statements",
      isCompleted: false,
    },
    {
      id: 4,
      task: "Create invoice",
      isCompleted: false,
    },
    {
      id: 5,
      task: "Call John",
      isCompleted: true,
    },
    {
      id: 6,
      task: "Meeting with Alisa",
      isCompleted: false,
    },
  ],
  inputValue: "",
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const BarData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const DoughNutData = {
  labels: ["Red", "Blue", "Yellow", "Green"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
        "rgba(255, 159, 64, 0.8)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const TableHeading = [
  "Assignee",
  "Subject",
  "Status",
  "Last Update",
  "Tracking ID",
];

export const TableData = [
  {
    assignee: "David Grey",
    subject: "Fund is not recieved",
    status: "DONE",
    lastUpdate: "Dec 5, 2017",
    trackingID: "WD-12345",
    img: "face1.jpg",
  },
  {
    assignee: "Stella Johnson",
    subject: "High loading time",
    status: "PROGRESS",
    lastUpdate: "Dec 12, 2017",
    trackingID: "WD-12346",
    img: "face2.jpg",
  },
  {
    assignee: "Marina Michel",
    subject: "Website down for one week",
    status: "ON HOLD",
    lastUpdate: "Dec 16, 2017 ",
    trackingID: "WD-12347",
    img: "face3.jpg",
  },
  {
    assignee: "John Doe",
    subject: "Loosing control on server",
    status: "REJECTED",
    lastUpdate: "Dec 3, 2017",
    trackingID: "WD-12348",
    img: "face4.jpg",
  },
];

export const cardData = [
  {
    title: "Weekly Sales",
    price: "$ 15,0000",
    percentage: "Increased by 60%",
    color: "success",
  },
  {
    title: "Weekly Orders",
    price: "45,6334",
    percentage: "Decreased By 10%",
    color: "primary",
  },
  {
    title: "Visitors Online",
    price: "95,5741",
    percentage: "Increased By 5%",
    color: "warning",
  },
];
export const progressData = [
  {
    name: "Herman Beck",
    date: "May 15, 2015",
    percent: 60,
    color: "success",
  },
  {
    name: "Messsy Adam",
    date: "Jul 01, 2015",
    percent: 75,
    color: "info",
  },
  {
    name: "John Richards",
    date: "Apr 12, 2015",
    percent: 90,
    color: "warning",
  },
  {
    name: "Peter Meggik",
    date: "May 15, 2015",
    percent: 50,
    color: "primary",
  },
  {
    name: "Edward",
    date: "May 03, 201",
    percent: 50,
    color: "danger",
  },
];
