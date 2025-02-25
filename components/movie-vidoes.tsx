import { API_URL } from "../app/constants";
import style from "../styles/movie-vides.module.css";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVidoes({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={style.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
