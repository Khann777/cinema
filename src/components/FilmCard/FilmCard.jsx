import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function FilmCard(props) {
  const {
    posterUrl,
    nameEn,
    nameRu,
    filmLength,
    rating,
    ratingVoteCount,
    year,
  } = props;
  return (
    <Card
      sx={{
        width: "400px",
        background: "rgba(255, 255,255,0.5)",
        borderRadius: "20px",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="600" image={posterUrl} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            <strong>{nameRu}</strong>
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {nameEn}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <strong>Year:</strong> {year}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <strong>Film length:</strong> {filmLength}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <strong>Rating:</strong> {rating}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <strong>Rating votes:</strong> {ratingVoteCount}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
