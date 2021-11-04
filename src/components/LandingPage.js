import React from "react";

function LandingPage() {
  return (
    <div>
      <div className="jumbotron card card-image vh-100 m-0 landingpage_color">
        <div className="text-white text-center py-5 px-4">
          <div>
            <h2 className="card-title h1-responsive pt-3 mb-5 font-bold">
              <strong>Viktoria Pettersson FEU20</strong>
            </h2>
            <p className="mx-5 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              fugiat, laboriosam, voluptatem, optio vero odio nam sit officia
              accusamus minus error nisi architecto nulla ipsum dignissimos.
              Odit sed qui, dolorum!
            </p>
            <div class="btn btn-outline-white btn-md">
              <i class="fas fa-clone left"></i> View project
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
