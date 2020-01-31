import React from "react"
import PreviewSection, {
  previewCardItem,
} from "../../../PreviewSection/PreviewSection"

const blogData: previewCardItem[] = [
  {
    text:
      "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקו איבן איף, ברומץ ",
    img: "",
  },
  {
    text:
      "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקו איבן איף, ברומץ ",
    img: "",
  },
  {
    text:
      "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקו איבן איף, ברומץ ",
    img: "",
  },
]

const TITLE = "הבלוג שלנו"
export default () => <PreviewSection title={TITLE} items={blogData} />
