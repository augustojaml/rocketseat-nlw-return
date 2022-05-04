import { useState } from 'react';
import { bugSvg, ideaSvg, thoughtSvg } from '../../assets/images';
import { FeedBackContentStep } from './Steps/FeedBackContentStep';
import { FeedBackSuccessStep } from './Steps/FeedBackSuccessStep';
import { FeedBackTypeStep } from './Steps/FeedBackTypeStep';

export const feedBackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugSvg,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaSvg,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtSvg,
      alt: 'Imagem de um balão',
    },
  },
};

export type FeedBackType = keyof typeof feedBackTypes;

export function WidgetForm() {
  //

  const [feedBackType, setFeedBackType] =
    useState<FeedBackType | null>(null);
  const [feedBackSent, setFeedBackSent] = useState(false);

  function handleRestartFeedBack() {
    setFeedBackSent(false);
    setFeedBackType(null);
  }

  return (
    <>
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        {feedBackSent ? (
          <FeedBackSuccessStep
            onFeedBackRestartRequest={handleRestartFeedBack}
          />
        ) : (
          <>
            {!feedBackType ? (
              <FeedBackTypeStep
                onFeedBackTypeChanged={setFeedBackType}
              />
            ) : (
              <FeedBackContentStep
                feedBackType={feedBackType}
                onFeedBackRestartRequest={handleRestartFeedBack}
                onFeedBackSent={() => setFeedBackSent(true)}
              />
            )}
          </>
        )}

        <footer className="text-xs text-neutral-400">
          Feito com ♥ pela{' '}
          <a href="#" className="underline underline-offset-2">
            Rocketseat
          </a>
        </footer>
      </div>
    </>
  );
}
