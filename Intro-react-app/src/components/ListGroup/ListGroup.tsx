import { useState } from "react";
import styles from "./ListGroup.module.css";

// interface ListProps {
//   items: string []
//   heading: string
// }
interface ListProps {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectedItem }: ListProps) => {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [name, setName] = useState("Aaron");

  // const UpdateIndex = (index:any) => {
  //   setSelectedIndex(index);
  //   console.log(selectedIndex);
  //   console.log(index,"This is just the index");
  // }

  // let selectedIndex = 0;

  // Event  handler which a function to handle aqn event
  // const handleClick = (e:MouseEventHandler) => {
  //   console.log(e.target.innerText);

  // items = [];

  const getMessage = () => {
    return items.length == 0 ? <p>No Items found</p> : null;
  };

  // if (items.length == 0) {
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No Items found</p>
  //     </>
  //   );
  // }

  return (
    //JSX we must have one parent element. Example div, Fragment 0r <>, </>
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className={[styles.ListGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? styles["listGroupItem"]
                : styles["listGroupItem"]
            }
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <p>{name}</p>
      <button className="btn btn-primary" onClick={() => setName("Aaron")}>
        Update to New name
      </button>
    </>
  );
};

export default ListGroup;
