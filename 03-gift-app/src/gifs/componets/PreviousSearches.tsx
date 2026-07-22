import type { FC } from "react";

interface Props {
  searches: string[];

  onLabelClickd: (term:string) => void;
}

export const PreviousSearches: FC<Props> = ({searches, onLabelClickd}) => {
  return (
    <div className="previous-searches">
    <h2>Busquedas previas</h2>
        <ul className="previous-searches-list">
        {searches.map(term => (
            <li key={term}onClick={() => onLabelClickd(term)}>
              {term}
            </li>
          ))}
        </ul>
    </div>
  );
};
