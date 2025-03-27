import React, { type FC } from "react";

type VideoProps = Readonly<{
  title: string;
  width: number;
  height: number | "auto";
  src: string;
}>;

const Video: FC<VideoProps> = ({
  title,
  width = 500,
  height,
  src,
  ...rest
}) => {
  return (
    <video
      className="overflow-hidden rounded-lg"
      width={width}
      height={height}
      controls
      {...rest}
    >
      <source
        src={src.match(/^http/) ? src : `/videos/${src}`}
        type="video/mp4"
      />
      {title}
    </video>
  );
};

export default Video;
