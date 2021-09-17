export const initialState = {
  note: [],
  archive: []
};
export const ACTIONS = {
  ADD_NOTES: "addNotes",
  ADD_TO_ARCHIVE: "addToArchive"
};

function addNotes(title, lists) {
  // console.log(lists.split("\n"));
  return {
    id: Date.now(),
    title,
    lists
  };
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NOTES:
      const title = action.title;
      let lists = action.lists;
      lists = lists.split("\n");
      const notes = addNotes(title, lists);
      const note = [...state.note, notes];
      state.note = note;
      console.log(state);
      return { ...state };
    case ACTIONS.ADD_TO_ARCHIVE:
      const data = action.data;
      const archive = [...state.archive, data];
      state.archive = archive;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
