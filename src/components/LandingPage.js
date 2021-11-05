import React from "react";

function LandingPage() {
  return (
    <div>
      <div className="my-5 py-5">
        <div className="text-dark text-center py-5 px-4">
          <div>
            <h2 className="card-title h1-responsive pt-3 mb-5 font-bold">
              <strong>Viktoria Pettersson FEU20</strong>
            </h2>
            <p className="mx-5 mb-5 h5-responsive">
              React applikation som använder ASP.NET Core WebApi för att hämta
              produkter från en databas och listar upp på en sida. Man kan också
              se en detaljerad sida av en specifik produkt och skapa en ny
              produkt som skickas till databasen och uppdaterar produktlistan.
            </p>
            <div className="btn theme_color text-white btn-md">
              <i className="fas fa-clone left"></i> View project
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
