import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVidoes from "../../../../components/movie-vidoes";

type IParams = Promise<{ id: string }>;

export async function generateMetadata(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MoviesDetailPage(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
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
