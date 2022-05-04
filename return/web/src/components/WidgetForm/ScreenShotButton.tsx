import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { Loading } from '../Loading';

interface ScreenShotButtonProps {
  screenShot: string | null;
  onScreenShotTook: (screenShot: string | null) => void;
}

export function ScreenShotButton({
  screenShot,
  onScreenShotTook,
}: ScreenShotButtonProps) {
  const [isTakingScreenShot, setIsTakingScreenShot] = useState(false);

  async function handleScreenShotButton() {
    setIsTakingScreenShot(true);
    const htmlSelector = document.querySelector('html')!;
    const canvas = await html2canvas(htmlSelector);
    const base64image = canvas.toDataURL('image/png');

    onScreenShotTook(base64image);

    setIsTakingScreenShot(false);
  }

  if (screenShot) {
    return (
      <>
        <button
          type="button"
          className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={() => onScreenShotTook(null)}
          style={{
            backgroundImage: `url(${screenShot})`,
            backgroundPosition: 'right bottom',
            backgroundSize: 180,
          }}
        >
          <Trash weight="fill" />
        </button>
      </>
    );
  }

  return (
    <>
      <button
        onClick={handleScreenShotButton}
        type="button"
        className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      >
        {isTakingScreenShot ? (
          <Loading />
        ) : (
          <Camera className="w-6 h-6" />
        )}
      </button>
    </>
  );
}
