import { successSvg } from '../../../assets/images';
import { CloseButton } from '../../CloseButton';

interface FeedBackSuccessStepProps {
  onFeedBackRestartRequest: () => void;
}

export function FeedBackSuccessStep({
  onFeedBackRestartRequest,
}: FeedBackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successSvg} alt="success" />
        <span className="text-xl mt-2">Agradecemos o feedback</span>

        <button
          onClick={onFeedBackRestartRequest}
          className="py-2 px-2 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:border-brand-500  focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
