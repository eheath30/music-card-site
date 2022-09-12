import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import { NavLink, useNavigate } from "react-router-dom";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;

  margin-bottom: 10px;
`;


const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1)
    setOpen(!isOpen)
  }


  return (
    <NavLinksContainer style={{zIndex: 10}}>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <NavLink
                      className={({ isActive }) =>
                        isActive
                        ? "selected link-primary p-2 m-2 mt-5 ms-3"
                        : "link-dark m-2 mt-5 ms-3"
                      }
                      to="/about"
                      onClick={() => setOpen(!isOpen)}
                    >
                      About
                    </NavLink>
          </LinkItem>
          <LinkItem>
          <NavLink
                      className={({ isActive }) =>
                        isActive
                        ? "selected link-primary p-2 m-2 ms-3"
                        : "link-dark m-2 ms-3"
                      }
                      to="/artists"
                      onClick={() => setOpen(!isOpen)}
                    >
                      Artists
                    </NavLink>
          </LinkItem>
          <LinkItem>
          <NavLink
                      className={({ isActive }) =>
                        isActive
                        ? "selected link-primary p-2 m-2 ms-3"
                        : "link-dark m-2 ms-3"
                      }
                      to="/newcardpage"
                      onClick={() => setOpen(!isOpen)}
                    >
                      Add Artist
                    </NavLink>
          </LinkItem>
          <LinkItem>
          <NavLink
                      className={({ isActive }) =>
                        isActive
                        ? "selected link-primary p-2 m-2 ms-3"
                        : "link-dark m-2 ms-3"
                      }
                      to="/search"
                      onClick={() => setOpen(!isOpen)}
                    >
                      Search
                    </NavLink>
          </LinkItem>
          <LinkItem>
          <NavLink
                      className={({ isActive }) =>
                        isActive
                        ? "selected link-primary p-2 m-2 ms-3"
                        : "link-dark m-2 ms-3"
                      }
                      to="/favourites"
                      onClick={() => setOpen(!isOpen)}
                    >
                      Favourites
                    </NavLink>
          </LinkItem>
          <LinkItem>
          <button
                      className="btn btn-danger btn-sm my-2 ms-4"
                      onClick={() => (handleBack())}
                    >
                      Back
                    </button>
                    </LinkItem>
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
