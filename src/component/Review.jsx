import React from "react";
import { MDBCard, MDBCardBody, MDBTypography } from "mdb-react-ui-kit";

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
function Review() {
  return (
    <div className="flex justify-center flex-col items-center h-screen max-w-7xl  mx-auto">
      <div className="p-5 ">
        <h1 className="text-5xl font-bold inline border-b-4 border-grey text-black">
          Our Review
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyReviews.map((review) => (
          <MDBCard key={review.id} className="max-w-md mx-auto">
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
        ))}
      </div>
    </div>
  );
}

export default Review;
