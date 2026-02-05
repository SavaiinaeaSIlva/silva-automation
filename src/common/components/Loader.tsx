import { siteContent } from '@/content/siteContent';

type LoaderProps = {
  fullScreen?: boolean;
};

export default function Loader({ fullScreen = false }: LoaderProps) {
  const { loadingText } = siteContent.loader;

  const spinnerDots = (
    <div className="flex items-center justify-center gap-2" role="status" aria-label={loadingText}>
      <div className="loader-dot" />
      <div className="loader-dot" />
      <div className="loader-dot" />
      <span className="sr-only">{loadingText}</span>
    </div>
  );

  if (fullScreen) {
    return <div className="min-h-screen flex items-center justify-center">{spinnerDots}</div>;
  }

  return <div className="min-h-loader flex items-center justify-center">{spinnerDots}</div>;
}
