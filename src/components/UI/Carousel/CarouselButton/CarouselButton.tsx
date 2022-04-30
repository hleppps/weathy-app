import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { FC } from "react";
import { CarouselButtonDirections } from "../../../../constants/carouselConstants";

const { back: backButton, forward: forwardButton } = CarouselButtonDirections;

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
      sx={{
        borderRadius: 0,
        marginTop: "40px",
        maxWidth: "40px",
        minWidth: "40px",
      }}
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
