// import React, { useState } from "react";

// function StarReview({ rating, setRating, totalStars }) {
//   const [hover, setHover] = useState(null);
//   return (
//     <div>
//       {[...Array(totalStars)].map((star, index) => {
//         const currentRating = index + 1;

//         return (
//           <label key={index}>
//             <input
//               type="radio"
//               name="rating"
//               value={currentRating}
//               onChange={() => setRating(currentRating)}
//             />
//             <span
//               className="star"
//               style={{
//                 color:
//                   currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
//               }}
//               onMouseEnter={() => setHover(currentRating)}
//               onMouseLeave={() => setHover(null)}
//             >
//               &#9733;
//             </span>
//           </label>
//         );
//       })}
//     </div>
//   );
// }

// export default StarReview;

/************** with half rating************************ */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Rating } from "react-simple-star-rating";
import { starRating } from "../features/Review/reviewSlice";

function StarReview({ companyRating, form }) {
  const dispatch = useDispatch();
  const rating = useSelector((state) => state?.review?.rating);
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => {};
  return (
    <div>
      <Rating
        onClick={(rate) => {
          dispatch(starRating(rate));
        }}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        initialValue={form === "add-review" ? rating : companyRating}
        allowFraction={true}
        readonly={form === "add-review" ? false : true}
        SVGstyle={{ display: "inline" }}
        size={form === "add-review" ? 45 : 22}
      />
    </div>
  );
}

export default StarReview;
