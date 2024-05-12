import { useState } from 'react';
import css from "../CamperCard.module.css";

export const Tooltip =({ children, title }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {children}
      {isShown && (
        <div className={css.tooltip}>
          {title}
        </div>
      )}
    </div>
  );
}