import styled from '@emotion/styled/macro';

const IframeWrapper = styled('div')`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`;

const SoundCloudIframe = () => {
  return (
    <IframeWrapper>
      <iframe
        width="100%"
        height="450"
        scrolling="no"
        frameBorder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/582274227&color=%23ff9900&auto_play=false&hide_related=true&show_artwork=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </IframeWrapper>
  );
};

export default SoundCloudIframe;
