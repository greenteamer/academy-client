import { FC } from "hoist-non-react-statics/node_modules/@types/react";

export type Props = { link: string };

export const Trailer: FC<Props> = ({ link }) => (
  <div id="video-trailer" className="container m-t-block-mini video-iframe">
    <div className="row">
      <div className="col-md-12 p-md-0 p-r">
        <iframe
          className="border-radius-large"
          src={link}
          width="100%"
          height="600"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
        <span className="btn plashka-video open-video d-flex align-items-center color-gray">
          <i className="icon-play" aria-hidden="true"></i>Смотреть трейлер
        </span>
      </div>
    </div>
  </div>
);
