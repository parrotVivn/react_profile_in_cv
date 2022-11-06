import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {
  Box, Button, Container, ImageList, ImageListItem, Paper, Typography, useTheme
} from '@mui/material';
import React, { FC, ReactNode, useState } from "react";
import { useTranslation } from 'react-i18next';
interface SidebarProps {
  children?: ReactNode;
}
const Home: React.FC = (props) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const Sidebar: FC<SidebarProps> = () => {
    const [data, setData] = useState([{
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },])
    const handleClickChangeIndexImage = (status: "next" | "pre") => {
      if (status === "next") {
        setData((e) => {
          let _data = JSON.parse(JSON.stringify(e)); _data.push(e[0]); _data.shift();
          return _data;
        })
      } else {
        setData((e) => {
          let _data = JSON.parse(JSON.stringify(e));
          _data.unshift(e[2]);
          _data.pop();
          return _data;
        })
      }
    }
    return (
      <Box sx={{ display: "flex", position: 'relative' }}>
        <Button onClick={() => { handleClickChangeIndexImage("next") }} sx={{ width: 100, position: 'absolute', top: "50%", left: "0%", zIndex: 600, transform: 'translateY(-50%)', }} variant="contained" startIcon={<WbSunnyIcon />} >{("Light")}</Button>
        <ImageList sx={{ width: "100%", height: 300, }} cols={0} rowHeight={64}>
          {
            <ImageListItem key={data[0].img}>
              <img
                src={`${data[0].img}`}
                srcSet={`${data[0].img}`}
                alt={data[0].title}
                loading="lazy"
                style={{ height: 300, backgroundImage: `${data[0].img}`, objectFit: "cover", backgroundPosition: "center center" }}
              />
            </ImageListItem>
          }
        </ImageList>
        <Button onClick={() => { handleClickChangeIndexImage("pre") }} sx={{ width: 100, position: 'absolute', top: "50%", right: "0%", zIndex: 600, transform: 'translateY(-50%)', }} variant="contained" startIcon={<WbSunnyIcon />} >{("Light")}</Button>
      </Box>
    );
  };

  const ExploreCategories: FC<SidebarProps> = () => {
    return (
      <React.Fragment>
        <Paper>
          <Typography variant="h3" gutterBottom sx={{ color: "primary.contrastText", mt: 2, p: 2 }}>
            {t("Explore categories")}
          </Typography>
        </Paper>
      </React.Fragment>
    )
  };


  return (
    <React.Fragment>
      <Box sx={{
        width: "100%", display: 'flex', margin: "0 auto", justifyContent: "space-around", backdropFilter: "blur(3px)", position: "fixed", zIndex: 9999
        , [theme.breakpoints.down('md')]: { width: "100vw", }
      }}>
        <Container maxWidth="md" sx={{
          backgroundColor: "rgba(255, 255, 255, 0.08)", p: 4, [theme.breakpoints.down('lg')]: {
            maxWidth: "100%",
          }
        }}>
          <Sidebar />
          <ExploreCategories />
        </Container>
      </Box>
    </React.Fragment >
  );
};
export default Home;

// explore-categories