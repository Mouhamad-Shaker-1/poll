
import { Box } from '@mui/material';
import imgs from '../img/index.ts'

interface Icon {
nameImg: keyof typeof imgs;
  color?: string;
}

const Icon: React.FC<Icon> = ({ nameImg , color = 'gray' }) => {

    const urlColorImage: keyof typeof imgs =
    color === "blue" ? (nameImg + "Blue" as keyof typeof imgs) : nameImg;

    const vectorColor: keyof typeof imgs =
    color === "blue" ? 'VectorBlue' : 'Vector';

  return (
    <Box
      sx={{
        position: "relative",
        width: "2.7rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img style={{width: '100%'}} src={imgs[vectorColor]} alt="" />
      <img
        style={{
          position: "absolute",
        }}
        width="50%"
        src={imgs[urlColorImage]}
      />
    </Box>
  );
};

export default Icon;
