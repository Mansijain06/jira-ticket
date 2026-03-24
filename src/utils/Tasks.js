export const initialData = {
  tasks: {
    1: { id: 1, title: "Fix Bug", status: "new", order: 6 },
    2: { id: 2, title: "UI Fix", status: "inprogress", order: 4 },
    3: { id: 3, title: "Bug 3", status: "new", order: 3 },
    4: { id: 4, title: "Fix 2", status: "inprogress", order: 2 },
    5: { id: 5, title: "UI Fix5", status: "done", order: 5 },
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
      tasksIds: [2, 4],
    },
    done: {
      id: "",
      title: "done",
      tasksIds: [5],
    },
  },
  columsOrder: ["todo", "inprogress", "done"],
};