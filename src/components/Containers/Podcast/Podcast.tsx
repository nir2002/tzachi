import React from "React"
import Layout from "../../../components/layout"
import EpisodeCard from "./EpisodeCard"

export interface PodcastEpisode {
  title: string
  description: string
  thumbnailPath: string
}

const episodesData: PodcastEpisode[] = [
  {
    title: "לורם איפסום דולור סיט אמט ",
    description:
      "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקו איבן איף, ברומץ ",
    thumbnailPath: "",
  },
  {
    title: "לורם איפסום דולור סיט אמט ",
    description:
      "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקו איבן איף, ברומץ ",
    thumbnailPath: "",
  },
  {
    title: "לורם איפסום דולור סיט אמט ",
    description:
      "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקו איבן איף, ברומץ ",
    thumbnailPath: "",
  },
]

export default () => (
  <Layout>
    <h1>פודקאסט</h1>
    {episodesData.map((episode, index) => (
      <EpisodeCard index={index + 1} data={episode} />
    ))}
  </Layout>
)
