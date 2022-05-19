import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer class="page-footer amber">
        <div class="footer-copyright">
          <div class="container">
            ©{new Date().getFullYear()} Copyright Text
            <a
              class="grey-text text-lighten-4 right"
              href="https://github.com/Tsekhmister/react_fortnite_shop"
            >
              Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
