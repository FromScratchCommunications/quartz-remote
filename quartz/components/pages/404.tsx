import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <article class="popover-hint">
      <h1>Oh-oh!</h1>
      <p>Dieser Link führt leider noch ins Leere, hochtswahrscheinlich, weil die Seite noch nicht veröffentlicht wurde. Wenn du über neue Kapitel benachrichtigt werden willst, melde dich für unseren Newsletter an: (LINK ZUM NEWSLETTER) </p>
      // <p>{i18n(cfg.locale).pages.error.notFound}</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
