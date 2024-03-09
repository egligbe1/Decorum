import React from "react";
import { LiaStarSolid } from "react-icons/lia";
import './CustomerReview.css'

const CustomerReview = () => {
  return (
    <div className="container">
      <h2 className="title-review mt-5 mb-3">Hear what our customers have to say</h2>
      <div className="row">
        <div className="col-md-4 mb-2">
          <div className="card flex-md-column">
            <div className="rating d-flex">
              <LiaStarSolid className="text-secondary" />
              <LiaStarSolid className="text-secondary" />
              <LiaStarSolid className="text-secondary" />
              <LiaStarSolid className="text-secondary" />
              <LiaStarSolid className="text-secondary" />
            </div>
            <div className="card-body">
              <p className="card-text">
                Just wanted to pass on a message that your delivery guy “Prince”
                is amazing! He’s been at our house a few times now with the
                original sofa, new sofa and new ottoman. He is so friendly, kind
                and helpful – and just wanted to put in an amazing word about
                him!!! (and the sofa/ottoman looks amazing in our den!)
              </p>
              <p>- Julia</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="card flex-md-column">
            <div className="rating d-flex">
              <LiaStarSolid className="text-secondary" />
              <LiaStarSolid className="text-secondary" />
              <LiaStarSolid className="text-secondary" />
              <LiaStarSolid className="text-secondary" />
              <LiaStarSolid className="text-secondary" />
            </div>
            <div className="card-body">
              <p className="card-text">
                We love the living room & kitchen furniture, the 2 sofas and 2
                chairs fit perfectly in the living room and are very
                comfortable. The kitchen table is perfect in our little kitchen.
                We are delighted. We can’t thank you enough for helping us with
                our decisions. Your advice was invaluable. Hope to do business
                with you again soon!
              </p>
              <p>- Pat</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="card flex-md-column">
            <div className="rating d-flex">
              <LiaStarSolid className="text-secondary" />
              <LiaStarSolid className="text-secondary" />
              <LiaStarSolid className="text-secondary" />
              <LiaStarSolid className="text-secondary" />
              <LiaStarSolid className="text-secondary" />
            </div>
            <div className="card-body">
              <p className="card-text">
                I am extremely impressed with your customer service. I don’t
                believe I’ve ever received an email just providing a status
                update on a furniture order! Thank you so much. I am so excited
                to get my new chairs and little table.
              </p>
              <p>- Marilyn</p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>

  );
};

export default CustomerReview;
