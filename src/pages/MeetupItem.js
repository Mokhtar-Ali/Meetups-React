import classes from "../style/MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              console.log("Add to Favorites clicked");
            }}
          >
            Add to Favaorites
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
