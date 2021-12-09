import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";



var dateParser = (date) => {
  const newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
    //   month: "long",
    //   day: "numeric",
  });
  return newDate;
}

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}>
          
      </Badge>
      
    
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "Series" : "Films"}
        <span className="subTitle">{dateParser(date)}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
