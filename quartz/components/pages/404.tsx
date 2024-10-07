import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
	  <p>Sorry for the hassle! This garden is always changing; sometimes things either weren't planted yet, or were moved unduly.</p>
	  <a href="https://nicholasvoltani.github.io/">Here's your way back to the entrance.</a>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
