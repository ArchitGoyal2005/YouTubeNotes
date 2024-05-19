import { usePlayer } from "../contexts/PlayerContext";
import { formatTime } from "../helpers/formattedDate";

function Timestamp({ note }) {
  const { player } = usePlayer();

  return (
    <p className="text-sm font-normal">
      Timestamp : {""}
      <span
        className="font-medium text-violet-600 cursor-pointer"
        onClick={() => player.seekTo(note?.timestamp)}
      >
        {formatTime(!note?.id ? player.getCurrentTime() : note.timestamp)}
      </span>
    </p>
  );
}

export default Timestamp;
