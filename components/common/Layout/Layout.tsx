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
import { FunctionComponent, ReactNode } from "react"
 
type Props = {
  children: ReactNode | ReactNode[]
}
 
const Layout: FunctionComponent<Props> = ({children}) => {
  return (
    <div className="layout">
      { children }
    </div>
  )
}

export default Layout;
