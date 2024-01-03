import React, { useState, useEffect } from "react";
import { MDBCard, MDBCardBody, MDBTypography } from "mdb-react-ui-kit";
import Draggable from "react-draggable";

const dummyReviews = [
  {
    id: 1,
    content:
      "Exceptional service! This IT consulting firm truly understood our vision and goals for the website and UI/UX design. The delivered product exceeded our expectations. Kudos to the team for their expertise and attention to detail!",
    author: "Jesweed",
    sourceTitle: "Codenito",
  },
  {
    id: 2,
    content:
      "Working with this consulting service was a pleasure. They not only met but exceeded our expectations for website development and UI/UX design. Their proactive approach and creative flair set them apart. Highly recommended!",
    author: "John Doe",
    sourceTitle: "Example Source",
  },
  {
    id: 3,
    content:
      "Professionalism at its best! This IT consulting service demonstrated a deep understanding of UI/UX design. The collaborative approach and clear communication made the entire process smooth. Thumbs up!",
    author: "Jane Smith",
    sourceTitle: "Another Source",
  },
  {
    id: 4,
    content:
      "Outstanding IT consulting service! The delivered website and UI/UX design showcased their commitment to excellence. They not only met deadlines but also provided effective solutions. A reliable partner indeed.",
    author: "Alice Johnson",
    sourceTitle: "Source ABC",
  },
  {
    id: 5,
    content:
      "Top-notch! This IT consulting service exceeded our expectations in website development and UI/UX design. The attention to detail and dedication to client satisfaction make them a go-to choice. Source XYZ highly recommends!",
    author: "Bob Williams",
    sourceTitle: "Source XYZ",
  },
  {
    id: 6,
    content:
      "A fantastic experience! This IT consulting service has a keen eye for detail in UI/UX design. The collaborative efforts resulted in a seamless user experience. Highly impressed and would gladly work with them again!",
    author: "Eva Garcia",
    sourceTitle: "Review Site",
  },
];

const STORAGE_KEY = "reviewCardPosition";

function getRandomPosition() {
  const xPos = Math.random() * 900; // Adjust as needed (1000 - card width)
  const yPos = Math.random() * 600; // Adjust as needed (700 - card height)
  return { x: xPos, y: yPos };
}

function ReviewCard({ review }) {
  const storedPosition =
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || getRandomPosition();
  const [position, setPosition] = useState(storedPosition);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(position));
  }, [position]);

  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };

  return (
    <Draggable
      key={review.id}
      defaultPosition={position}
      onDrag={handleDrag}
      bounds={{ top: 0, left: 0, right: 700, bottom: 200 }}
      scale={1}
    >
      <MDBCard className="max-w-md mx-auto mb-4 md:mb-0 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        <MDBCardBody>
          <MDBTypography blockquote className="mb-0">
            <p className="text-justify text-base">{review.content}</p>
            <footer className="blockquote-footer pt-4 ">
              {review.author}{" "}
              <cite title="Source Title " className="text-black">
                {review.sourceTitle}
              </cite>
            </footer>
          </MDBTypography>
        </MDBCardBody>
      </MDBCard>
    </Draggable>
  );
}

function Review() {
  return (
    <div className="flex justify-center flex-col items-center h-screen max-w-7xl mx-auto py-[100px]">
      <div className="py-20">
        <h1 className="text-5xl font-bold inline border-b-4 border-grey text-black">
          Our Review
        </h1>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap">
        {dummyReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <div
        className="my-10 text-center text-3xl font-bold"
        style={{ color: "black" }}
      >
        Try Dragging Us
      </div>
    </div>
  );
}

export default Review;
