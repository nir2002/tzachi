import React from "React"

//@ts-ignore
import podcastEpisodesData from "../../../../data/podcast.json"
import EpisodeCard from "./EpisodeCard"

export interface PodcastEpisode {
  title: string
  description: string
  imagePath: string
  episodeLink: string
  episodeInfoText: string
}

const episodesData: PodcastEpisode[] = podcastEpisodesData

export default function Podcast() {
  return (
    <div>
      <h1>פודקאסט</h1>
      {episodesData.map((episode, index) => (
        <EpisodeCard key={index} index={index + 1} data={episode} />
      ))}
    </div>
  )
}
