import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"

interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div>
        <div id="links-header">
          <span>
            <a href="https://nicholasvoltani.github.io/">Home</a>
          </span>
          <span>
            <a href="https://nicholasvoltani.github.io/Outputs/">Writings</a>
          </span>
          <span>
            <a href="https://nicholasvoltani.github.io/020-MOC-Mathematics">Maths</a>
          </span>
          <span>
            <a href="https://nicholasvoltani.github.io/010-MOC-Marxism">Marxismo</a>
          </span>
          <span>
            <a href="https://nicholasvoltani.github.io/040-MOC-Complex-Systems">Complex Systems</a>
          </span>
        </div>
      <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor