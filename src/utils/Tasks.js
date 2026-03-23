export const initialData = {
  tasks: {
    1: { id: 1, title: "Fix Bug", status: "new" },
    2: { id: 2, title: "UI Fix", status: "inprogress" },
    3: { id: 3, title: "Bug 3", status: "new" },
  },
  colums: {
    todo: {
      id: "",
      title: "new",
      tasksIds: [1, 3],
    },
    inprogress: {
      id: "",
      title: "inprogress",
      tasksIds: [2],
    },
    done: {
      id: "",
      title: "done",
      tasksIds: [],
    },
  },
  columsOrder: ["todo", "inprogress", "done"],
};