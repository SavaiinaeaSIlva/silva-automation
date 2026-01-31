type LoaderProps = {
  fullScreen?: boolean;
};

export default function Loader({ fullScreen = false }: LoaderProps) {
  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <div className="text-muted">Loading...</div>
    </div>
  );
}
