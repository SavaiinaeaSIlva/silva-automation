import { siteContent } from '../../content/siteContent';

type LoaderProps = {
  fullScreen?: boolean;
};

export default function Loader({ fullScreen = false }: LoaderProps) {
  const { loadingText } = siteContent.loader;

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">{loadingText}</div>
      </div>
    );
  }

  return (
    <div className="min-h-loader flex items-center justify-center">
      <div className="text-muted">{loadingText}</div>
    </div>
  );
}
