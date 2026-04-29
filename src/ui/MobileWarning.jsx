import { useState } from "react";

import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

const StyledMobileWarning = styled.main`
  min-height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;

  padding: clamp(1.6rem, 4vw, 4.8rem);
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  width: 100%;
  max-width: 96rem;
  text-align: center;

  padding: clamp(2rem, 5vw, 4.8rem);

  & h1 {
    margin-bottom: 1.6rem;
    font-size: clamp(2rem, 4vw, 4rem);
    line-height: 1.3;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
    font-size: clamp(1.4rem, 2vw, 1.8rem);
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    border-radius: 12px;

    & p {
      margin-bottom: 2.4rem;
    }

    & button {
      padding: 0.75rem 1.5rem;
      font-size: 1.3rem;
    }
  }
`;

const POPUP = "mobilePopupShown";

function MobileWarning({ children }) {
  const [isShown, setIsShown] = useState(
    () => JSON.parse(sessionStorage.getItem(POPUP)) ?? false,
  );

  function handleClick() {
    setIsShown(true);
    sessionStorage.setItem(POPUP, true);
  }

  if (window.innerWidth < 1200 && !isShown)
    return (
      <StyledMobileWarning>
        <Box>
          <Heading as="h1">Oops! This screen is too small 📱</Heading>
          <p>
            This app is optimized for desktop use. Please open it on a larger
            screen for the best experience.
          </p>
          <Button size="large" onClick={handleClick}>
            Continue anyway
          </Button>
        </Box>
      </StyledMobileWarning>
    );

  return children;
}

export default MobileWarning;
