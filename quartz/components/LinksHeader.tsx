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
            <a href="/now">Now</a>
          </span>
          <span>
            <a href="/Outputs/">Writings</a>
          </span>
          <span>
            <a href="/tags/mini-essay">Mini-Essays</a>
          </span>
          <span>
            <a href="/011a-MOC-Capital-I">O Capital</a>
          </span>
        </div>
      <hr style="background-color: var(--gray); border-top: 1px var(--gray) solid; margin-top: 1.3rem"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor