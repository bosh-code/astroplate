import config from "@/config/config.json";
import { DiscussionEmbed } from "disqus-react";
import React, { type FC } from "react";

type DisqusProps = Readonly<{ className?: string }>;

const Disqus: FC<DisqusProps> = ({ className }) => {
  const { disqus } = config;
  return (
    <div className={className}>
      {disqus.enable && (
        <DiscussionEmbed
          shortname={disqus.shortname}
          config={disqus.settings}
        />
      )}
    </div>
  );
};

export default Disqus;
