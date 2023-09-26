import {Link,useMatch,useResolvedPath} from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved?.pathname, end: true });
    // textDecoration: match ? "underline" : "none" 
    return (
        <Link
          style={{color:match ? 'red':null, }}
          to={to}
          {...props}
        >
          {children}
        </Link>
    );
  }


export default CustomLink;