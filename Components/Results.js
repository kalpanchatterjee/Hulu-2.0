import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ data }) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex justify-center flex-wrap ">
      {data.results.map((value, index) => (
        <Thumbnail key={value.id} id={value.id} value={value} />
      ))}
    </FlipMove>
  );
}

export default Results;
