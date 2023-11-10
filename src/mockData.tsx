const mockData: Array<{
  id: number;
  name: string;
  createdAt: string;
  deletedAt: string | null;
  status: string;
  groups: Array<string>;
}> = [
  {
    id: 1,
    name: "Chris Kross",
    createdAt: "10.10.2010",
    deletedAt: "30.11.2013",
    status: "deactive",
    groups: ["Italy", "France"],
  },
  {
    id: 2,
    name: "Valentina Perez",
    createdAt: "13.10.2010",
    deletedAt: "05.05.2012",
    status: "deactive",
    groups: ["Mexico", "USA", "Guatemala"],
  },
  {
    id: 3,
    name: "Emmeline Vo",
    createdAt: "01.07.2012",
    deletedAt: "01.10.2015",
    status: "deactive",
    groups: ["Sweden"],
  },
  {
    id: 4,
    name: "Rocco Burch",
    createdAt: "10.10.2017",
    deletedAt: null,
    status: "active",
    groups: ["Sweden", "Norway"],
  },
  {
    id: 5,
    name: "Iyla Dawson",
    createdAt: "02.09.2017",
    deletedAt: null,
    status: "active",
    groups: ["Italy"],
  },
  {
    id: 6,
    name: "Hattie Campbell",
    createdAt: "06.02.2018",
    deletedAt: "30.04.2022",
    status: "deactive",
    groups: ["Ireland"],
  },
  {
    id: 7,
    name: "Wyatt Ali",
    createdAt: "15.10.2018",
    deletedAt: null,
    status: "active",
    groups: ["Scotland"],
  },
  {
    id: 8,
    name: "Killian Delarosa",
    createdAt: "16.11.2019",
    deletedAt: null,
    status: "active",
    groups: ["Italy"],
  },
  {
    id: 9,
    name: "Janelle Ray",
    createdAt: "12.03.2020",
    deletedAt: null,
    status: "active",
    groups: ["Japan"],
  },
  {
    id: 10,
    name: "Henning Schwarz",
    createdAt: "13.10.2020",
    deletedAt: null,
    status: "active",
    groups: ["China"],
  },
  {
    id: 11,
    name: "Arlo Fernandez",
    createdAt: "19.08.2020",
    deletedAt: null,
    status: "active",
    groups: ["Italy"],
  },
  {
    id: 12,
    name: "Cara Burns",
    createdAt: "10.10.2021",
    deletedAt: null,
    status: "active",
    groups: ["Thailand"],
  },
  {
    id: 13,
    name: "Ailani Choi",
    createdAt: "01.07.2021",
    deletedAt: null,
    status: "active",
    groups: ["Thailand"],
  },
  {
    id: 14,
    name: "Khari Stephens",
    createdAt: "09.12.2021",
    deletedAt: null,
    status: "active",
    groups: ["India"],
  },
  {
    id: 15,
    name: "Ila Bartlett",
    createdAt: "13.05.2022",
    deletedAt: null,
    status: "active",
    groups: ["Costa Rica"],
  },
  {
    id: 16,
    name: "Gabrielle Gregory",
    createdAt: "22.09.2022",
    deletedAt: null,
    status: "active",
    groups: ["India"],
  },
  {
    id: 17,
    name: "Jenna Snyder",
    createdAt: "29.12.2022",
    deletedAt: null,
    status: "active",
    groups: ["Mexico"],
  },
  {
    id: 18,
    name: "Aubrielle Escobar",
    createdAt: "30.12.2022",
    deletedAt: null,
    status: "active",
    groups: ["Thailand"],
  },
];

export default mockData;
