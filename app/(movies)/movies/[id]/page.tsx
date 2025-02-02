import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVidoes from "../../../../components/movie-vidoes";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MoviesDetailPage({ params, searchParams }) {
  const { id } = await params;
  // console.log("params----------", { id });
  // console.log("searchParams-------------", await searchParams);
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  // return <h1>{movie.title}</h1>;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVidoes id={id} />
      </Suspense>
    </div>
  );
}
