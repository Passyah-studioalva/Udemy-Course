import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[]
}

const Grid: FC<Props> = ({ children }) => {
  return (
    <div className="root-grid">
      {children}
    </div>
  )
};

export default Grid;
