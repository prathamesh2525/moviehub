/* eslint-disable jsx-a11y/iframe-has-title */
import { Link } from "react-router-dom"
import giphy from "../assets/giphy.gif"
import { useEffect } from "react"

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / Moviehub`
  })
  return (
    <main>
      <section className="flex flex-col justify-center items-center my-4">
        <p className="text-7xl textgray-700 font-bold my-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
          404, Oops
        </p>
        <div className="max-w-xl">
          <iframe
            src={giphy}
            width="480"
            height="360"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>

        <div className="my-8 ">
          <Link to={"/"}>
            <button className="w-64 text-xl p-4 font-bold hover:transition-all duration-200 ease-in-out dark:text-slate-200 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-500 hover:scale-110">
              Back to Moviehub
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
