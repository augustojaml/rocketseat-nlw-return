import { bugSvg, ideaSvg, thoughtSvg } from '../assets/images';
import { CloseButton } from './CloseButton';

const feedBackTypes = {
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

export function WidgetForm() {
  return (
    <>
      <div
        className="
          bg-zinc-900 p-4 
          relative 
          rounded-2xl 
          mb-4 flex 
          flex-col 
          items-center 
          shadow-lg 
          w-[calc(100vw-2rem)]
          md:w-auto
        "
      >
        <header>
          <span className="text-xl leading-6">
            Deixe seu feedback
          </span>
          <CloseButton />
        </header>

        <div className="flex py-8 gap-2 w-full">
          {Object.entries(feedBackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                onClick={() => {}}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>

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
