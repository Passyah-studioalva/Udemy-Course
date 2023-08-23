import { FC, ReactNode } from "react";
import s from "./Grid.module.css"

type Props = {
  children: ReactNode | ReactNode[]
}

const Grid: FC<Props> = ({ children }) => {
  return (
    <div className={s.root}>
      {children}
    </div>
  )
};

export default Grid;
