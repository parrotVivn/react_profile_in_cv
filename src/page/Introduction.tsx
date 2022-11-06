import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Paper, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Introduction: React.FC = (props) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <React.Fragment>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          overflowY: "hidden",
          flex: "0 0 100%",
          maxWidth: theme.breakpoints.values.xl,
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Container maxWidth="md" sx={{
          backgroundColor: "transparent", p: 4, [theme.breakpoints.down('lg')]: {
            maxWidth: "100%",
          }
        }}>
          <Paper elevation={3} sx={{
            [theme.breakpoints.down('lg')]: {
              width: "100%"
            }
          }} >
            <Typography variant="h5" textAlign={"center"} gutterBottom sx={{
              p: 2, gap: 1.5, color: "primary.contrastText", borderRadius: 'md',

            }}>
              {t("MySelf")}
            </Typography>
          </Paper>
          <Grid sx={{ mt: 2 }} container spacing={0}>
            <Grid item xs={12} sm={3} sx={{

            }} >
              <Item sx={{ background: "transparent", border: 0, boxShadow: 0 }}>
                <Typography variant="h2" textAlign={"center"} gutterBottom sx={{ p: 2, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                  Beos
                </Typography>
                {t("Developer")}
              </Item>
            </Grid>
            <Grid item xs={12} sm={4} sx={{ display: "flex", alignItems: "center" }} >
              <Avatar sx={{
                alignItems: "center", width: 86, height: 86, border: 2, borderColor: "primary.contrastText",
                [theme.breakpoints.down('lg')]: {
                  margin: "0 auto",
                }
              }} alt="Cindy Baker" src="https://wallpaperaccess.com/full/5892964.jpg" />
            </Grid>
            <Grid item xs={12} sm={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
              <Typography component="sub" variant="h4" gutterBottom sx={{ p: 2, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                {t("View")}
              </Typography>
              <Typography component="sub" variant="h4" gutterBottom sx={{ p: 2, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                {localStorage.getItem("view")}
              </Typography>
            </Grid>
          </Grid>
          <Box>
            <CardContent>
              <Typography component="div" variant="h3" gutterBottom sx={{ p: 2, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                {t("Work")}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{
                [theme.breakpoints.down('lg')]: {
                  width: "100%"
                }
              }}>
                I would like to introduce myself, my name is Trinh The Nam, born in 2001, I have completed an internship at CICS for about 4 months during my time at the school as a development internship program. web and get good results. Realizing that I need to learn more and need a professional environment, I decided to join the company with the position Fresher frontend Developer. I would like to thank you for taking a few minutes to read my introduction.
              </Typography>
            </CardContent>
          </Box>
          <Box sx={{ backgroundColor: "transparent" }}>
            <Card sx={{ backgroundColor: "transparent", backgroundImage: "unset" }}>
              <CardContent sx={{ backgroundColor: "transparent" }}>
                <Grid container >
                  <Grid sm={6} item>
                    <Typography component="div" variant="h4" gutterBottom sx={{ p: 1, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                      {t("Programming Languages:")}
                      <Typography component="div" variant="h5" gutterBottom sx={{ p: 1, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                        - {t("Javascript & Typescript")}
                      </Typography>
                      <Typography component="div" variant="h5" gutterBottom sx={{ p: 1, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                        - {t("Java")}
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid sm={6} item>
                    <Typography component="div" variant="h4" gutterBottom sx={{ p: 1, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                      {t("Frameworks/Platforms: ")}
                      <Typography component="div" variant="h5" gutterBottom sx={{ p: 1, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                        - {t("HTML, CSS/SASS Basic")}
                      </Typography>
                      <Typography component="div" variant="h5" gutterBottom sx={{ p: 1, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                        - {t("ReactJS, Ionic ")}
                      </Typography>
                      <Typography component="div" variant="h5" gutterBottom sx={{ p: 1, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                        - {t("Redux, Marteral ")}
                      </Typography>
                      <Typography component="div" variant="h5" gutterBottom sx={{ p: 1, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                        - {t("Nodejs, Express, MongoDB, Swagger ")}
                      </Typography>
                      <Typography component="div" variant="h5" gutterBottom sx={{ p: 1, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                        - {t("PHP laravel ")}
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid sm={6} item>
                    <Typography component="div" variant="h4" gutterBottom sx={{ p: 1, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                      {t("Tools: ")}
                      <Typography component="div" variant="h5" gutterBottom sx={{ p: 1, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                        - {t("Docker desktop basic")}
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid sm={12} item>
                    <Typography component="div" variant="h4" gutterBottom sx={{ p: 1, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                      Interns CICS company:
                      <Typography component="div" variant="h5" gutterBottom sx={{ p: 1, gap: 1.5, color: "primary.contrastText", borderRadius: 'md', }}>
                        Oct 2021
                        <div> - Practice according to the recommendation of the school.</div>
                        <div> - Build and develop website management solutions Schools.</div>
                        <div> - Teamwork, using laravel language with front-end.</div>
                        <div> - Build api json, verify with api key and token.</div>
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </React.Fragment >
  );
};
export default Introduction;
