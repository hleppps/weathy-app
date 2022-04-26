import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { FC } from "react";
import { CAROUSEL_BUTTON_DIRECTIONS } from "../constants";

const { back: backButton, forward: forwardButton } = CAROUSEL_BUTTON_DIRECTIONS;

interface CarouselButtonProps {
  direction: typeof backButton | typeof forwardButton;
  onClick: any;
}

const CarouselButton: FC<CarouselButtonProps> = ({ direction, onClick }) => {
  const icon =
    direction === backButton ? (
      <ArrowBackIosOutlined />
    ) : (
      <ArrowForwardIosOutlined />
    );

  return (
    <Button
      sx={{ borderRadius: 0 }}
      onClick={onClick}
      type="button"
      variant="contained"
      color="secondary"
    >
      {icon}
    </Button>
  );
};

export default CarouselButton;
