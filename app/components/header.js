import Link from "next/link";
import { jsx, Global, css } from "@emotion/core";
/** @jsx jsx */

export default () => (
  <>
  <Global
      styles={
        css`
        .header {
          background: white;
          width: 100%;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 4rem;
          position: fixed;
          box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
          box-shadow: 0px 10px 20px hsla(200, 20%, 20%, 0.20);
        }
        a {
          text-decoration: none;
        }
        .logo {
          font-size: 2rem;
          margin: 0;
          color: black;
        }
        .links {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 40%;
          margin-left: auto;
        }
        .nav-btn {
          padding: 0.5rem 1.5rem;
          background: gray;
          border-radius: 25px;
          color: white;
          text-decoration: none;
        }
        .nav_link {
          cursor: pointer;
          transition: all 0.5s ease;
          &:hover {
            color: red;
          }
        }
        `
      }
    />
  <header
    className = 'header'
    >
    
    <Link href="/" passHref>
          <a css={{ color: 'hsl(200,20%,50%)', cursor: 'pointer' }}><p className='logo'>
      My Blog
    </p></a>
        </Link>
    <div className='links'>
      <Link href="/post/new" passHref >
        <a className='nav-btn'>Add Post</a>
      </Link>
      <p className = 'nav_link'>Recipe</p>
      <p className = 'nav_link'>About Me</p>
      <p className = 'nav_link'>Contact</p>
    </div>
  </header>
  </>
);

