import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:5001/assets/info3.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>goodreads</Typography>
        <Typography color={medium}>goodreads.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Goodreads is the largest site for readers and book recommendations. Our
        mission is to help people find and share books they love.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
