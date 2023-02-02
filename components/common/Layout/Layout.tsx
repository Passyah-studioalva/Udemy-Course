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
import { FC } from "react"

const Layout:FC = ({ children }) => {
    return (
        <div className="layout">
            { children }
        </div>
    )
}

export default Layout