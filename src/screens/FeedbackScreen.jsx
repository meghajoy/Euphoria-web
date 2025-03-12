import React from "react";
import Feedback from "../components/Feedback/Feedback";

const FeedbackScreen = () => {
  const feedback = [
    {
      id: 1,
      image: "../../../../assets/images/span-1.svg",
      starimg: "../../../../assets/images/star1.svg",
      name: "Floyd Miles",
      review:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit./b Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      image: "../../../../assets/images/span-2.svg",
      starimg: "../../../../assets/images/star2.svg",
      name: "Ronald Richards",
      review:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit./b Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      image: "../../../../assets/images/span-3.svg",
      starimg: "../../../../assets/images/star1.svg",
      name: "Savannah Nguyen",
      review:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit/b non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 4,
      image: "../../../../assets/images/span-1.svg",
      starimg: "../../../../assets/images/star1.svg",
      name: "John Doe",
      review:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit./b Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 5,
      image: "../../../../assets/images/span-2.svg",
      starimg: "../../../../assets/images/star2.svg",
      name: "Jane Smith",
      review:
       "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit./b Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 6,
      image: "../../../../assets/images/span-3.svg",
      starimg: "../../../../assets/images/star1.svg",
      name: "Alice Johnson",
      review:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit./b Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return <Feedback feedback={feedback} />;
};

export default FeedbackScreen;