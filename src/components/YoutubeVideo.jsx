import YouTube from "react-youtube";
import { usePlayer } from "../contexts/PlayerContext";

function YoutubeVideo() {
  const { onReady, vidId: id } = usePlayer();

  const opts = {
    height: "600",
    width: "1070",
    playerVars: {
      rel: 0,
    },
  };

  return (
    <section className="video-container">
      <YouTube videoId={id} opts={opts} onReady={onReady} />
    </section>
  );
}

export default YoutubeVideo;
