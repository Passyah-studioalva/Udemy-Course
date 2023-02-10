/* Example 1 */
// import { FC } from "react"

// const Layout:FC = ({ children }:any) => {
//     return (
//         <div className="layout">
//             { children }
//         </div>
//     )
// }

// export default Layout

/* Example 2 */
// import { FC } from "react"

// const Layout:FC = ({ children }) => {
//     return (
//         <div className="layout">
//             { children }
//         </div>
//     )
// }

// export default Layout

/* Example 3 */
// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return <div className="layout">{children}</div>;
// };
/* Example 4 from creator philip */
import { FunctionComponent, ReactNode } from "react";
import style from "./Layout.module.css"

type Props = {
  children: ReactNode | ReactNode[];
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <main className={ style.root }>
        {children}
      </main>
    </>
  );
};

export default Layout;
