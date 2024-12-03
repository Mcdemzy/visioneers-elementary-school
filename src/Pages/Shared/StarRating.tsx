import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating: React.FC<{ defaultRating?: number }> = ({
  defaultRating = 0,
}) => {
  const [rating, setRating] = useState(defaultRating);
  return (
    <div className="flex">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <FaStar
            key={index}
            size={24}
            color={index < rating ? "#F44336" : "#E0E0E0"}
            onClick={() => setRating(index + 1)}
            style={{ cursor: "pointer", marginRight: "5px" }}
          />
        ))}
    </div>
  );
};

export default StarRating;
