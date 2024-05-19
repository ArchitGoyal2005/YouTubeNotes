import Button from "../components/Button";
import { useNotes } from "../contexts/NotesContext";

function DeleteEditBtns({ id, content }) {
  const { deleteHandler, setEdit, setInputText } = useNotes();
  return (
    <div className="flex gap-1">
      <Button onClick={() => deleteHandler(id)}>Delete Note</Button>
      <Button
        onClick={() => {
          setEdit(id);
          setInputText(content);
        }}
      >
        Edit Note
      </Button>
    </div>
  );
}

export default DeleteEditBtns;
