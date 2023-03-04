import { useSearchParams } from "react-router-dom"
import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle"

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get("q")
  const { data: movies } = useFetch(apiPath, queryTerm)

  // returns null - bottom line
  useTitle(`Search Result for ${queryTerm}`)

  return (
    <main>
      <section className="p-4">
        <p className="text-4xl text-gray-600 dark:text-white">
          {movies.length === 0
            ? `No Result Found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap ">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
