import React from "react";
import styled from "styled-components";
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
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-top: 10px;
`;


export function NavLinks(props) {
  const navigate = useNavigate();
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
        <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "selected link-primary p-2"
                          : "link-dark"
                      }
                      to="/about"
                    >
                      About
                    </NavLink>
        </LinkItem>
        <LinkItem>
        <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "selected link-primary p-2"
                          : "link-dark"
                      }
                      to="/artists"
                    >
                      Artists
                    </NavLink>
        </LinkItem>
        <LinkItem>
        <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "selected link-primary p-2"
                          : "link-dark"
                      }
                      to="/newcardpage"
                    >
                      Add Artist
                    </NavLink>
        </LinkItem>
        <LinkItem>
        <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "selected link-primary p-2"
                          : "link-dark"
                      }
                      to="/search"
                    >
                      Search
                    </NavLink>
        </LinkItem>
        <LinkItem>
        <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "selected link-primary p-2"
                          : "link-dark"
                      }
                      to="/favourites"
                    >
                      Favourites
                    </NavLink>
        </LinkItem>
        <LinkItem>
        <button
                      className=""
                      onClick={() => navigate(-1)}
                    >
                      Back
                    </button>
                    </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
