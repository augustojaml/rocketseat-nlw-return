import { ArrowLeft } from 'phosphor-react';
import { FeedBackType, feedBackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedBackContentStepProps {
  feedBackType: FeedBackType;
  onFeedBackRestartRequest: () => void;
}

export function FeedBackContentStep({ feedBackType }: FeedBackContentStepProps) {
  const feedBackTypeInfo = feedBackTypes[feedBackType];

  return (
    <>
      <header>
        <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedBackTypeInfo.image.source} alt={feedBackTypeInfo.image.alt} className="w-6 h-6" />
          {feedBackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
}
