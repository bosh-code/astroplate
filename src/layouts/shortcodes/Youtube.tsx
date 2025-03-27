import React, { type FC } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type YoutubeProps = Readonly<{
  id: string;
  title: string;
}>;

const Youtube: FC<YoutubeProps> = ({
  id,
  title,
  ...rest
}: {
  id: string;
  title: string;
}) => (
  <LiteYouTubeEmbed
    wrapperClass="yt-lite rounded-lg"
    id={id}
    title={title}
    {...rest}
  />
);

export default Youtube;
