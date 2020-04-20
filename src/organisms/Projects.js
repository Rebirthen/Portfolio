import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

export const Projects = ({ cards,classes }) => {
  return (
    <Container className={classes.cardGrid}>
      <Typography variant="h7" align="center" color="textSecondary" paragraph>
        HERE MY PROJECTS
      </Typography>
      <Grid container spacing={1}>
        {cards.map(card => (
          <Grid item key={card} sm={3} xs={12}>
            <Card className={classes.card}>
              <Link href={card.url} target="_blank">
                <CardMedia
                  className={classes.cardMedia}
                  image={require("../assets/" + card.image)}
                  title={card.title}
                />
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
