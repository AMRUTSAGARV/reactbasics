import React from "react";

const BootstrapStar = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger"
        data-toggle="modal"
        data-target="#form"
      >
        {" "}
        See Modal with Form{" "}
      </button>
      <div
        className="modal fade"
        id="form"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="text-right cross">
              {" "}
              <i className="fa fa-times mr-2"></i>{" "}
            </div>
            <div className="card-body text-center">
              {" "}
              <img
                src=" https://i.imgur.com/d2dKtI7.png"
                height="100"
                width="100"
              />
              <div className="comment-box text-center">
                <h4>Add a comment</h4>
                <div className="rating">
                  {" "}
                  <input type="radio" name="rating" value="5" id="5" />
                  <label for="5">☆</label>
                  <input type="radio" name="rating" value="4" id="4" />
                  <label for="4">☆</label>
                  <input type="radio" name="rating" value="3" id="3" />
                  <label for="3">☆</label>
                  <input type="radio" name="rating" value="2" id="2" />
                  <label for="2">☆</label>
                  <input type="radio" name="rating" value="1" id="1" />
                  <label for="1">☆</label>{" "}
                </div>
                <div className="comment-area">
                  {" "}
                  <textarea
                    className="form-control"
                    placeholder="what is your view?"
                    rows="4"
                  ></textarea>{" "}
                </div>
                <div className="text-center mt-4">
                  {" "}
                  <button className="btn btn-success send px-5">
                    Send message <i className="fa fa-long-arrow-right ml-1"></i>
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootstrapStar;
