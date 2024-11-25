/** @jsx jsx */
import { Box, useColorMode, jsx } from "theme-ui";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">();
  const isDark = colorMode === `dark`;

  return (
    <Box as="footer" variant="footer" sx={{ textAlign: "center", py: 3 }}>
      <button
        sx={{
          variant: `buttons.toggle`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          border: `none`,
          background: `transparent`,
          cursor: `pointer`,
          mx: `auto`,
          mb: 3,
          fontSize: 4,
        }}
        onClick={() => {
          const next = isDark ? `light` : `dark`;
          setColorMode(next);
          document.documentElement.classList.value = `theme-ui-${next}`;
          document.body.setAttribute('data-theme', next);
        }}
        type="button"
        aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      >
        {isDark ? <MdOutlineWbSunny color="white" /> : <LuMoonStar color="black" />}
      </button>
      <p>
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </Box>
  );
};

export default Footer;
